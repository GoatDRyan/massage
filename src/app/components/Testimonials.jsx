import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { trustCards } from "../../data/reassurance";

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-20" aria-labelledby="confiance-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">Confiance</div>
            <h2 id="confiance-title" className="mb-4 text-3xl text-foreground md:text-4xl">
              Un cadre clair, doux et professionnel
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <Card key={card.title} className="border-2 transition-colors hover:border-accent/50">
                <CardContent className="space-y-4 pt-6">
                  <CheckCircle2 className="text-accent" size={24} />
                  <h3 className="font-medium text-primary">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/70">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
