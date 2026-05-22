import { HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { site } from "../../config/site";

export function Hero({ onNavigate }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover opacity-30" src={`${import.meta.env.BASE_URL}img/hero-banner.jpg`} alt="" />
      </div>
      <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-16 left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">

            <div className="space-y-5">
              <h1 className="text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
                Massages holistiques, réflexologie et cercle de parole <span className="text-primary">à Rouen</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl lg:mx-0">
                {site.baseline} autour de {site.city}. Massage intuitif, massage énergétique, massage du monde et accompagnement émotionnel pour une reconnexion à soi en douceur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                onClick={() => onNavigate("reservation")}
              >
                Prendre rendez-vous
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary px-8 text-primary hover:bg-primary/5"
                onClick={() => onNavigate("prestations")}
              >
                Découvrir les prestations
              </Button>
            </div>

            <div className="grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-medium text-primary">{site.experienceYears} ans</div>
                <div className="text-sm text-foreground/65">d’expérience</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-primary">30 km</div>
                <div className="text-sm text-foreground/65">autour de {site.city}</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-primary">100%</div>
                <div className="text-sm text-foreground/65">personnalisé</div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
