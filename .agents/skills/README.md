# Repository-level UI Skills

This project vendors selected official UI Skills under `.agents/skills/` so Codex-compatible agents can discover and load the real upstream `SKILL.md` instructions from the repository itself.

Start all UI work with `$ui-skills-root` / `.agents/skills/ui-skills-root/SKILL.md`.

When the live CLI is reachable, use it to route into the current catalog. When it is not reachable, use only the vendored official skills present here; do not substitute homemade summaries and do not claim a skill was used unless its actual instructions were loaded.

See `UPSTREAM.md` for pinned source commit/blob provenance and `LICENSE.ui-skills` for licensing.
