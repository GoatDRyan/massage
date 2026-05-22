import { ArrowRight, HeartHandshake, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Reviews } from "../components/Reviews";
import { Card, CardContent } from "../components/ui/card";
import { site } from "../../config/site";

const homeCards = [
  {
    icon: Sparkles,
    title: "Massage à domicile à Rouen",
    text: "Des massages bien-être holistiques pour relâcher les tensions, ralentir et retrouver une sensation d'apaisement.",
    href: "/massage-a-domicile-rouen",
    label: "Découvrir les massages",
  },
  {
    icon: Leaf,
    title: "Réflexologie plantaire à Rouen",
    text: "Un soin centré sur les pieds pour favoriser la détente, l'ancrage et une sensation d'équilibre global.",
    href: "/reflexologie-plantaire-rouen",
    label: "Voir la réflexologie",
  },
  {
    icon: MessageCircle,
    title: "Cercles de parole à Rouen",
    text: "Des espaces collectifs de présence, de douceur et d'écoute pour déposer ce qui a besoin d'être exprimé.",
    href: "/cercles-de-parole-rouen",
    label: "Découvrir les cercles",
  },
];

export function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                Renaissens à Rouen
              </div>
              <h2 className="text-3xl font-medium text-foreground md:text-4xl">
                Une approche douce du bien-être corporel et émotionnel
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-foreground/70">
                {site.brandName} accompagne les personnes qui cherchent de l'apaisement, de la sécurité, de la respiration et une reconnexion progressive au corps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {homeCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.title} className="border-2 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                    <CardContent className="space-y-5 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-primary">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{card.text}</p>
                      </div>
                      <a href={card.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                        {card.label} <ArrowRight size={16} />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 text-center shadow-sm">
            <HeartHandshake className="mx-auto mb-5 text-primary" size={34} />
            <h2 className="text-3xl font-medium text-foreground">Besoin d'un moment pour vous ?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foreground/70">
              Vous pouvez réserver directement une séance ou contacter la praticienne pour poser une question avant de choisir la prestation la plus adaptée.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/reservation" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Réserver une séance
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5">
                Contacter Renaissens
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
