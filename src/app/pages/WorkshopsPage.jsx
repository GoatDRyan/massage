import { CalendarDays, Leaf, MapPinned, Sparkles } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Card, CardContent } from "../components/ui/card";
import { Experiences } from "../components/Experiences";
import { SeoTextBlock } from "../components/SeoTextBlock";

const cards = [
  {
    icon: Leaf,
    title: "Ralentir",
    text: "Des formats pensés pour sortir du rythme quotidien et retrouver une respiration plus ample.",
  },
  {
    icon: Sparkles,
    title: "Se reconnecter",
    text: "Des temps guidés autour du corps, de la parole, de la présence et de la douceur.",
  },
  {
    icon: MapPinned,
    title: "En Normandie",
    text: "Des expériences organisées selon les lieux, les périodes et les demandes autour de Rouen et en Normandie.",
  },
];

export function WorkshopsPage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Ateliers et retraites bien-être en Normandie"
        title="Ateliers bien-être et week-ends ressourçants en Normandie"
        description="Des expériences collectives pour ralentir, respirer, se reconnecter au corps et partager un moment de présence dans un cadre bienveillant."
      />

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="border-2">
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="text-accent" size={22} />
                    </div>
                    <h2 className="text-xl font-medium text-primary">{card.title}</h2>
                    <p className="text-sm leading-relaxed text-foreground/70">{card.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Experiences />

      <SeoTextBlock title="Des formats sur demande" className="bg-muted/30">
        <p>
          Les ateliers bien-être et retraites Renaissens peuvent prendre différentes formes : cercle de parole, temps de relaxation, pratiques d'ancrage, moments de silence, respiration, partage en petit groupe ou week-end ressourçant.
        </p>
        <p>
          Les dates, lieux et modalités sont communiqués selon les périodes. Pour organiser ou rejoindre un atelier en Normandie, le plus simple est de contacter la praticienne.
        </p>
        <button
          type="button"
          onClick={() => onNavigate("contact")}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <CalendarDays size={16} /> Demander les prochaines dates
        </button>
      </SeoTextBlock>
    </>
  );
}
