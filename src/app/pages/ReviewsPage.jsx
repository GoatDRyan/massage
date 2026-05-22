import { PageHeader } from "../components/PageHeader";
import { Reviews } from "../components/Reviews";
import { GoogleBusinessProfile } from "../components/GoogleBusinessProfile";

export function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Avis clients"
        title="Avis clients Renaissens"
        description="Les retours clients aident les futures personnes intéressées à réserver en confiance et renforcent la visibilité locale de Renaissens."
      />
      <Reviews />
      <GoogleBusinessProfile />
    </>
  );
}
