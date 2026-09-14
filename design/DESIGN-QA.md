# Mister IA 64 — Design QA

## Gate de validation

Le pilote V3 doit être contrôlé sur les points suivants avant merge :

- [x] La homepage ne ressemble plus à une succession de cartes SaaS.
- [x] Le hero change réellement la silhouette visuelle du site.
- [x] Le header et le footer suivent la nouvelle direction, pas l’ancien chrome.
- [x] Les services sont présentés comme une composition éditoriale continue.
- [x] Les réalisations sont traitées comme des études de cas, pas comme des cartes interchangeables.
- [x] Les offres 99 € et 299 € restent lisibles sans devenir le seul langage visuel.
- [x] Les anciennes ancres SEO `#amina` et `#bela-lugosi` restent valides.
- [x] Les couleurs structurantes passent par les tokens Mister IA.
- [x] Aucun gradient violet/cyan, glassmorphism ou faux dashboard IA.
- [x] L’accent citron reste un signal, pas un remplissage systématique.
- [x] `next/image` est utilisé pour l’image éditoriale principale.
- [x] Le responsive prévoit une vraie recomposition mobile, pas seulement une réduction des tailles.
- [x] Les interactions respectent `prefers-reduced-motion`.

## Direction V3

Cette version assume une rupture plus nette avec l’ancien site : hero sombre presque plein écran, typographie monumentale, compositions asymétriques, angles droits, lignes structurelles, alternance forte entre surfaces claires, vert profond et accent citron.

L’objectif n’est pas de devenir une agence créative abstraite : le copywriting reste local, concret et orienté métier. La rupture concerne l’expression visuelle, pas le positionnement commercial.

## À contrôler visuellement dans la preview

1. Desktop large : rythme du hero et des études de cas.
2. Mobile : lisibilité du H1, stacking des preuves, CTA et FAQ.
3. Header : contraste et comportement sticky.
4. Pages secondaires : vérifier que le nouveau chrome sombre reste cohérent hors homepage.
5. Floating WhatsApp : ne doit pas masquer les CTA sur petit écran.
