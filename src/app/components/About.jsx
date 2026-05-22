import { Clock, Ear, Heart } from "lucide-react";
import { site } from "../../config/site";

const values = [
  {
    icon: Ear,
    title: "Écoute active",
    text: "Chaque séance commence par un échange pour comprendre vos besoins, vos tensions et votre état du moment.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Adaptation personnalisée",
    text: "Les gestes, le rythme et l’intensité sont ajustés pour vous offrir un soin vraiment sur mesure.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Clock,
    title: "Respect du rythme",
    text: "La séance laisse au corps le temps de se relâcher, sans pression ni performance à atteindre.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export function About() {
  return (
    <section id="a-propos" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary">À propos</div>
            <h2 className="text-3xl text-foreground md:text-4xl">
              Une approche <span className="text-primary">personnalisée</span> de votre bien-être
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/70">
              <p>
                Praticienne en bien-être depuis {site.experienceYears} ans, je propose des massages holistiques, des massages du monde et un toucher bienveillant pour accompagner le corps et les émotions dans un cadre non médical.
              </p>
              <p>
                Mon approche met l’accent sur l’écoute bienveillante, le féminin sacré, la relaxation profonde et la libération émotionnelle pour une réelle reconnexion à soi.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {values.map(({ icon: Icon, title, text, iconBg, iconColor }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                    <Icon className={iconColor} size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="shadow-xl">
              <img className="rounded-2xl" src={`${import.meta.env.BASE_URL}img/about.png`} alt="Massage bien-être à domicile autour de Rouen avec Renaissens" loading="lazy" width="1536" height="1024" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-accent px-6 py-4 text-accent-foreground shadow-xl md:-right-6">
              <div className="text-2xl font-medium">{site.experienceYears} ans</div>
              <div className="text-sm">d’expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
