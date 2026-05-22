import { Facebook, Heart, Instagram } from "lucide-react";
import { site } from "../../config/site";
import { footerNavigationRoutes, legalRoutes } from "../routing/routes";

export function Footer({ onNavigate }) {
  const handleNavigate = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-medium">{site.brandName}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                {site.baseline} autour de {site.city}. Des soins personnalisés dans un cadre doux, clair et respectueux.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-medium">Navigation</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {footerNavigationRoutes.map((route) => (
                  <li key={route.path}>
                    <a
                      href={route.path}
                      className="transition-colors hover:text-white"
                      onClick={(event) => handleNavigate(event, route.path)}
                    >
                      {route.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium">Contact</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
                </li>
                <li>
                  <a href={site.emailHref} className="break-all hover:text-white">{site.email}</a>
                </li>
                <li>Zone d’intervention : {site.interventionArea}</li>
              </ul>

              <div className="mt-6">
                <h3 className="mb-4 font-medium">Réseaux sociaux</h3>
                <div className="flex items-center gap-3">
                  {site.socials.facebook && (
                    <a
                      href={site.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  )}
                  {site.socials.instagram && (
                    <a
                      href={site.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                  {site.socials.linkedin && (
                    <a
                      href={site.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <span className="text-sm font-semibold">in</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-medium">Informations légales</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {legalRoutes.map((route) => (
                  <li key={route.path}>
                    <a href={route.path} onClick={(event) => handleNavigate(event, route.path)} className="hover:text-white">
                      {route.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              Créé avec <Heart size={16} className="fill-accent text-accent" /> pour votre bien-être
            </p>
            <p className="mt-2 text-xs text-primary-foreground/60">© {new Date().getFullYear()} {site.brandName}. Tous droits réservés.</p>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-primary-foreground/55">
              Les prestations proposées sont des soins de bien-être non médicaux et ne remplacent pas un avis médical.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
