import { PageHeader } from "../components/PageHeader";
import { Contact } from "../components/Contact";
import { GoogleBusinessProfile } from "../components/GoogleBusinessProfile";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contacter Renaissens à Rouen"
        description="Une question, une demande de rendez-vous ou un besoin particulier ? Contactez directement la praticienne."
      />
      <Contact />
    </>
  );
}
