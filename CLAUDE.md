# CLAUDE.md — Verdaxis Webdeck

Interactive investor pitch deck for Verdaxis, the compliance-first marketplace for verified sustainable marine fuels.

## Commands

```bash
npm run dev       # Dev server on localhost:3000
npm run build     # Static export to /out/
npm run lint      # ESLint
```

No environment variables required. No test framework configured.

## Tech Stack

- **Next.js 16.1.6** (App Router, static export via `output: "export"`)
- **React 19.2.3** with TypeScript 5 (strict mode)
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **Framer Motion 12.34.0** for animations
- **Fonts:** DM Serif Display (display), Montserrat (heading), Lato (body) via Google Fonts

## Architecture

```
app/[deck]/page.tsx          # Dynamic deck route (static params from lib/decks/)
components/slides/           # 15 main slide components (SlideVision, SlideTOC, etc.)
components/slides/branches/  # 5 branch sub-slides:
                             #   BranchMarketSizing, BranchComplianceEngine,
                             #   BranchAICopilot, BranchProducerMap,
                             #   BranchBusinessModel
components/branching/        # Modal, Accordion, BranchTrigger, SubSlide* components
components/AnimatedCounter.tsx   # Animated number counter (used in SlideMarket)
components/DataOcean.tsx         # Interactive shipping-route canvas animation
components/LanguageSelector.tsx  # Dropdown language switcher
components/SlideNavigation.tsx   # Slide dots + prev/next arrows
components/SlideBackground.tsx   # Atmospheric animated backgrounds (mesh/grid/waves/orbs)
lib/decks/                   # Deck configs (vc.ts defines slide order + branches)
lib/content/                 # i18n content files (en/zh/de/nl/fr/pt)
lib/slideRegistry.ts         # Lazy-loaded component registry + preloader
lib/animations.ts            # Framer Motion variant presets
lib/i18n.tsx                 # React Context i18n provider with auto-detection
lib/branchContext.tsx         # Branch open/close state
```

## Key Patterns

### Slides
Every slide follows the same pattern:
1. `"use client"` directive
2. `useContent()` hook for i18n text
3. Some slides use `useReducedMotion()` for accessibility (SlideVision, SlideDemo, SlideBackground). CSS `@media (prefers-reduced-motion: reduce)` handles reduced motion globally for ticker and flywheel animations.
4. Wrapped in `<SlideWrapper>` + `<SlideBackground variant="...">`
5. Framer Motion `<motion.div>` with variants from `lib/animations.ts`

### Adding a New Slide
1. Create `components/slides/SlideXxx.tsx` following the pattern above
2. Add content type to `lib/content/types.ts` (DeckContent interface)
3. Add content to ALL 6 language files in `lib/content/` (en, zh, de, nl, fr, pt)
4. Register in `lib/slideRegistry.ts` (both `slideImporters` and `slideRegistry`)
5. Add to deck config in `lib/decks/vc.ts`

### i18n
- 6 languages: EN (default), ZH, DE, NL, FR, PT
- Content files are large typed objects (~500 lines each) satisfying `DeckContent`
- `loadContent(locale)` dynamically imports non-English locales
- URL param `?lang=xx` overrides browser auto-detection
- All UI text must come from content files, never hardcoded

### Branching System
Slides can have "branches" — modal overlays with deeper content:
- Parent slide declares `branches: ["branch-id"]` in deck config
- Branch components live in `components/slides/branches/`
- `BranchTrigger` opens the modal, `branchContext` tracks state
- Branch slides registered in `slideRegistry` like normal slides

### Navigation
- Keyboard: Arrow keys, Space (next), digit+Enter (jump to slide N)
- Touch: Swipe left/right
- URL: Hash `#slide-id` for deep linking
- Adjacent slides are preloaded for smooth transitions

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
