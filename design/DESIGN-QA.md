# Design QA Gate — Mister IA 64

This checklist must be completed before a visual change is considered ready.

## Brand
- [ ] Deep green remains the primary identity color.
- [ ] Acid citron is used selectively, not as decoration everywhere.
- [ ] Warm off-white remains the primary canvas.
- [ ] No purple/blue AI gradient, glassmorphism or generic AI imagery appears.
- [ ] The page feels local, human and business-focused before technological.

## Composition
- [ ] The page does not become a repeated grid of interchangeable cards.
- [ ] High-value messages use strong editorial composition and whitespace.
- [ ] Sections vary in structure while staying coherent.
- [ ] Every card or panel groups meaningful information.
- [ ] The primary CTA is obvious without dominating every section.

## Typography
- [ ] H1 communicates one clear promise.
- [ ] Serif/italic treatment stays an accent.
- [ ] Body copy remains highly readable.
- [ ] Mobile line breaks do not create awkward or misleading phrasing.

## Tokens
- [ ] Brand colors come from `design/tokens.css`.
- [ ] Spacing uses the approved spacing scale wherever practical.
- [ ] Radius and motion values use semantic tokens.
- [ ] New visual values are promoted to tokens when they represent reusable roles.

## Responsive
- [ ] Hero is usable at 320–390 px width.
- [ ] No horizontal scrolling at mobile widths.
- [ ] CTAs remain comfortably tappable.
- [ ] Editorial rows collapse into a clear reading order.
- [ ] Images have stable dimensions and responsive sizing.

## Accessibility
- [ ] Heading hierarchy is logical.
- [ ] Focus styles remain visible.
- [ ] Text contrast is sufficient.
- [ ] Decorative icons are hidden from assistive tech when appropriate.
- [ ] `prefers-reduced-motion` is respected through motion tokens.

## Homepage pilot — 2026-09-14
- [x] Generic dashboard-style hero removed in favor of an editorial work-method panel.
- [x] Repeated three-card storytelling removed from the homepage.
- [x] Real case studies surfaced as editorial project rows.
- [x] Site / IA / training services presented as a continuous service stack.
- [x] Semantic tokens are loaded globally and used by the new homepage module.
- [x] Next/Image used for the homepage illustration.
- [x] Vercel preview build triggered from the pilot branch.
