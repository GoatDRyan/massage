import { PageHeader } from "../components/PageHeader";
import { FAQ } from "../components/FAQ";

export function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes sur les séances Renaissens"
        description="Réponses aux questions sur les massages à domicile, la réflexologie, les réservations, les tarifs et la zone d'intervention autour de Rouen."
      />
      <FAQ />
    </>
  );
}
