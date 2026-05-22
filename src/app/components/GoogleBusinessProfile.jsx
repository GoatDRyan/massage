import { CheckCircle2, MapPinned, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { isGoogleProfileConfigured, isGoogleReviewConfigured, site } from "../../config/site";

const profileChecklist = [
  "Créer ou revendiquer la fiche Google Business Profile",
  "Ajouter la catégorie principale : service de massage ou praticienne bien-être",
  "Renseigner la zone desservie : Rouen Métropole et alentours",
  "Ajouter le téléphone, l’email, le site web et les horaires",
  "Publier 5 à 8 photos professionnelles",
  "Ajouter le lien de réservation et demander progressivement des avis clients",
];

export function GoogleBusinessProfile() {
  return (
    <section id="google-business-profile" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <MapPinned size={16} />
              Google Business Profile
            </div>
            <h2 className="text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Préparer la visibilité locale de Renaissens sur Google
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              Pour un service local à domicile, la fiche Google Business Profile est essentielle : elle permet d’apparaître plus facilement sur Google Maps, de centraliser les avis et de rassurer les personnes qui recherchent un massage bien-être à Rouen.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {isGoogleProfileConfigured ? (
                <a
                  href={site.google.businessProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Voir la fiche Google
                </a>
              ) : (
                <a
                  href="https://www.google.com/business/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Créer la fiche Google
                </a>
              )}

              {isGoogleReviewConfigured && (
                <a
                  href={site.google.reviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                >
                  <Star className="mr-2" size={16} /> Demander un avis
                </a>
              )}
            </div>
          </div>

          <Card className="border-2">
            <CardContent className="space-y-4 pt-6">
              {profileChecklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-accent" size={18} />
                  <p className="text-sm leading-relaxed text-foreground/75">{item}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground/60">
                Une fois la fiche créée, ajoute les liens dans <code>src/config/site.js</code> : <code>google.businessProfileUrl</code> et <code>google.reviewUrl</code>.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
