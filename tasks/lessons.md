# Lessons — Verdaxis Webdeck
<!-- Self-improvement-loop: Add corrections here as Trigger → Rule → Why -->
<!-- Read at session start. Write after ANY user correction. -->

## Format
- **Date:** YYYY-MM-DD
- **Trigger:** What happened
- **Rule:** What to do instead
- **Why:** Root cause

## Next.js / React

- **Date:** 2026-02-18
- **Trigger:** Audit found Math.random() called during render in SlideBackground and SlideVision
- **Rule:** Never call Math.random() during render. Use useMemo or useRef for stable random values.
- **Why:** Violates React purity rules, causes hydration mismatches in SSG, triggers React Compiler errors.

- **Date:** 2026-02-18
- **Trigger:** Audit found setState called synchronously inside useEffect for media queries
- **Rule:** Use useState lazy initializer `useState(() => window.matchMedia('...').matches)` instead of setState in useEffect.
- **Why:** Causes unnecessary re-renders and triggers React Compiler warnings.

## Documentation

- **Date:** 2026-02-18
- **Trigger:** Audit found useReducedMotion() only used in 3/15 slides despite CLAUDE.md claiming all slides
- **Rule:** Verify actual usage across all files before documenting a pattern as universal.
- **Why:** Overstated claims mislead future developers about accessibility coverage.

### Placeholder walkthrough link until video exists
- **Date:** 2026-04-14
- **Trigger:** The pilot deck needed a walkthrough CTA, but the video asset does not exist yet.
- **Rule:** Use a clearly labeled placeholder YouTube link for the temporary walkthrough CTA and keep the target URL isolated for easy replacement.
- **Why:** Launching the deck should not wait on video production, but the temporary state must be obvious and simple to swap later.

### Generic sales deck naming
- **Date:** 2026-04-14
- **Trigger:** User clarified that `user` and `sales` are synonymous for Verdaxis marketplace outreach, with `sales` as the intended canonical name.
- **Rule:** Use `sales` for the generic market-facing deck name; keep `user` only as a legacy alias if an existing route still depends on it.
- **Why:** The audience is external prospects, so a vague product label creates confusion and makes the deck family harder to reason about.

### Backend-source fuel and port lists
- **Date:** 2026-04-17
- **Trigger:** The market deck still showed outdated supported fuels and ports after the backend seed data changed.
- **Rule:** Source supported fuels from `backend/app/routers/marketplace.py` and key ports from `backend/app/routers/data.py` before editing the deck copy.
- **Why:** Frontend market messaging must stay aligned with the backend product and availability definitions.

### Screenshot overrides seed data
- **Date:** 2026-04-17
- **Trigger:** The user corrected the deck screenshots and confirmed the supported fuels and ports were a narrower set than the backend seed list.
- **Rule:** When the user provides screenshots or explicit confirmation of deck-facing supported options, treat that as the source of truth and update every deck variant to match it.
- **Why:** Seed data can include planned or extra values that should not leak into launch-facing deck copy.
