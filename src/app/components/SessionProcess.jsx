import { CalendarCheck, Home, MessageCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Réservation",
    text: "Vous choisissez la prestation, la durée et le créneau disponible via le calendrier ou par contact direct.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Échange avant la séance",
    text: "Un court temps d’écoute permet de comprendre vos besoins : stress, tensions, fatigue, besoin d’ancrage ou simple détente.",
  },
  {
    number: "03",
    icon: Home,
    title: "Installation à domicile",
    text: "La praticienne installe le matériel dans un espace calme, confortable et chauffé. Vous n’avez pas besoin de gérer la technique.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Soin et retour au calme",
    text: "La séance se déroule dans un cadre respectueux, puis se termine par un temps de retour progressif pour repartir en douceur.",
  },
];

export function SessionProcess() {
  return (
    <section id="deroulement-seance" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
              Déroulement d’une séance
            </div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
              Comment se déroule une séance de massage à domicile ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Chaque étape est pensée pour rendre l’expérience simple, rassurante et confortable, de la réservation jusqu’au retour au calme.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="border-2">
                  <CardContent className="space-y-5 pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-3xl font-medium text-primary/30">{step.number}</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <h3 className="font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{step.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
