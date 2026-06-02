const DEFAULT_CONTENT_PATH = "public/content/content.json";

function sendJson(response, status, data) {
  response.status(status).setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

function getEnv(name, fallback = "") {
  return process.env[name] || fallback;
}

function toBase64(value) {
  return Buffer.from(value, "utf8").toString("base64");
}

function fromBase64(value) {
  return Buffer.from(value || "", "base64").toString("utf8");
}

async function githubRequest(url, options = {}) {
  const token = getEnv("GITHUB_TOKEN");
  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured in Vercel.");
  }

  const githubResponse = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });

  const data = await githubResponse.json().catch(() => ({}));
  if (!githubResponse.ok) {
    throw new Error(data.message || `GitHub API error ${githubResponse.status}`);
  }

  return data;
}

function parseRequestBody(request) {
  if (!request.body) return {};
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }
  return request.body;
}

export default async function handler(request, response) {
  const owner = getEnv("GITHUB_OWNER");
  const repo = getEnv("GITHUB_REPO");
  const branch = getEnv("GITHUB_BRANCH", "main");
  const contentPath = getEnv("CONTENT_FILE_PATH", DEFAULT_CONTENT_PATH);

  response.setHeader("Cache-Control", "no-store");

  if (!owner || !repo) {
    return sendJson(response, 500, {
      error: "GITHUB_OWNER and GITHUB_REPO must be configured in Vercel.",
    });
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${contentPath}`;

  try {
    if (request.method === "GET") {
      const file = await githubRequest(`${apiUrl}?ref=${branch}`);
      const fileContent = fromBase64(file.content);
      return sendJson(response, 200, { content: JSON.parse(fileContent), sha: file.sha });
    }

    if (request.method === "POST") {
      const adminPassword = getEnv("ADMIN_PASSWORD");
      if (!adminPassword) {
        return sendJson(response, 500, { error: "ADMIN_PASSWORD is not configured in Vercel." });
      }

      const body = parseRequestBody(request);
      if (body.password !== adminPassword) {
        return sendJson(response, 401, { error: "Invalid admin password." });
      }

      if (!body.content || typeof body.content !== "object") {
        return sendJson(response, 400, { error: "Missing content object." });
      }

      const currentFile = await githubRequest(`${apiUrl}?ref=${branch}`);
      const updatedContent = JSON.stringify(body.content, null, 2) + "\n";

      const result = await githubRequest(apiUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Update website content from admin interface",
          content: toBase64(updatedContent),
          sha: currentFile.sha,
          branch,
        }),
      });

      return sendJson(response, 200, {
        ok: true,
        commit: result.commit?.html_url,
      });
    }

    response.setHeader("Allow", "GET, POST");
    return sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    return sendJson(response, 500, { error: error.message });
  }
}
