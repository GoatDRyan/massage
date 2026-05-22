import { Footprints, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "Apaisement global",
    text: "La réflexologie plantaire aide à installer un état de détente et de relâchement progressif.",
  },
  {
    icon: Footprints,
    title: "Stimulation des zones réflexes",
    text: "Le travail se concentre sur les pieds, avec des pressions ciblées sur différentes zones réflexes.",
  },
  {
    icon: HeartHandshake,
    title: "Écoute du corps",
    text: "La séance reste douce, respectueuse et adaptée à votre sensibilité du moment.",
  },
];

export function ReflexologyPage({ onNavigate }) {
  return (
    <section id="reflexologie-plantaire-rouen" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <Sparkles size={16} />
              Réflexologie plantaire à Rouen
            </div>

            <h2 className="text-3xl font-medium leading-tight text-foreground md:text-5xl">
              Réflexologie plantaire à Rouen : détente, ancrage et équilibre corporel
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              La <strong>réflexologie plantaire</strong> est une pratique de bien-être centrée sur les pieds. Elle vise à favoriser la détente, l’écoute du corps et une sensation d’équilibre global grâce à des pressions ciblées et progressives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2 transition-colors hover:border-secondary/50">
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Icon className="text-secondary" size={22} />
                    </div>
                    <h3 className="font-medium text-primary">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 rounded-[2rem] border bg-card p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-medium text-foreground">Pour qui ?</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                Cette séance peut convenir aux personnes qui recherchent une approche douce, un moment de reconnexion, une sensation d’ancrage ou un accompagnement bien-être complémentaire à leur quotidien.
              </p>
            </div>
            <Button
              className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              onClick={() => onNavigate("reservation")}
            >
              Réserver une réflexologie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
