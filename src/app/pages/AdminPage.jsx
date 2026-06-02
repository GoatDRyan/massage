import { useEffect, useMemo, useState } from "react";
import { Save, Download, Plus, Trash2, Lock, RefreshCw } from "lucide-react";
import { defaultContent } from "../../content/defaultContent";

const emptyDuration = {
  time: "60 min",
  price: "70 €",
  calLink: "",
  calOrigin: "https://cal.com",
  bookingUrl: "",
};

const emptyService = {
  id: "nouvelle-prestation",
  name: "Nouvelle prestation",
  description: "Description de la prestation.",
  benefits: ["Bien-être", "Détente"],
  durations: [emptyDuration],
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function setNestedValue(object, path, value) {
  const copy = clone(object);
  let target = copy;
  for (let i = 0; i < path.length - 1; i += 1) {
    target = target[path[i]];
  }
  target[path[path.length - 1]] = value;
  return copy;
}

function Field({ label, value, onChange, type = "text", textarea = false, placeholder = "" }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {textarea ? (
        <textarea
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      ) : (
        <input
          type={type}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      )}
    </label>
  );
}

function AdminCard({ title, description, children }) {
  return (
    <section className="rounded-[2rem] border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
        {description && <p className="mt-2 text-sm leading-relaxed text-foreground/65">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function ArrayEditor({ items, onChange, placeholder = "Nouvel élément" }) {
  const values = items || [];
  return (
    <div className="space-y-2">
      {values.map((item, index) => (
        <div key={`array-item-${index}`} className="flex gap-2">
          <input
            value={item}
            onChange={(event) => {
              const next = [...values];
              next[index] = event.target.value;
              onChange(next);
            }}
            className="w-full rounded-xl border border-border bg-white px-4 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            type="button"
            onClick={() => onChange(values.filter((_, itemIndex) => itemIndex !== index))}
            className="rounded-xl border px-3 text-destructive hover:bg-destructive/10"
            aria-label="Supprimer"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...values, placeholder])}
        className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
      >
        <Plus size={16} /> Ajouter
      </button>
    </div>
  );
}

function ServicesEditor({ title, services, onChange }) {
  const updateService = (index, nextService) => {
    const next = [...services];
    next[index] = nextService;
    onChange(next);
  };

  return (
    <AdminCard title={title} description="Modifie les prestations, bénéfices, durées, prix et liens Cal.com.">
      <div className="space-y-6">
        {services.map((service, serviceIndex) => (
          <div key={`service-${serviceIndex}`} className="rounded-3xl border bg-muted/30 p-5">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground">{service.name || "Prestation"}</h3>
              <button
                type="button"
                onClick={() => onChange(services.filter((_, index) => index !== serviceIndex))}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs text-destructive hover:bg-destructive/10"
              >
                <Trash2 size={14} /> Supprimer
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Identifiant technique" value={service.id} onChange={(value) => updateService(serviceIndex, { ...service, id: value })} />
              <Field label="Nom" value={service.name} onChange={(value) => updateService(serviceIndex, { ...service, name: value })} />
            </div>
            <div className="mt-4">
              <Field label="Description" textarea value={service.description} onChange={(value) => updateService(serviceIndex, { ...service, description: value })} />
            </div>

            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-foreground">Bénéfices</p>
              <ArrayEditor
                items={service.benefits || []}
                placeholder="Nouveau bénéfice"
                onChange={(benefits) => updateService(serviceIndex, { ...service, benefits })}
              />
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-sm font-medium text-foreground">Durées, tarifs et réservation</p>
              {(service.durations || []).map((duration, durationIndex) => (
                <div key={`duration-${durationIndex}`} className="rounded-2xl border bg-white p-4">
                  <div className="mb-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const durations = (service.durations || []).filter((_, index) => index !== durationIndex);
                        updateService(serviceIndex, { ...service, durations });
                      }}
                      className="text-xs text-destructive hover:underline"
                    >
                      Supprimer cette durée
                    </button>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Field label="Durée" value={duration.time} onChange={(value) => {
                      const durations = [...(service.durations || [])];
                      durations[durationIndex] = { ...duration, time: value };
                      updateService(serviceIndex, { ...service, durations });
                    }} />
                    <Field label="Prix" value={duration.price} onChange={(value) => {
                      const durations = [...(service.durations || [])];
                      durations[durationIndex] = { ...duration, price: value };
                      updateService(serviceIndex, { ...service, durations });
                    }} />
                    <Field label="Cal.com calLink" value={duration.calLink} placeholder="magali-perrin/massage" onChange={(value) => {
                      const durations = [...(service.durations || [])];
                      durations[durationIndex] = { ...duration, calLink: value, bookingUrl: `${duration.calOrigin || "https://cal.com"}/${value}` };
                      updateService(serviceIndex, { ...service, durations });
                    }} />
                    <Field label="Origine Cal.com" value={duration.calOrigin} onChange={(value) => {
                      const durations = [...(service.durations || [])];
                      durations[durationIndex] = { ...duration, calOrigin: value, bookingUrl: `${value}/${duration.calLink || ""}` };
                      updateService(serviceIndex, { ...service, durations });
                    }} />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => updateService(serviceIndex, { ...service, durations: [...(service.durations || []), { ...emptyDuration }] })}
                className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
              >
                <Plus size={16} /> Ajouter une durée
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...services, { ...emptyService, id: `prestation-${Date.now()}` }])}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus size={16} /> Ajouter une prestation
        </button>
      </div>
    </AdminCard>
  );
}

export function AdminPage() {
  const [content, setContent] = useState(defaultContent);
  const [activeTab, setActiveTab] = useState("general");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}content/content.json?ts=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          setContent({ ...defaultContent, ...data, site: { ...defaultContent.site, ...(data.site || {}) } });
        }
      } catch {
        setStatus("Mode local : le contenu par défaut est chargé.");
      }
    }
    loadContent();
  }, []);

  const jsonPreview = useMemo(() => JSON.stringify(content, null, 2), [content]);

  const updateSite = (path, value) => {
    setContent((current) => setNestedValue(current, ["site", ...path], value));
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const saveContent = async () => {
    setIsSaving(true);
    setStatus("Sauvegarde en cours...");

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, content }),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json().catch(() => ({}))
        : { error: await response.text().catch(() => "") };

      if (!response.ok) {
        throw new Error(result.error || `Erreur HTTP ${response.status}. Vérifie les variables Vercel et que /api/content existe.`);
      }

      setStatus("Contenu sauvegardé dans GitHub. Vercel va redéployer le site automatiquement dans quelques minutes.");
    } catch (error) {
      setStatus(`Sauvegarde impossible : ${error.message}. Tu peux télécharger content.json en attendant.`);
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    ["general", "Général"],
    ["services", "Prestations"],
    ["faq", "FAQ"],
    ["experiences", "Expériences"],
    ["reviews", "Avis"],
    ["legal", "Textes légaux"],
    ["json", "JSON"],
  ];

  return (
    <section className="min-h-screen bg-muted/30 py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-[2rem] border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                  <Lock size={16} /> Admin gratuit
                </div>
                <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Interface d’administration Renaissens</h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
                  Cette interface modifie un fichier JSON dans GitHub via une fonction Vercel gratuite. Tu peux changer les textes, les tarifs, les prestations, les avis et les liens Cal.com sans toucher au code React.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-3">
                <Field label="Mot de passe admin" type="password" value={password} onChange={setPassword} placeholder="Mot de passe configuré dans Vercel" />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={saveContent}
                    disabled={isSaving}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
                  >
                    {isSaving ? <RefreshCw className="animate-spin" size={16} /> : <Save size={16} />}
                    Sauvegarder
                  </button>
                  <button
                    type="button"
                    onClick={downloadJson}
                    className="inline-flex items-center justify-center rounded-full border px-4 py-3 text-primary hover:bg-primary/5"
                    aria-label="Télécharger le JSON"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
            {status && <p className="mt-5 rounded-2xl bg-muted p-4 text-sm text-foreground/70">{status}</p>}
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeTab === key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/60"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "general" && (
            <AdminCard title="Informations générales" description="Coordonnées, zone d'intervention, réseaux sociaux et liens Google.">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nom du site" value={content.site.brandName} onChange={(value) => updateSite(["brandName"], value)} />
                <Field label="Nom de la praticienne" value={content.site.practitionerName} onChange={(value) => updateSite(["practitionerName"], value)} />
                <Field label="Téléphone" value={content.site.phone} onChange={(value) => updateSite(["phone"], value)} />
                <Field label="Email" value={content.site.email} onChange={(value) => updateSite(["email"], value)} />
                <Field label="Ville" value={content.site.city} onChange={(value) => updateSite(["city"], value)} />
                <Field label="Zone d'intervention" value={content.site.interventionArea} onChange={(value) => updateSite(["interventionArea"], value)} />
                <Field label="URL Google Business Profile" value={content.site.google?.businessProfileUrl} onChange={(value) => updateSite(["google", "businessProfileUrl"], value)} />
                <Field label="URL avis Google" value={content.site.google?.reviewUrl} onChange={(value) => updateSite(["google", "reviewUrl"], value)} />
                <Field label="Instagram" value={content.site.socials?.instagram} onChange={(value) => updateSite(["socials", "instagram"], value)} />
                <Field label="Facebook" value={content.site.socials?.facebook} onChange={(value) => updateSite(["socials", "facebook"], value)} />
              </div>
              <div className="mt-4">
                <Field label="Phrase d'accroche" textarea value={content.site.baseline} onChange={(value) => updateSite(["baseline"], value)} />
              </div>
            </AdminCard>
          )}

          {activeTab === "services" && (
            <div className="space-y-6">
              <ServicesEditor title="Massages" services={content.massageServices || []} onChange={(massageServices) => setContent({ ...content, massageServices })} />
              <ServicesEditor title="Réflexologie" services={content.reflexologyServices || []} onChange={(reflexologyServices) => setContent({ ...content, reflexologyServices })} />
            </div>
          )}

          {activeTab === "faq" && (
            <AdminCard title="FAQ" description="Questions fréquentes affichées sur la page FAQ.">
              <div className="space-y-4">
                {(content.faqItems || []).map((item, index) => (
                  <div key={`faq-${index}`} className="rounded-2xl border bg-muted/30 p-4">
                    <div className="mb-3 flex justify-end">
                      <button type="button" onClick={() => setContent({ ...content, faqItems: content.faqItems.filter((_, itemIndex) => itemIndex !== index) })} className="text-xs text-destructive hover:underline">Supprimer</button>
                    </div>
                    <div className="grid gap-4">
                      <Field label="Question" value={item.question} onChange={(value) => {
                        const faqItems = [...content.faqItems]; faqItems[index] = { ...item, question: value }; setContent({ ...content, faqItems });
                      }} />
                      <Field label="Réponse" textarea value={item.answer} onChange={(value) => {
                        const faqItems = [...content.faqItems]; faqItems[index] = { ...item, answer: value }; setContent({ ...content, faqItems });
                      }} />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={() => setContent({ ...content, faqItems: [...(content.faqItems || []), { question: "Nouvelle question", answer: "Nouvelle réponse." }] })} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Plus size={16} /> Ajouter une question</button>
              </div>
            </AdminCard>
          )}

          {activeTab === "experiences" && (
            <AdminCard title="Expériences" description="Cercles de parole, ateliers et week-ends bien-être.">
              <div className="space-y-4">
                {(content.experiences || []).map((experience, index) => (
                  <div key={`experience-${index}`} className="rounded-2xl border bg-muted/30 p-4">
                    <div className="mb-3 flex justify-end">
                      <button type="button" onClick={() => setContent({ ...content, experiences: content.experiences.filter((_, itemIndex) => itemIndex !== index) })} className="text-xs text-destructive hover:underline">Supprimer</button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Field label="Titre" value={experience.title} onChange={(value) => { const experiences = [...content.experiences]; experiences[index] = { ...experience, title: value }; setContent({ ...content, experiences }); }} />
                      <Field label="Dates / fréquence" value={experience.schedule} onChange={(value) => { const experiences = [...content.experiences]; experiences[index] = { ...experience, schedule: value }; setContent({ ...content, experiences }); }} />
                      <Field label="Image" value={experience.img} onChange={(value) => { const experiences = [...content.experiences]; experiences[index] = { ...experience, img: value }; setContent({ ...content, experiences }); }} />
                      <Field label="Alt image" value={experience.alt} onChange={(value) => { const experiences = [...content.experiences]; experiences[index] = { ...experience, alt: value }; setContent({ ...content, experiences }); }} />
                    </div>
                    <div className="mt-4">
                      <Field label="Description" textarea value={experience.description} onChange={(value) => { const experiences = [...content.experiences]; experiences[index] = { ...experience, description: value }; setContent({ ...content, experiences }); }} />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={() => setContent({ ...content, experiences: [...(content.experiences || []), { icon: "leaf", title: "Nouvelle expérience", description: "Description.", schedule: "Dates à venir", img: "./img/weekend.png", alt: "Expérience bien-être" }] })} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Plus size={16} /> Ajouter une expérience</button>
              </div>
            </AdminCard>
          )}

          {activeTab === "reviews" && (
            <AdminCard title="Avis clients" description="Ajoute uniquement de vrais avis, avec accord si nécessaire.">
              <div className="space-y-4">
                {(content.clientReviews || []).map((review, index) => (
                  <div key={`review-${index}`} className="rounded-2xl border bg-muted/30 p-4">
                    <div className="mb-3 flex justify-end"><button type="button" onClick={() => setContent({ ...content, clientReviews: content.clientReviews.filter((_, itemIndex) => itemIndex !== index) })} className="text-xs text-destructive hover:underline">Supprimer</button></div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Field label="Nom" value={review.author || review.clientName} onChange={(value) => { const clientReviews = [...content.clientReviews]; clientReviews[index] = { ...review, author: value, clientName: value }; setContent({ ...content, clientReviews }); }} />
                      <Field label="Note sur 5" type="number" value={String(review.rating || 5)} onChange={(value) => { const clientReviews = [...content.clientReviews]; clientReviews[index] = { ...review, rating: Number(value) }; setContent({ ...content, clientReviews }); }} />
                    </div>
                    <div className="mt-4"><Field label="Avis" textarea value={review.text || review.reviewText} onChange={(value) => { const clientReviews = [...content.clientReviews]; clientReviews[index] = { ...review, text: value, reviewText: value }; setContent({ ...content, clientReviews }); }} /></div>
                  </div>
                ))}
                <button type="button" onClick={() => setContent({ ...content, clientReviews: [...(content.clientReviews || []), { author: "Cliente", rating: 5, text: "Avis client à remplacer." }] })} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Plus size={16} /> Ajouter un avis</button>
              </div>
            </AdminCard>
          )}

          {activeTab === "legal" && (
            <AdminCard title="Textes légaux" description="Textes simples affichés sur les pages légales.">
              <div className="space-y-6">
                {[["legalNotice", "Mentions légales"], ["privacyPolicy", "Politique de confidentialité"], ["bookingConditions", "Conditions de réservation"]].map(([key, title]) => (
                  <div key={key}>
                    <p className="mb-2 text-sm font-medium text-foreground">{title}</p>
                    <ArrayEditor items={content.legalTexts?.[key] || []} placeholder="Nouveau paragraphe" onChange={(items) => setContent({ ...content, legalTexts: { ...(content.legalTexts || {}), [key]: items } })} />
                  </div>
                ))}
              </div>
            </AdminCard>
          )}

          {activeTab === "json" && (
            <AdminCard title="JSON complet" description="Mode avancé. Tu peux copier ou vérifier toute la structure.">
              <textarea
                value={jsonPreview}
                onChange={(event) => {
                  try {
                    setContent(JSON.parse(event.target.value));
                    setStatus("JSON valide.");
                  } catch {
                    setStatus("JSON invalide : corrige la syntaxe avant de sauvegarder.");
                  }
                }}
                rows={28}
                className="w-full rounded-2xl border bg-slate-950 p-4 font-mono text-xs text-slate-100 outline-none"
              />
            </AdminCard>
          )}
        </div>
      </div>
    </section>
  );
}
