# Interface admin gratuite Renaissens

Cette version n'utilise pas Sanity, WordPress ou un CMS payant.

Elle fonctionne avec :

- React/Vite pour le site
- Vercel pour l'hébergement
- GitHub pour stocker le fichier de contenu
- une fonction Vercel gratuite dans `api/content.js`

L'admin est disponible sur :

```txt
/admin
```

## Principe

Magali modifie le contenu dans `/admin`.
Quand elle clique sur **Sauvegarder**, la fonction Vercel met à jour ce fichier dans GitHub :

```txt
public/content/content.json
```

GitHub déclenche ensuite un nouveau déploiement Vercel. Quelques minutes après, le site public affiche les modifications.

## Variables à ajouter dans Vercel

Dans Vercel :

```txt
Project > Settings > Environment Variables
```

Ajoute :

```env
ADMIN_PASSWORD=choisis-un-mot-de-passe-solide
GITHUB_OWNER=GoatDRyan
GITHUB_REPO=massage
GITHUB_BRANCH=main
CONTENT_FILE_PATH=public/content/content.json
GITHUB_TOKEN=ton-token-github
```

## Créer le token GitHub

Dans GitHub :

```txt
Settings > Developer settings > Personal access tokens > Fine-grained tokens
```

Crée un token avec accès au dépôt du site et permission :

```txt
Contents: Read and write
```

Copie le token dans Vercel dans `GITHUB_TOKEN`.

Ne mets jamais le token directement dans le code.

## Ce que Magali peut modifier

- informations générales
- téléphone
- email
- zone d'intervention
- liens réseaux sociaux
- liens Google Business Profile
- prestations
- durées
- tarifs
- liens Cal.com
- FAQ
- expériences / ateliers
- avis clients
- textes légaux

## Limites

Cette interface ne modifie pas le design React. Elle modifie le contenu.
Pour changer la structure visuelle, le code doit encore être modifié par un développeur.

## Sécurité

La page `/admin` est visible si quelqu'un connaît l'URL, mais les modifications sont protégées par le mot de passe `ADMIN_PASSWORD` côté serveur.
Le token GitHub reste caché dans Vercel.

## Important troubleshooting

### The cursor leaves the field after each character
This was caused by unstable React keys in the first admin version. Update to the fixed version where editor rows use stable index-based keys while editing.

### Saving fails locally
`npm run dev` only starts Vite. It does not run Vercel serverless functions in `/api`.
To test saving locally, use:

```bash
npm install -g vercel
vercel dev
```

Then open the local URL given by Vercel, usually `http://localhost:3000/admin`.

### Saving fails on Vercel
Check the project environment variables:

```env
ADMIN_PASSWORD=your_admin_password
GITHUB_OWNER=GoatDRyan
GITHUB_REPO=massage
GITHUB_BRANCH=main
CONTENT_FILE_PATH=public/content/content.json
GITHUB_TOKEN=your_github_token
```

The GitHub token must be a fine-grained token with access to the selected repository and `Contents: Read and write`.
