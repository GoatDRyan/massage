import { PageHeader } from "../components/PageHeader";
import { ReflexologyPage } from "../components/ReflexologyPage";
import { SessionProcess } from "../components/SessionProcess";
import { Booking } from "../components/Booking";
import { FAQ } from "../components/FAQ";
import { SeoTextBlock } from "../components/SeoTextBlock";

export function ReflexologyRoutePage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Réflexologie plantaire à Rouen"
        title="Réflexologie plantaire à Rouen"
        description="Une séance centrée sur les pieds pour favoriser la détente, l'ancrage, la respiration et une sensation d'équilibre global."
      />
      <ReflexologyPage onNavigate={onNavigate} />
      <SeoTextBlock title="Une pratique de bien-être centrée sur l'écoute du corps">
        <p>
          La réflexologie plantaire proposée par Renaissens s'inscrit dans une démarche de bien-être. Elle repose sur des pressions ciblées et progressives au niveau des pieds, dans un cadre calme, respectueux et adapté à votre sensibilité.
        </p>
        <p>
          Cette page est dédiée aux personnes qui recherchent une séance de réflexologie plantaire à Rouen ou dans la métropole, avec une approche douce, non médicale et orientée vers la détente corporelle.
        </p>
      </SeoTextBlock>
      <SessionProcess />
      <Booking onNavigate={onNavigate} />
      <FAQ />
    </>
  );
}
