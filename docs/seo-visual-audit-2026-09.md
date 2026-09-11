# Mister IA 64 — SEO local et amélioration visuelle

Branche : `seo/local-visual-upgrade-2026-09`. Base : `8b73448d71b7517fe357c4da193f930f9b90624e`. Aucune modification de production dans cette mission.

## Audit de départ

- Next.js 16.2.6 / React 19, App Router, contenu statique typé dans `lib`, une route générique et deux parcours contact/estimateur. Architecture conservée.
- Liens HTML, composants serveur et polices système : une base favorable au chargement. Le calculateur est le principal composant métier interactif.
- Canonicals sur l’origine de production configurée, previews non indexables, sitemap sans les pages légales, neuf redirections 301 existantes : conservés et contrôlés.
- La page À propos affirmait encore que les exemples n’étaient pas des réalisations. La page locale privilégiait le BAB alors que la zone demandée couvre aussi Saint-Jean-de-Luz, Ciboure et Hendaye.
- Contact et estimateur héritaient d’informations sociales génériques. Pas de WebSite dans le JSON-LD.
- Les images existantes sont les logos Rakuten/Amazon. Aucun portrait ni photographie documentaire fourni pour cette mission.
- Lint initial sans erreur. Aucun script de test métier existant. Données CrUX, Search Console et résultats terrain LCP/CLS/INP non disponibles.

## Modifications

- Métadonnées mutualisées : title, description, canonical, OG et Twitter propres à chaque page, avec descriptions éditoriales pour les intentions prioritaires.
- Accueil : H1 « Votre métier d’abord. Sites web et IA au Pays Basque. » et title cohérent ; l’accroche émotionnelle reste dans l’introduction. Accompagnement humain préservé.
- À propos corrigé et relié aux quatre réalisations. Aucun avis ni résultat nouveau inventé.
- Page Pays Basque enrichie : visibilité d’une activité locale, suivi des demandes sur le BAB, formats d’intervention et préparation du premier échange. Pas de nouvelle page par ville ni d’agence fictive.
- SEO local davantage explicité sur la page SEO/GEO ; automatisation/intégrations et formation rendues explicites dans leurs H1.
- Bloc de liens services/territoire sur les pages commerciales et l’accueil. Footer et contact alignés sur la zone demandée.
- Contact WhatsApp présenté comme le parcours fonctionnel, numéro téléphonique cliquable. Aucun formulaire collecteur ou traceur ajouté.
- Organization conservé, WebSite ajouté, zone réelle partagée avec les Service. BreadcrumbList et Article conservés. LocalBusiness non ajouté : aucune adresse professionnelle complète validée dans le dépôt. Aucun avis, horaire ou prix additionnel dans les schemas.
- Lisibilité des textes secondaires améliorée, menu replié plus tôt sur tablette, réduction des animations selon la préférence système.
- Petit adaptateur de démarrage pour que le serveur Next accepte les options du contrôle visuel supervisé ; framework et dépendances inchangés.

## Illustration

Une seule illustration conceptuelle originale, générée avec l’outil intégré : des notes dispersées deviennent un parcours organisé, une main conserve la décision humaine. Couleurs vert forêt, ivoire et citron ; pas de bureau réel, de portrait ou de client simulé.

Prompt : « Premium understated editorial illustration of disconnected daily notes resolving into an organized workflow, one illustrated hand arranging a card; forest green, warm ivory, restrained lime, cut-paper texture, no text, logos, robots, or documentary scene. »

| Asset | Dimensions | Poids | Usage |
|---|---|---|---|
| `public/images/accompagnement-organisation-480.webp` | 480 × 320 | 11 018 octets | Petit écran |
| `public/images/accompagnement-organisation-960.webp` | 960 × 640 | 28 038 octets | Grand écran |

Composant `AccompanimentVisual` dans l’accompagnement de l’accueil, sous le premier écran, et dans la méthode. `srcSet`, `sizes`, dimensions, lazy loading, décodage asynchrone et légende conceptuelle. Aucun téléchargement d’image prioritaire ajouté au hero. Les logos existants sont conservés.

