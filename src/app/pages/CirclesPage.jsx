import { MessageCircle, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Card, CardContent } from "../components/ui/card";
import { Experiences } from "../components/Experiences";
import { FAQ } from "../components/FAQ";

const points = [
  {
    icon: Users,
    title: "Un espace collectif",
    text: "Le cercle de parole permet de se retrouver en petit groupe dans un cadre posé, respectueux et confidentiel.",
  },
  {
    icon: MessageCircle,
    title: "Déposer et écouter",
    text: "Chacun peut parler à son rythme, sans obligation de performance ni recherche de solution immédiate.",
  },
  {
    icon: ShieldCheck,
    title: "Un cadre sécurisant",
    text: "La parole est accueillie avec douceur, présence et respect des limites de chaque personne.",
  },
];

export function CirclesPage({ onNavigate }) {
  return (
    <>
      <PageHeader
        eyebrow="Cercles de parole à Rouen"
        title="Cercles de parole à Rouen"
        description="Un espace bienveillant pour déposer, écouter, respirer et retrouver une présence plus douce à soi et aux autres."
      />

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-medium text-foreground md:text-4xl">
                À quoi sert un cercle de parole ?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/75">
                Un cercle de parole est un temps collectif où l'on peut déposer ce qui est présent : fatigue, charge mentale, émotions, questionnements ou besoin de reconnexion. Le but n'est pas de débattre, mais d'écouter et d'être écouté dans un cadre simple et humain.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <Card key={point.title} className="border-2">
                    <CardContent className="space-y-4 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Icon className="text-secondary" size={22} />
                      </div>
                      <h3 className="font-medium text-primary">{point.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/70">{point.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Experiences />

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 text-center shadow-sm">
            <h2 className="text-3xl font-medium text-foreground">Envie de participer à un cercle ?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foreground/70">
              Les dates peuvent être communiquées sur demande. Vous pouvez envoyer un message pour connaître les prochains temps collectifs autour de Rouen.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Demander les prochaines dates
            </button>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
