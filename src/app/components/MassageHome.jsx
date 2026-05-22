import { Home, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { site } from "../../config/site";

const highlights = [
  {
    icon: Sparkles,
    title: "Un massage adapté à votre besoin",
    text: "La pression, le rythme et les zones travaillées sont ajustés selon vos tensions, votre fatigue et votre état émotionnel du moment.",
  },
  {
    icon: Home,
    title: "Le confort du domicile",
    text: "Vous profitez d’une parenthèse de détente sans déplacement, dans un cadre familier et rassurant autour de Rouen Métropole.",
  },
  {
    icon: ShieldCheck,
    title: "Un cadre clair et respectueux",
    text: "Chaque séance se déroule dans l’écoute, la pudeur, la sécurité et le respect de votre rythme.",
  },
];

export function MassageHome({ onNavigate }) {
  return (
    <section id="massage-domicile-rouen" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <MapPin size={16} />
              Massage à domicile à Rouen
            </div>

            <h2 className="text-3xl font-medium leading-tight text-foreground md:text-5xl">
              Massages bien-être à domicile à Rouen et dans la métropole
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-foreground/75">
              <p>
                Renaissens propose des <strong>massages bien-être à domicile à Rouen</strong>, pensés comme des temps d’apaisement, de présence et de reconnexion au corps.
              </p>
              <p>
                L’objectif n’est pas seulement de “faire un massage”, mais de créer une expérience douce et sécurisante : relâcher les tensions, ralentir, respirer et retrouver une sensation d’ancrage.
              </p>
              <p>
                Les séances s’adressent aux personnes qui ressentent du stress, une charge mentale importante, une fatigue corporelle ou simplement le besoin d’un moment de douceur chez elles.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                onClick={() => onNavigate("reservation")}
              >
                Réserver un massage à domicile
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-primary px-6 text-primary hover:bg-primary/5"
                onClick={() => onNavigate("deroulement-seance")}
              >
                Voir le déroulement
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="flex gap-4 pt-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/70">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="rounded-3xl bg-muted p-6 text-sm leading-relaxed text-foreground/70">
              Zone d’intervention : <strong>{site.interventionArea}</strong>. Les massages proposés sont des soins de bien-être non médicaux et ne remplacent pas un avis médical.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
