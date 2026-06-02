import { FileText, Lock, ReceiptText } from "lucide-react";
import { useContent } from "../../content/ContentProvider";

function LegalBlock({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[2rem] border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
          <Icon className="text-primary" size={20} />
        </div>
        <h3 className="text-2xl font-medium text-primary">{title}</h3>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-foreground/70">{children}</div>
    </section>
  );
}

export function LegalPages() {
  const { site, legalTexts } = useContent();
  return (
    <section id="pages-legales" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              Pages légales
            </div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
              Mentions légales, confidentialité et conditions de réservation
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/65">
              Ces textes constituent une base à compléter avec les informations administratives définitives de l’activité avant mise en ligne officielle.
            </p>
          </div>

          <div className="space-y-6">
            <LegalBlock id="mentions-legales" icon={FileText} title="Mentions légales">
              <p>
                Le site <strong>{site.brandName}</strong> est édité par <strong>{site.legal.editor}</strong>, praticienne bien-être intervenant autour de {site.city}.
              </p>
              <p>
                Contact : <a className="text-primary hover:underline" href={site.emailHref}>{site.email}</a> · <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.
              </p>
              <p>
                SIRET : <strong>{site.legal.siret}</strong>. Cette information doit être complétée avant la mise en ligne commerciale du site.
              </p>
              <p>
                Hébergement : {site.legal.host} — <a className="text-primary hover:underline" href={site.legal.hostUrl} target="_blank" rel="noreferrer">{site.legal.hostUrl}</a>.
              </p>
            </LegalBlock>

            <LegalBlock id="politique-confidentialite" icon={Lock} title="Politique de confidentialité">
              <p>
                Les données personnelles collectées via le site sont limitées au nécessaire : nom, adresse email, téléphone éventuel et contenu du message envoyé par l’utilisateur.
              </p>
              <p>
                Le formulaire de contact prépare un email via l’application de messagerie de l’utilisateur. Le site ne stocke pas les messages dans une base de données.
              </p>
              <p>
                La réservation peut être gérée par un service externe tel que {site.booking.provider}. Les données renseignées dans le calendrier sont alors traitées selon la politique de confidentialité du prestataire utilisé.
              </p>
              <p>
                Pour toute demande d’accès, de rectification ou de suppression de données, vous pouvez contacter : <a className="text-primary hover:underline" href={site.emailHref}>{site.email}</a>.
              </p>
            </LegalBlock>

            <LegalBlock id="conditions-reservation" icon={ReceiptText} title="Conditions de réservation">
              <p>
                Les rendez-vous peuvent être pris en ligne via le calendrier de réservation ou par contact direct. Le paiement est effectué selon les modalités communiquées par la praticienne.
              </p>
              <p>
                En cas d’annulation ou de demande de report, il est recommandé de prévenir le plus tôt possible afin de libérer le créneau pour une autre personne.
              </p>
              <p>
                Les prestations proposées sont des soins de bien-être non médicaux. Elles ne se substituent pas à un avis médical, un diagnostic ou un traitement.
              </p>
              <p>
                La praticienne se réserve le droit de refuser ou reporter une séance si les conditions d’accueil, de sécurité ou de respect ne sont pas réunies.
              </p>
            </LegalBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
