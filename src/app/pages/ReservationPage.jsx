import { PageHeader } from "../components/PageHeader";
import { Booking } from "../components/Booking";
import { SessionProcess } from "../components/SessionProcess";
import { FAQ } from "../components/FAQ";

export function ReservationPage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        title="Réserver une séance Renaissens à Rouen"
        description="Choisissez la prestation, la durée et le créneau qui vous conviennent. Le calendrier intégré permet de préparer la réservation simplement."
      />
      <Booking onNavigate={onNavigate} />
      <SessionProcess />
      <FAQ />
    </>
  );
}
