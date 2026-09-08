# Mister IA 64

Site de présentation Next.js pour Vercel. Diagnostic IA à 99 €.

## Déploiement

Importer ce dépôt dans Vercel. Framework : Next.js. Répertoire racine : `./`.
Conserver les commandes automatiques (`npm run build`) et la sortie par défaut.
Aucune variable d’environnement ni base de données nécessaire pour cette version de présentation.
`SITE_URL` peut être défini après connexion du domaine final ; sinon les métadonnées utilisent l’URL du déploiement Vercel.

## État

- Pages, navigation et estimateur disponibles.
- Non indexable pendant la préparation. `noindex` n’est pas un contrôle d’accès.
- Formulaire fermé : aucun enregistrement ni email. L’API retourne explicitement 503.
- Aucun compte client, paiement ou réservation.
- Pas de dépendance Cloudflare Workers/D1 pour cette version.

Avant le lancement commercial : renseigner l’identité légale et le contact, confirmer la qualification fiscale du prix, configurer et tester la réception des prospects, actualiser la confidentialité, puis autoriser l’indexation.

## Local

Node.js 22, `npm ci`, `npm run dev`. Vérification : `npm run build`.
