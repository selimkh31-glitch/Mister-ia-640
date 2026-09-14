# Mister IA 64

Site Next.js de Mister IA 64 — création de sites internet, SEO local, automatisation et accompagnement IA au Pays Basque.

## Design system

Le projet utilise désormais une Design Bible locale dans `/design` et le protocole agent défini dans `AGENTS.md`. Les tokens sémantiques de `design/tokens.css` sont chargés globalement depuis `app/layout.tsx`.

La homepage sur la branche `design-system/pilot-v1` constitue le premier pilote du Mister IA Design Core : composition éditoriale, preuves clients réelles, responsive et anti-patterns IA génériques.

## Développement

```bash
npm ci
npm run dev
```

## Vérification

```bash
npm run lint
npm run test
npm run check:seo
npm run build
```
