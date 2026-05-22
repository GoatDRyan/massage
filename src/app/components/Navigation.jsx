import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { site } from "../../config/site";
import { mainNavigationRoutes } from "../routing/routes";

export function Navigation({ currentPath, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath === path;
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            onClick={(event) => handleNavigate(event, "/")}
            className="text-left text-lg font-semibold tracking-tight text-primary transition-colors hover:text-primary/80"
            aria-label={`Retour à l'accueil ${site.brandName}`}
          >
            <img src={site.logo.src} alt={`Logo ${site.brandName}`} className="h-16 w-auto" />
          </a>

          <div className="hidden items-center gap-4 xl:flex">
            {mainNavigationRoutes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                onClick={(event) => handleNavigate(event, route.path)}
                className={`text-sm transition-colors ${
                  isActive(route.path)
                    ? "font-medium text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {route.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex xl:ml-2">
            <Button
              className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
              onClick={() => onNavigate("/reservation")}
            >
              Prendre RDV
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-2 border-t border-border pt-4 xl:hidden">
            {mainNavigationRoutes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                onClick={(event) => handleNavigate(event, route.path)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                  isActive(route.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/75 hover:bg-muted"
                }`}
              >
                {route.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
