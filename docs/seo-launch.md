# Indexation et acquisition — Mister IA 64

## Changements livrés

- Production indexable ; développement et prévisualisations non indexables.
- Domaine canonique : SITE_URL explicite, sinon VERCEL_PROJECT_PRODUCTION_URL fourni par Vercel. Aucun domaine inventé ni URL temporaire de déploiement.
- Sitemap XML non vide en production, annoncé dans robots.txt, URLs dédupliquées.
- Titres de recherche distincts pour services, solutions, guides et page locale ; descriptions, canonicals et partages cohérents.
- Organisation avec téléphone réel ; Service, Article et fil d’Ariane déjà intégrés, identité de l’éditeur reliée aux articles.
- Guides accessibles depuis le menu, le pied de page et les services correspondants ; demande d’audit directe dans les pages de contenu.
- Pas d’avis inventés, de résultats garantis, de fausses adresses locales ni de pages dupliquées par ville.

## Pages et intentions prioritaires

| Intention | Page cible | Prochaine action |
| --- | --- | --- |
| Audit IA à Bayonne, diagnostic 99 € | /services/audit-ia | Demande d’audit |
| Consultant IA Pays Basque, Bayonne, Anglet, Biarritz | /pays-basque | Diagnostic d’un processus |
| Automatisation TPE et PME | /services/automatisation-ia | Cadrage du besoin |
| Assistant vocal IA artisan | /guides/assistant-vocal-ia-artisan | Service agents IA puis audit |
| Préparer un audit IA | /guides/preparer-audit-ia | Audit personnalisé |
| Migration catalogue e-commerce | /guides/migration-catalogue-ecommerce | Automatisation et audit |
| Formation IA au Pays Basque | /services/formation-ia | Demande de formation |

Ces intentions correspondent aux offres ; aucun volume de recherche ni classement n’a été mesuré ou inventé.

## Validation externe restant à réaliser

Le déploiement Vercel peut être vérifié via GitHub. Aucun accès Search Console, Bing Webmaster Tools ou Google Business Profile n’est connecté dans cette session. Le contrôle HTTP de l’adresse publique n’a pas pu être effectué ici.

1. Ouvrir Visit dans le projet Vercel et relever le domaine public exact. Vérifier anonymement que l’accueil répond sans connexion, avec HTTP 200 et sans en-tête X-Robots-Tag noindex.
2. Vérifier /robots.txt : Allow: / et Sitemap: https://DOMAINE/sitemap.xml. Vérifier que le sitemap contient les URLs du même domaine et que les pages ont un canonical correspondant. Les URL de preview doivent rester non indexables.
3. Dans le compte Google du propriétaire, ajouter une propriété Search Console de type préfixe d’URL pour l’adresse exacte. La propriété domaine exige la maîtrise DNS du domaine.
4. Choisir la validation par balise HTML. Fournir uniquement la valeur content du jeton Google. La variable GOOGLE_SITE_VERIFICATION est prête à la recevoir ; redéployer après ajout. Même principe avec BING_SITE_VERIFICATION pour Bing.
5. Valider la propriété, soumettre sitemap.xml, puis utiliser Inspection d’URL sur l’accueil, l’audit, la page locale et les trois nouveaux guides. Ne pas utiliser l’Indexing API pour ces pages.
6. Conserver l’accès aux rapports : pages indexées/exclues, canonical choisi par Google, impressions, clics et requêtes. Un sitemap soumis n’est pas une preuve d’indexation.

## Acquisition après mise en ligne

- Examiner les requêtes et pages dans Search Console après leur première exploration. Comparer des périodes de même durée ; ne pas modifier les pages chaque jour en l’absence de données.
- Prioriser une page qui reçoit des impressions pertinentes mais peu de clics : préciser son titre et sa réponse à l’intention. Si elle reçoit des visites sans demande, revoir son offre et son passage vers l’audit.
- Demander au prospect comment il a trouvé Mister IA 64 ; enregistrer cette information dans le suivi commercial existant. Aucun outil de traçage ni envoi de données tiers n’a été ajouté.
- Compléter une fiche Google Business Profile si l’activité est éligible, avec les informations vérifiées du propriétaire et sa zone réelle. Ne pas créer plusieurs adresses pour les villes desservies.
- Publier des liens depuis les profils professionnels réellement détenus et des partenariats réels. Aucun annuaire automatique, achat de liens ou message à des tiers n’a été envoyé.
- Étoffer les réalisations avec captures et témoignages authentiques quand les clients autorisent leur publication.

## Changement ultérieur de domaine

Connecter et vérifier le nouveau domaine dans Vercel, fixer SITE_URL à ce domaine, rediriger l’ancien domaine et vérifier les canonicals/sitemap. Mettre à jour les propriétés de suivi. Ne pas indexer plusieurs copies concurrentes.

## Références techniques

- [Google : noindex et exploration](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Google : créer et soumettre un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google : fonctionnalités IA et sites web](https://developers.google.com/search/docs/appearance/ai-features)
- [Vercel : variables système, domaine de production](https://vercel.com/docs/environment-variables/system-environment-variables)

L’accessibilité technique et des contenus utiles rendent les pages éligibles à l’exploration. Elles ne garantissent ni leur indexation, ni un classement, ni une citation dans une réponse IA.
