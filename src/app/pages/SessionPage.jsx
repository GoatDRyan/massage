import { PageHeader } from "../components/PageHeader";
import { SessionProcess } from "../components/SessionProcess";
import { Booking } from "../components/Booking";
import { FAQ } from "../components/FAQ";
import { SeoTextBlock } from "../components/SeoTextBlock";

export function SessionPage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Déroulement d'une séance"
        title="Comment se déroule une séance Renaissens ?"
        description="De la réservation au retour au calme, chaque étape est pensée pour rendre l'expérience simple, rassurante et respectueuse."
      />
      <SessionProcess />
      <SeoTextBlock title="Avant, pendant et après la séance" className="bg-muted/30">
        <p>
          Avant la séance, un court échange permet de comprendre vos attentes : détente, relâchement des tensions, besoin d'ancrage, fatigue, charge mentale ou simple envie de douceur. La prestation et la durée sont choisies selon votre besoin.
        </p>
        <p>
          Pendant la séance, l'installation se fait dans un espace calme à domicile. La praticienne adapte le rythme, la pression et les zones travaillées. Après le soin, un temps de retour progressif permet de reprendre contact avec vos sensations sans brusquer le corps.
        </p>
      </SeoTextBlock>
      <Booking onNavigate={onNavigate} />
      <FAQ />
    </>
  );
}
