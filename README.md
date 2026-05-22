# Renaissens — site React/Vite multipage SEO

Version multipage optimisée pour Vercel avec URLs dédiées :

- `/` — Accueil
- `/massage-a-domicile-rouen` — page SEO massage à domicile
- `/reflexologie-plantaire-rouen` — page SEO réflexologie plantaire
- `/cercles-de-parole-rouen` — page SEO cercles de parole
- `/ateliers-bien-etre-normandie` — page SEO ateliers et retraites
- `/deroulement-seance` — page déroulement d'une séance
- `/reservation` — page réservation Cal.com
- `/a-propos` — page histoire et approche
- `/avis-clients` — avis clients et Google Business Profile
- `/faq` — questions fréquentes
- `/blog` — structure des futurs articles SEO
- `/contact` — contact et zone d'intervention
- `/mentions-legales`, `/politique-confidentialite`, `/conditions-reservation`

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement Vercel

Réglages :

- Framework : Vite
- Build command : `npm run build`
- Output directory : `dist`

Le fichier `vercel.json` permet de conserver les URLs directes du site multipage.

## À modifier avant publication finale

Dans `src/config/site.js` :

- le vrai domaine `site.url`
- le SIRET
- les liens Cal.com réels dans `src/data/services.js`
- le lien Google Business Profile
- le lien pour laisser un avis Google

Dans `public/sitemap.xml` et `public/robots.txt`, remplacer le domaine placeholder par le vrai domaine ou l'URL Vercel finale.
