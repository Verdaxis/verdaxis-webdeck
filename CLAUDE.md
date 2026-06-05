# CLAUDE.md — Verdaxis Webdeck

Read ARCHITECTURE.md before exploring the codebase.

Interactive investor pitch deck for Verdaxis, the compliance-first marketplace for verified sustainable marine fuels.

## Commands

```bash
npm run dev       # Dev server on localhost:3000
npm run build     # Static export to /out/
npm run lint      # ESLint
```

No environment variables required. No test framework configured.

## Conventions

- After completing work, update ARCHITECTURE.md if file structure or key relationships changed.
- All UI text must come from content files (`lib/content/`), never hardcoded.

## Adding a New Slide
1. **Read the recipe first:** `.claude/recipes/new-slide.md` has the full checklist and component skeleton
2. For specific slide types, also read the matching pattern in `.claude/recipes/patterns/` (title-hero, data-cards, feature-grid)
3. Create component, content type, and content values following the recipe
4. Register with: `./scripts/register-slide.sh <key> <Component> [vc]`
5. For branches, read `.claude/recipes/new-branch.md`

Manual steps (if not using the script):
1. Create `components/slides/SlideXxx.tsx` following the pattern above
2. Add content type to `lib/content/types.ts` (DeckContent interface)
3. Add content to ALL 6 language files in `lib/content/` (en, zh, de, nl, fr, pt)
4. Register in `lib/slideRegistry.ts` (both `slideImporters` and `slideRegistry`)
5. Add to deck config in `lib/decks/vc.ts`

## Design Tokens (Tailwind)

| Token | Value | Usage |
|-------|-------|-------|
| `verdaxis-blue` | #5DADE2 | Primary brand color |
| `verdaxis-dark-blue` | #0284C7 | Darker variant |
| `brand-green` | #4CAF50 | Secondary/accent |
| `bg-primary` | #F8FAFC | Page background |
| `text-primary` | #0F172A | Headings |
| `text-secondary` | #64748B | Muted text |

## Gotchas

- **Framer Motion `ease` types:** When using spread props (`{...variant}`) on `motion.div`, TypeScript is strict about `Easing` type. Use `Variants` objects with named states (`hidden`/`visible`/`exit`) instead of spread patterns.
- **Static export:** `output: "export"` means no API routes, no SSR, no `getServerSideProps`. Images must use `unoptimized: true`.
- **All languages must stay in sync:** Adding content to `types.ts` will cause build failures until ALL 6 language files are updated.
- **Tailwind v4:** Uses `@theme inline` directive in `globals.css` and `@import "tailwindcss"` instead of v3's `@tailwind` directives. Config is in `tailwind.config.ts` but theme tokens also defined in CSS.
- **Desktop-first:** Mobile shows a "best viewed on desktop" gate. Slides are 100dvh viewport-locked.
<!-- codesight-local:start -->
## Codesight Bootstrap

Before exploring the tree, read:
1. `.codesight/CODESIGHT.md`
2. `.codesight/libs.md` if present
3. `.codesight/graph.md` if the task touches service flow or module relationships
4. `.codesight/components.md` if the task touches UI components

Only open full source files after checking the generated context.
<!-- codesight-local:end -->
