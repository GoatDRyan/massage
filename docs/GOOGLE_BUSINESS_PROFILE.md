# Checklist Google Business Profile — Renaissens

Objectif : améliorer la visibilité locale de Renaissens sur Google et Google Maps pour les recherches comme “massage à domicile Rouen”, “réflexologie plantaire Rouen” ou “massage bien-être Rouen”.

## 1. Créer ou revendiquer la fiche

- Aller sur Google Business Profile : https://www.google.com/business/
- Nom : Renaissens
- Catégorie principale recommandée : service de massage / praticienne bien-être
- Zone desservie : Rouen Métropole et 30 km autour de Rouen
- Ajouter le téléphone, l’email, le site web et les horaires

## 2. Informations à préparer

- Nom commercial : Renaissens
- Praticienne : Magali Perrin
- Téléphone : 06.60.21.51.09
- Email : magaliperrin.bienetre@gmail.com
- Site web : à remplacer par l’URL finale Vercel ou le nom de domaine
- Zone : Rouen Métropole, Normandie
- Description courte : Massages bien-être holistiques, réflexologie plantaire et accompagnement émotionnel à domicile autour de Rouen.

## 3. Photos à ajouter

- Logo Renaissens
- Portrait professionnel de la praticienne
- Visuels d’ambiance bien-être
- Image de matériel ou d’espace de massage
- Visuels liés aux cercles de parole / ateliers

## 4. Avis clients

Une fois la fiche validée, récupérer le lien “Demander des avis” dans Google Business Profile, puis le coller dans :

```js
// src/config/site.js
google: {
  businessProfileUrl: "https://...",
  reviewUrl: "https://...",
},
```

## 5. Conseils de publication

- Publier régulièrement des posts courts : nouvelle prestation, cercle de parole, atelier, disponibilité.
- Répondre aux avis avec un ton humain et professionnel.
- Ne jamais inventer de faux avis.
- Garder les mêmes informations partout : site, Google, Instagram, Facebook, LinkedIn.
