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

## i18n

- **Date:** 2026-02-18
- **Trigger:** Audit found useReducedMotion() only used in 3/15 slides despite CLAUDE.md claiming all slides
- **Rule:** When documenting patterns, verify actual usage across all files before claiming universal adoption.
- **Why:** Overstated claims mislead future developers about accessibility coverage.
