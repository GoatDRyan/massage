import { FileText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { site } from "../../config/site";

export function LegalNoticePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentions légales"
        title="Mentions légales"
        description="Informations administratives et éditoriales du site Renaissens."
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 shadow-sm">
            <FileText className="mb-5 text-primary" size={30} />
            <div className="space-y-5 text-sm leading-relaxed text-foreground/75">
              <p>Le site <strong>{site.brandName}</strong> est édité par <strong>{site.legal.editor}</strong>, praticienne bien-être intervenant autour de {site.city}.</p>
              <p>Nom commercial : <strong>{site.legal.businessName}</strong>.</p>
              <p>Contact : <a className="text-primary hover:underline" href={site.emailHref}>{site.email}</a> · <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.</p>
              <p>Hébergement : {site.legal.host} — <a className="text-primary hover:underline" href={site.legal.hostUrl} target="_blank" rel="noreferrer">{site.legal.hostUrl}</a>.</p>
              <p>Les prestations proposées sont des soins de bien-être non médicaux. Elles ne remplacent pas un avis médical, un diagnostic ou un traitement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
