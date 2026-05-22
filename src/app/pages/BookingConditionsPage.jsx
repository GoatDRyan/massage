import { ReceiptText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export function BookingConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conditions de réservation"
        title="Conditions de réservation"
        description="Cadre des rendez-vous Renaissens : réservation, report, annulation, paiement et nature non médicale des prestations."
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 shadow-sm">
            <ReceiptText className="mb-5 text-primary" size={30} />
            <div className="space-y-5 text-sm leading-relaxed text-foreground/75">
              <p>Les rendez-vous peuvent être pris en ligne via le calendrier de réservation ou par contact direct.</p>
              <p>Le paiement est effectué selon les modalités communiquées par la praticienne. Le site ne gère pas de paiement en ligne dans sa version actuelle.</p>
              <p>En cas d'annulation ou de demande de report, il est recommandé de prévenir le plus tôt possible afin de libérer le créneau pour une autre personne.</p>
              <p>Les prestations proposées sont des soins de bien-être non médicaux. Elles ne se substituent pas à un avis médical, un diagnostic ou un traitement.</p>
              <p>La praticienne se réserve le droit de refuser ou reporter une séance si les conditions d'accueil, de sécurité ou de respect ne sont pas réunies.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