## Rapport SEO Tester transmis par le propriétaire

- H1/title : cohérence renforcée, sans rendre le title et le H1 obligatoirement identiques ni ajouter les prix dans le H1.
- Répéter « aimez », « soirées » et « rattraper » : non retenu. Ces mots appartiennent à l’accroche, pas à une liste d’intentions commerciales à répéter.
- Ratio texte/HTML : pas de suppression de contenu ou d’ajout de balises pour viser 10–75 %. Les mesures de cet outil ne démontrent pas un défaut de classement. Le HTML Next contient aussi des données de rendu ; distinguer le texte utile du poids réseau.
- `title` sur tous les liens : non ajouté. Les ancres visibles restent descriptives ; une infobulle répétant leur texte n’améliore pas leur compréhension sur mobile.
- Pas de gonflement du contenu pour atteindre un nombre de mots cible.

Références : [Google — titres](https://developers.google.com/search/docs/appearance/title-link), [Google — liens](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [MDN — limites d’accessibilité de title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title), [Google — images](https://developers.google.com/search/docs/appearance/google-images), [Google — LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Validation et limites

Commandes reproductibles :

```sh
npm run lint
npm test
SITE_URL=https://mister-ia-64.dev VERCEL_ENV=production npm run build
npm run check:seo
```

Build de production et lint réussis. Le contrôle SEO valide 34 pages HTML, 33 URL du sitemap, 1 355 occurrences de liens internes (footer compris), six occurrences d’images et 86 blocs JSON-LD. Il contrôle l’unicité des titres/descriptions, H1 unique, canonical, OG/Twitter, noindex légaux, JSON-LD lisible, liens et ancres internes, fichiers image, sitemap et robots. Les neuf redirections 301 pointent sur des pages existantes sans chaîne. Le mode preview conserve le drapeau noindex. La page contact dynamique est contrôlée séparément dans le navigateur. Deux tests réussis vérifient le calculateur et ses bornes.

Contrôle visuel : accueil desktop (1363 px), accueil en cadres 390 et 320 px, page site et contact en cadre 768 px. Pas de débordement horizontal constaté ; menu mobile ouvert et refermé. L’illustration s’affiche. Les erreurs observées sur ces parcours venaient de l’extension du navigateur, pas du site. Le contrôle visuel final de la page 404 a rencontré un aperçu vide après le build : son composant et son HTML généré existent, mais son statut HTTP reste à revérifier sur la préproduction. Il s’agit d’un contrôle en navigateur de développement, pas d’une certification d’accessibilité ni d’un test sur iPhone physique.

Mesure des assets : les chunks JS de l’accueil sont identiques au départ. Le CSS gzip passe d’environ 27,2 à 27,6 Ko, et le HTML de l’accueil d’environ 88,9 à 93,7 Ko avant compression. La nouvelle image ajoute 11 ou 28 Ko lorsqu’elle est chargée. Les polices système n’ajoutent aucun fichier réseau. Ces poids ne constituent pas des mesures de Core Web Vitals : LCP/CLS/INP terrain restent à observer après validation et publication.

## Étapes externes restantes

1. Valider cette branche avant fusion et publication.
2. Relier Search Console, soumettre le sitemap puis inspecter les pages importantes ; aucune indexation effective ni position Google n’est prétendue ici.
3. Confirmer la fiche Google Business Profile, son éligibilité et les informations professionnelles cohérentes. Ajouter son URL seulement après validation.
4. Compléter les mentions légales avec l’identité et l’adresse professionnelles réelles : elles restent incomplètes et non indexables, sans inventer ces données.
5. Ajouter un vrai portrait de Selimkhan et des captures autorisées des réalisations ; recueillir les avis exacts et leurs autorisations.
6. Travailler les liens locaux pertinents et suivre les demandes commerciales. Toute mesure d’audience supplémentaire doit être choisie et configurée séparément.
7. Comparer les impressions/requêtes dans Search Console avant de décider si un contenu local supplémentaire est réellement utile. Les recherches publiques exploratoires de cette mission n’ont pas permis une étude fiable de la concurrence ou des volumes : aucune estimation de trafic n’est avancée.
