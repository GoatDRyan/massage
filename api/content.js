const DEFAULT_CONTENT_PATH = "public/content/content.json";

function jsonResponse(response, status = 200) {
  return new Response(JSON.stringify(response), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getEnv(name, fallback = "") {
  return process.env[name] || fallback;
}

async function githubRequest(url, options = {}) {
  const token = getEnv("GITHUB_TOKEN");
  if (!token) throw new Error("GITHUB_TOKEN is not configured in Vercel.");

  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `GitHub API error ${response.status}`);
  }

  return data;
}

export default async function handler(request) {
  const owner = getEnv("GITHUB_OWNER");
  const repo = getEnv("GITHUB_REPO");
  const branch = getEnv("GITHUB_BRANCH", "main");
  const contentPath = getEnv("CONTENT_FILE_PATH", DEFAULT_CONTENT_PATH);

  if (!owner || !repo) {
    return jsonResponse({ error: "GITHUB_OWNER and GITHUB_REPO must be configured in Vercel." }, 500);
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${contentPath}`;

  try {
    if (request.method === "GET") {
      const file = await githubRequest(`${apiUrl}?ref=${branch}`);
      const content = Buffer.from(file.content || "", "base64").toString("utf8");
      return jsonResponse({ content: JSON.parse(content), sha: file.sha });
    }

    if (request.method === "POST") {
      const adminPassword = getEnv("ADMIN_PASSWORD");
      if (!adminPassword) return jsonResponse({ error: "ADMIN_PASSWORD is not configured in Vercel." }, 500);

      const body = await request.json().catch(() => ({}));
      if (body.password !== adminPassword) return jsonResponse({ error: "Invalid admin password." }, 401);
      if (!body.content || typeof body.content !== "object") return jsonResponse({ error: "Missing content object." }, 400);

      const currentFile = await githubRequest(`${apiUrl}?ref=${branch}`);
      const updatedContent = JSON.stringify(body.content, null, 2) + "\n";
      const encodedContent = Buffer.from(updatedContent, "utf8").toString("base64");

      const result = await githubRequest(apiUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Update website content from admin interface",
          content: encodedContent,
          sha: currentFile.sha,
          branch,
        }),
      });

      return jsonResponse({ ok: true, commit: result.commit?.html_url });
    }

    return jsonResponse({ error: "Method not allowed." }, 405);
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
