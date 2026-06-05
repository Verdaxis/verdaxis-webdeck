# Verdaxis Webdeck

Interactive investor pitch deck for **Verdaxis** -- the compliance-first marketplace for verified sustainable marine fuels.

## Tech Stack

Next.js 16 (App Router, static export) | React 19 | TypeScript 5 (strict) | Tailwind CSS v4 | Framer Motion 12

## Getting Started

```bash
npm install
npm run dev       # Dev server on localhost:3000
npm run build     # Static export to /out/
npm run lint      # ESLint
```

No environment variables required.

## Entry Points

| Path | Purpose |
|------|---------|
| `/` | Deck picker (lists all decks) |
| `/vc` | VC investor deck (15 slides + 5 branches) |
| `/vc#slide-id` | Deep link to specific slide |
| `?lang=xx` | Force locale (en/zh/de/nl/fr/pt) |

## Key Features

- **Slide-by-slide navigation** with keyboard arrows, touch swipe, and digit+Enter jump
- **Branch overlays** -- modal deep-dives accessible from certain slides
- **6-language i18n** -- English, Chinese, German, Dutch, French, Portuguese
- **Framer Motion animations** with `prefers-reduced-motion` support
- **Desktop-first** with a mobile "best viewed on desktop" gate
- **Static export** for deployment anywhere (no server required)

See [ARCHITECTURE.md](./ARCHITECTURE.md) for full technical details and [CLAUDE.md](./CLAUDE.md) for development conventions.
