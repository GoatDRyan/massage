import { Lock } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { useContent } from "../../content/ContentProvider";

export function PrivacyPolicyPage() {
  const { site, legalTexts } = useContent();
  return (
    <>
      <PageHeader
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Informations sur les données personnelles traitées via le site Renaissens et les services externes utilisés pour la réservation."
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 shadow-sm">
            <Lock className="mb-5 text-primary" size={30} />
            <div className="space-y-5 text-sm leading-relaxed text-foreground/75">
              {(legalTexts.privacyPolicy || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>Pour toute demande d'accès, de rectification ou de suppression de données, vous pouvez contacter : <a className="text-primary hover:underline" href={site.emailHref}>{site.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
