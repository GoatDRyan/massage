import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Card, CardContent } from "../components/ui/card";

const articleIdeas = [
  {
    title: "Comment relâcher la charge mentale grâce au massage ?",
    category: "Stress et charge mentale",
    text: "Un futur article pour expliquer le rôle du toucher bienveillant, de la respiration et du retour au corps dans une démarche de détente.",
  },
  {
    title: "Pourquoi le corps garde parfois les émotions ?",
    category: "Reconnexion au corps",
    text: "Un sujet utile pour parler d'apaisement, d'écoute corporelle et de sécurité sans faire de promesse médicale.",
  },
  {
    title: "À quoi sert un cercle de parole ?",
    category: "Cercles de parole",
    text: "Un article SEO différenciant pour expliquer le cadre, les bénéfices humains et le déroulement d'un cercle à Rouen.",
  },
  {
    title: "Où se ressourcer autour de Rouen ?",
    category: "Bien-être local",
    text: "Un article local pour développer la visibilité longue traîne autour du bien-être en Normandie et de Rouen Métropole.",
  },
];

export function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog bien-être"
        title="Blog bien-être à Rouen"
        description="Des contenus à développer progressivement autour du stress, de la charge mentale, de la reconnexion au corps, des cercles de parole et du bien-être local."
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-medium text-foreground md:text-4xl">Articles à publier progressivement</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                Le blog est prévu pour renforcer le référencement long terme. Les articles ne sont pas encore publiés : cette page sert de structure propre pour les futurs contenus.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {articleIdeas.map((article) => (
                <Card key={article.title} className="border-2">
                  <CardContent className="space-y-4 pt-6">
                    <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-medium text-primary">{article.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{article.text}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/70">
                      À rédiger <ArrowRight size={16} />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
