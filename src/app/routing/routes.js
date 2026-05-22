import { site } from "../../config/site";

const baseTitle = "Renaissens";
const baseUrl = site.url?.replace(/\/$/, "") || "https://www.renaissens-bienetre.fr";

export const routes = [
  {
    path: "/",
    label: "Accueil",
    title: `${baseTitle} — Massages holistiques, réflexologie et cercles de parole à Rouen`,
    description:
      "Renaissens propose des massages bien-être à domicile, de la réflexologie plantaire, des cercles de parole et des ateliers bien-être autour de Rouen.",
  },
  {
    path: "/massage-a-domicile-rouen",
    label: "Massage à domicile",
    title: `Massage à domicile à Rouen — ${baseTitle}`,
    description:
      "Massages bien-être à domicile à Rouen et dans la métropole : massage suédois californien, ayurvédique, massage bébé, dos, nuque et épaules.",
  },
  {
    path: "/reflexologie-plantaire-rouen",
    label: "Réflexologie",
    title: `Réflexologie plantaire à Rouen — ${baseTitle}`,
    description:
      "Séances de réflexologie plantaire à Rouen pour favoriser la détente, l'ancrage, la respiration et une sensation d'équilibre global.",
  },
  {
    path: "/cercles-de-parole-rouen",
    label: "Cercles de parole",
    title: `Cercles de parole à Rouen — ${baseTitle}`,
    description:
      "Cercles de parole à Rouen : un espace d'écoute, de douceur et de présence pour déposer, partager et retrouver un sentiment d'ancrage.",
  },
  {
    path: "/ateliers-bien-etre-normandie",
    label: "Ateliers bien-être",
    title: `Ateliers et retraites bien-être en Normandie — ${baseTitle}`,
    description:
      "Ateliers bien-être et week-ends ressourçants en Normandie : respiration, détente, reconnexion au corps et temps collectifs bienveillants.",
  },
  {
    path: "/deroulement-seance",
    label: "Déroulement",
    title: `Déroulement d'une séance à domicile — ${baseTitle}`,
    description:
      "Découvrez comment se déroule une séance Renaissens : prise de contact, installation, échange, massage ou réflexologie, paiement et conseils après séance.",
  },
  {
    path: "/reservation",
    label: "Réservation",
    title: `Réserver une séance bien-être à Rouen — ${baseTitle}`,
    description:
      "Choisissez une prestation Renaissens et réservez directement un créneau pour un massage bien-être ou une séance de réflexologie autour de Rouen.",
  },
  {
    path: "/a-propos",
    label: "À propos",
    title: `À propos de Magali Perrin — ${baseTitle}`,
    description:
      "Découvrez l'histoire, l'approche humaine et les valeurs de Magali Perrin, praticienne Renaissens à Rouen.",
  },
  {
    path: "/avis-clients",
    label: "Avis",
    title: `Avis clients et retours d'expérience — ${baseTitle}`,
    description:
      "Retrouvez les avis clients Renaissens et les liens utiles pour laisser un retour après une séance de massage ou de réflexologie.",
  },
  {
    path: "/faq",
    label: "FAQ",
    title: `Questions fréquentes — ${baseTitle}`,
    description:
      "Questions fréquentes sur les massages à domicile, la réflexologie plantaire, la réservation, les tarifs et la zone d'intervention autour de Rouen.",
  },
  {
    path: "/blog",
    label: "Blog",
    title: `Blog bien-être à Rouen — ${baseTitle}`,
    description:
      "Articles bien-être autour du stress, de la charge mentale, de la reconnexion au corps, des cercles de parole et des pratiques locales à Rouen.",
  },
  {
    path: "/contact",
    label: "Contact",
    title: `Contact et zone d'intervention — ${baseTitle}`,
    description:
      "Contactez Renaissens pour une question ou une demande de rendez-vous. Déplacements à domicile autour de Rouen Métropole.",
  },
  {
    path: "/mentions-legales",
    label: "Mentions légales",
    title: `Mentions légales — ${baseTitle}`,
    description: "Mentions légales du site Renaissens, édité par Magali Perrin.",
    footerOnly: true,
  },
  {
    path: "/politique-confidentialite",
    label: "Confidentialité",
    title: `Politique de confidentialité — ${baseTitle}`,
    description: "Politique de confidentialité du site Renaissens et informations sur le traitement des données personnelles.",
    footerOnly: true,
  },
  {
    path: "/conditions-reservation",
    label: "Conditions de réservation",
    title: `Conditions de réservation — ${baseTitle}`,
    description: "Conditions de réservation, report, annulation et cadre des prestations de bien-être Renaissens.",
    footerOnly: true,
  },
];

export const mainNavigationRoutes = routes.filter((route) => !route.footerOnly).filter((route) =>
  [
    "/",
    "/massage-a-domicile-rouen",
    "/reflexologie-plantaire-rouen",
    "/cercles-de-parole-rouen",
    "/ateliers-bien-etre-normandie",
    "/reservation",
    "/contact",
  ].includes(route.path)
);

export const footerNavigationRoutes = routes.filter((route) =>
  [
    "/",
    "/massage-a-domicile-rouen",
    "/reflexologie-plantaire-rouen",
    "/cercles-de-parole-rouen",
    "/ateliers-bien-etre-normandie",
    "/a-propos",
    "/faq",
    "/contact",
  ].includes(route.path)
);

export const legalRoutes = routes.filter((route) => route.footerOnly);

export function getRoute(pathname) {
  const cleanPath = normalizePath(pathname);
  return routes.find((route) => route.path === cleanPath) || routes[0];
}

export function normalizePath(pathname) {
  if (!pathname) return "/";
  const cleanPath = pathname.split("?")[0].split("#")[0];
  if (cleanPath === "") return "/";
  return cleanPath.length > 1 ? cleanPath.replace(/\/$/, "") : cleanPath;
}

export function absoluteUrl(path = "/") {
  const cleanPath = path === "/" ? "" : path;
  return `${baseUrl}${cleanPath}`;
}

export const sectionToPath = {
  accueil: "/",
  "massage-domicile-rouen": "/massage-a-domicile-rouen",
  "reflexologie-plantaire-rouen": "/reflexologie-plantaire-rouen",
  "deroulement-seance": "/deroulement-seance",
  prestations: "/massage-a-domicile-rouen#prestations",
  experiences: "/cercles-de-parole-rouen",
  reservation: "/reservation",
  contact: "/contact",
  faq: "/faq",
  "avis-clients": "/avis-clients",
  "mentions-legales": "/mentions-legales",
  "politique-confidentialite": "/politique-confidentialite",
  "conditions-reservation": "/conditions-reservation",
};
