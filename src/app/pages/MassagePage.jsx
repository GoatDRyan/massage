import { PageHeader } from "../components/PageHeader";
import { MassageHome } from "../components/MassageHome";
import { Services } from "../components/Services";
import { SessionProcess } from "../components/SessionProcess";
import { Booking } from "../components/Booking";
import { FAQ } from "../components/FAQ";
import { SeoTextBlock } from "../components/SeoTextBlock";

export function MassagePage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Massage à domicile à Rouen"
        title="Massages bien-être à domicile à Rouen"
        description="Des séances personnalisées pour relâcher les tensions, retrouver de la douceur et vivre un moment d'apaisement chez vous, dans un cadre respectueux et non médical."
      />
      <MassageHome onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <SeoTextBlock title="Pourquoi choisir un massage bien-être à domicile ?" className="bg-muted/30">
        <p>
          Le massage à domicile permet de profiter d'un soin sans ajouter de déplacement ni de fatigue. La séance se déroule dans votre environnement, ce qui facilite le retour au calme et prolonge la sensation de sérénité après le rendez-vous.
        </p>
        <p>
          Les massages Renaissens s'adressent aux personnes qui recherchent une présence attentive, une écoute du corps et un accompagnement doux face au stress, aux tensions ou à la charge mentale. Les prestations restent des soins de bien-être et ne remplacent pas un suivi médical.
        </p>
      </SeoTextBlock>
      <SessionProcess />
      <Booking onNavigate={onNavigate} />
      <FAQ />
    </>
  );
}
