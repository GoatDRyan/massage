import { Lock } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { site } from "../../config/site";

export function PrivacyPolicyPage() {
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
              <p>Les données personnelles collectées via le site sont limitées au nécessaire : nom, email, téléphone éventuel et contenu du message envoyé par l'utilisateur.</p>
              <p>Le formulaire de contact prépare un email via l'application de messagerie de l'utilisateur. Le site ne stocke pas les messages dans une base de données.</p>
              <p>La réservation peut être gérée par un service externe tel que {site.booking.provider}. Les données renseignées dans le calendrier sont alors traitées selon la politique de confidentialité du prestataire utilisé.</p>
              <p>Pour toute demande d'accès, de rectification ou de suppression de données, vous pouvez contacter : <a className="text-primary hover:underline" href={site.emailHref}>{site.email}</a>.</p>
              <p>Les données ne sont pas revendues. Elles servent uniquement à répondre aux demandes de contact ou à organiser les rendez-vous.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
