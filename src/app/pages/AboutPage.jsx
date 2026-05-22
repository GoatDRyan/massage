import { PageHeader } from "../components/PageHeader";
import { About } from "../components/About";
import { PersonalStory } from "../components/PersonalStory";
import { Testimonials } from "../components/Testimonials";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="L'histoire et l'approche de Renaissens"
        description="Une approche humaine du massage bien-être : écoute, sécurité, douceur, présence et respect du rythme de chaque personne."
      />
      <About />
      <PersonalStory />
      <Testimonials />
    </>
  );
}
