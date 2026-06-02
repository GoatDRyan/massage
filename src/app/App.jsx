import { useEffect, useMemo, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HeadManager } from "./routing/HeadManager";
import { getRoute, normalizePath, sectionToPath } from "./routing/routes";

import { HomePage } from "./pages/HomePage";
import { MassagePage } from "./pages/MassagePage";
import { ReflexologyRoutePage } from "./pages/ReflexologyRoutePage";
import { CirclesPage } from "./pages/CirclesPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { SessionPage } from "./pages/SessionPage";
import { ReservationPage } from "./pages/ReservationPage";
import { AboutPage } from "./pages/AboutPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalNoticePage } from "./pages/LegalNoticePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { BookingConditionsPage } from "./pages/BookingConditionsPage";
import { AdminPage } from "./pages/AdminPage";
import { ContentProvider } from "../content/ContentProvider";

const pageMap = {
  "/": HomePage,
  "/massage-a-domicile-rouen": MassagePage,
  "/reflexologie-plantaire-rouen": ReflexologyRoutePage,
  "/cercles-de-parole-rouen": CirclesPage,
  "/ateliers-bien-etre-normandie": WorkshopsPage,
  "/deroulement-seance": SessionPage,
  "/reservation": ReservationPage,
  "/a-propos": AboutPage,
  "/avis-clients": ReviewsPage,
  "/faq": FAQPage,
  "/blog": BlogPage,
  "/contact": ContactPage,
  "/mentions-legales": LegalNoticePage,
  "/politique-confidentialite": PrivacyPolicyPage,
  "/conditions-reservation": BookingConditionsPage,
  "/admin": AdminPage,
};

function resolveDestination(destination) {
  if (!destination) return "/";
  if (destination.startsWith("/")) return destination;
  return sectionToPath[destination] || `/${destination}`;
}

function scrollAfterNavigation(destination) {
  const [, hash] = destination.split("#");

  window.setTimeout(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const offset = 88;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 40);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  const route = useMemo(() => getRoute(currentPath), [currentPath]);
  const Page = pageMap[route.path] || HomePage;

  const navigate = (destination) => {
    const resolved = resolveDestination(destination);
    const [pathname] = resolved.split("#");
    const cleanPath = normalizePath(pathname);
    const finalUrl = resolved;

    if (window.location.pathname + window.location.hash !== finalUrl) {
      window.history.pushState({}, "", finalUrl);
    }

    setCurrentPath(cleanPath);
    scrollAfterNavigation(resolved);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      scrollAfterNavigation(window.location.pathname + window.location.hash);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <ContentProvider>
      <div className="min-h-screen bg-background text-foreground">
        <HeadManager route={route} />
        {route.path !== "/admin" && <Navigation currentPath={currentPath} onNavigate={navigate} />}

        <main>
          <Page onNavigate={navigate} />
        </main>

        {route.path !== "/admin" && <Footer onNavigate={navigate} />}
      </div>
    </ContentProvider>
  );
}
