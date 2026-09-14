# Mister IA 64 — Agent Protocol

## UI Skills are mandatory for UI work

Before any UI-related implementation, redesign, review, polish, accessibility, motion, or metadata task:

1. Load `.agents/skills/ui-skills-root/SKILL.md` first.
2. Follow its routing protocol before editing product UI.
3. When the UI Skills CLI is available, inspect the live catalog with:
   - `npx ui-skills start`
   - `npx ui-skills categories`
   - `npx ui-skills list --category <category>`
   - `npx ui-skills get <slug>`
4. Prefer 1 skill. Use 2 only for two clear angles. Use at most 3 for broad redesign or multi-surface work.
5. Never replace a real UI Skill with an invented summary, homemade pseudo-skill, or a large generic design prompt.
6. If the CLI cannot be reached in the current agent runtime, use only the exact vendored official skills under `.agents/skills/` and explicitly treat this as fallback mode.
7. Do not start implementation until the selected skill context has been read.

Vendored official UI Skills currently include:

- `ui-skills-root`
- `create-design-md`
- `baseline-ui`
- `improve-ui`
- `fixing-accessibility`
- `fixing-motion-performance`
- `fixing-metadata`

The vendored files originate from `ibelick/ui-skills` and retain the upstream MIT license in `.agents/skills/LICENSE.ui-skills`.

## Mister IA design context

After UI Skills routing and before modifying UI, read the project evidence in this order when relevant:

1. `DESIGN.md` if present
2. `design/BRAND.md`
3. `design/design.md`
4. `design/COMPONENTS.md`
5. `design/MOTION.md`
6. `design/REFERENCES.md`
7. Existing components and `app/globals.css`

`create-design-md` owns creation or normalization of root `DESIGN.md`; do not manually invent a competing DESIGN.md schema.

## Non-negotiable project rules

- Do not invent arbitrary visual values when an approved token or pattern exists.
- Do not default to generic AI/SaaS aesthetics.
- Reuse engineering primitives, not the final visual identity of another Mister IA project.
- Preserve the human/local positioning before adding technological spectacle.
- New colors, radii, shadows, spacing values or motion patterns must be justified by governing design evidence.
- Real business proof and useful content have priority over decorative UI.
- Mobile composition must be reviewed intentionally, not treated as a compressed desktop layout.
- Focus states, contrast and reduced-motion support are part of the design.
- Do not claim that a UI Skill was used unless its actual `SKILL.md` or live CLI output was loaded in that run.

## Completion gate

A UI task is not complete until:

- the selected UI Skill instructions have been followed;
- the relevant repository checks pass;
- the rendered surface has been inspected when the selected skill requires rendered evidence;
- the checklist in `design/DESIGN-QA.md` is satisfied where applicable.
