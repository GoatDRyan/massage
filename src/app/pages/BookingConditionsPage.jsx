import { ReceiptText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { useContent } from "../../content/ContentProvider";

export function BookingConditionsPage() {
  const { legalTexts } = useContent();
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
              {(legalTexts.bookingConditions || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
