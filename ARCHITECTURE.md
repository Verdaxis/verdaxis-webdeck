# Architecture

Static-export Next.js pitch deck with slide-by-slide navigation, modal branch overlays, i18n (6 languages), and Framer Motion animations.

## Tech Stack

Next.js 16 (App Router, static export) | React 19 | TypeScript 5 (strict) | Tailwind CSS v4 | Framer Motion 12

## File Map

```
app/
  layout.tsx                   # Root layout: Google Fonts, I18nProvider wrapper
  page.tsx                     # Deck picker — lists all decks from lib/decks/
  globals.css                  # Tailwind v4 @theme tokens, CSS keyframe animations, mobile gate
  [deck]/
    layout.tsx                 # Per-deck metadata (generateMetadata from deck config)
    page.tsx                   # Entry: generateStaticParams -> SlideContainer

components/
  SlideContainer.tsx           # Core orchestrator: slide state, keyboard/touch nav, AnimatePresence
  UserSlideContainer.tsx       # User-facing deck orchestrator with same desktop-only mobile gate
  MarketSlideContainer.tsx     # Market/buyer/supplier deck orchestrator with same desktop-only mobile gate
  MobileGate.tsx               # Shared mobile "best viewed on desktop" gate for deck variants
  SlideWrapper.tsx             # Viewport-locked layout shell for each slide
  SlideBackground.tsx          # Animated bg variants: mesh, grid, waves, orbs
  SlideNavigation.tsx          # Bottom bar: progress track, arrows, home button
  LanguageSelector.tsx         # Dropdown locale switcher (6 languages)
  AnimatedCounter.tsx          # In-view animated number counter (ease-out cubic)
  DataOcean.tsx                # Canvas: shipping routes, ports, continent outlines, mouse interaction
  slides/
    Slide{Vision,TOC,WhyNow,Problem,Solution,Market,Product,Demo,...}.tsx  # 15 main slides
  slides/branches/
    Branch{MarketSizing,ComplianceEngine,AICopilot,ProducerMap,BusinessModel}.tsx  # 5 branch overlays
  branching/
    Modal.tsx                  # Portal overlay, Escape key, BranchContext sync
    BranchTrigger.tsx          # Pill/card button that opens a branch
    SubSlideContainer.tsx      # Multi-sub-slide modal with its own slide transitions
    SubSlideNavigation.tsx     # Prev/next/back controls for sub-slides
    SubSlideWrapper.tsx        # Layout wrapper for sub-slide content
    Accordion.tsx              # Animated expand/collapse section

lib/
  slideRegistry.ts             # Lazy-loaded component map + preloadSlideById()
  animations.ts                # Framer Motion Variants: fadeInUp, staggerContainer, slideTransition, modal*
  i18n.tsx                     # React Context provider: useContent(), useI18n(), loadContent()
  branchContext.tsx             # React Context ref for "is branch modal open"
  decks/
    index.ts                   # Deck map export (currently: { vc })
    types.ts                   # DeckConfig, SlideEntry interfaces
    vc.ts                      # VC deck: 15 slides, 5 branch overlays
  content/
    types.ts                   # DeckContent interface — full typed i18n shape
    index.ts                   # loadContent() dynamic import switch
    en.ts                      # English content (~500 lines)
    zh.ts, de.ts, nl.ts, fr.ts, pt.ts  # Translated content files

public/images/                 # Logos (verdaxis, partners) and team headshots
tasks/lessons.md               # Session learnings log
```

## Dependency Flow

```
app/[deck]/page.tsx
  |
  +-- lib/decks/ (deck config: slide order + branches)
  |
  +-- SlideContainer
        |
        +-- lib/branchContext (BranchProvider wraps inner)
        +-- lib/i18n (useContent for slide titles)
        +-- lib/slideRegistry (lazy-load + preload adjacent slides)
        +-- SlideNavigation + LanguageSelector
        |
        +-- Slide* (from registry, rendered via Suspense)
              |
              +-- SlideWrapper + SlideBackground
              +-- lib/animations (Framer Motion variants)
              +-- useContent() for all text
              +-- BranchTrigger --> Modal / SubSlideContainer
                    |
                    +-- Branch* components (from registry)
```

## Key Patterns

**Slide lifecycle:** Every slide is `"use client"`, wrapped in `SlideWrapper` + `SlideBackground`, uses `useContent()` for text, and Framer Motion `<motion.div>` with variants from `lib/animations.ts`. Adjacent slides are preloaded via `preloadSlideById`.

**Branching:** Slides declare `branches: ["id"]` in deck config. `BranchTrigger` opens `Modal` or `SubSlideContainer` (portal to `document.body`). `branchContext` ref blocks main slide keyboard nav while a branch is open.

**i18n:** English is statically imported; other locales (`zh`, `de`, `nl`, `fr`, `pt`) are dynamically imported. `?lang=xx` URL param overrides browser detection. All content satisfies the `DeckContent` interface.

**Navigation:** Keyboard arrows/space, touch swipe, digit+Enter jump, URL hash deep linking. Animation lock prevents rapid-fire transitions.

**Desktop-only decks:** Slide containers use a shared mobile gate below 768px. This keeps all deck families presentation-first and avoids squeezed mobile layouts.

**Static export:** `output: "export"` in `next.config.ts`. No API routes, no SSR. `generateStaticParams` pre-renders each deck slug. Images use `unoptimized: true`.

## Entry Points

| Path | Purpose |
|------|---------|
| `/` | Deck picker (lists all decks) |
| `/vc` | VC investor deck (15 slides + 5 branches) |
| `/vc#slide-id` | Deep link to specific slide |
| `?lang=xx` | Force locale (en/zh/de/nl/fr/pt) |

## Run Commands

```bash
npm run dev       # Dev server on localhost:3000
npm run build     # Static export to /out/
npm run lint      # ESLint
```
