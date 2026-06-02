import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useContent } from "../../content/ContentProvider";

export function Reviews() {
  const { clientReviews, isGoogleProfileConfigured, isGoogleReviewConfigured, site } = useContent();
  return (
    <section id="avis-clients" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <Star size={16} />
              Avis clients
            </div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
              Vos retours après une séance Renaissens
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Les avis aident les futures clientes et futurs clients à réserver en confiance. Ils renforcent aussi la visibilité locale de Renaissens sur Google.
            </p>
          </div>

          {clientReviews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {clientReviews.map((review) => (
                <Card key={review.author || review.clientName || review.clientName || review.text || review.reviewText} className="border-2">
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex gap-1 text-accent" aria-label={`${review.rating} étoiles`}>
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/75">“{review.text || review.reviewText}”</p>
                    <p className="text-sm font-medium text-primary">{review.author || review.clientName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-medium text-foreground">Les avis seront ajoutés progressivement</h3>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {isGoogleReviewConfigured ? (
                  <a
                    href={site.google.reviewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Laisser un avis Google
                  </a>
                ) : (
                  <a
                    href={site.emailHref}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Envoyer un retour par email
                  </a>
                )}

                {isGoogleProfileConfigured && (
                  <a
                    href={site.google.businessProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                  >
                    Voir la fiche Google
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
