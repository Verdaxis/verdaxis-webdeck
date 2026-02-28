# Pattern: Title / Hero Slide

Opening slides with dramatic visuals. Reference: `SlideVision.tsx`.

## Structure

```
SlideWrapper (overflow-hidden, bg-white, p-0)
  DataOcean (interactive background, opacity=0.85)
  PriceTicker (top edge, infinite scroll)
  motion.div (centered content, z-10)
    Logo with pulsing glow
    Company name (font-heading, uppercase, tracking-[0.2em])
    Headline (font-display, text-3xl md:text-5xl lg:text-6xl)
    Subtitle with TypingText effect
    Tagline pills (rounded-full border, animate-pulse-dot)
    Year badge (brand-green accent)
```

## Key Patterns

- **No `SlideBackground`** -- uses `DataOcean` interactive canvas instead
- **`p-0` on SlideWrapper** -- full-bleed layout, no padding
- **PriceTicker**: CSS-driven infinite scroll (`animation: ticker-scroll 40s linear infinite`), triples items for seamless loop
- **TypingText**: Character-by-character typing effect with blinking cursor, respects `useReducedMotion()`
- **Glow effects**: `radial-gradient` with `animate-pulse-glow` on logo
- **Tagline pills**: Split `tagline` on ` | `, render as rounded pill badges with verdaxis-blue pulse dots
- **Stagger animation**: Uses `staggerContainer` + `fadeInUp`/`scaleIn` variants from `lib/animations`

## Tailwind Tokens Used

```
verdaxis-blue      -- subtitle, cursor, pulse dots
brand-green        -- year badge
text-slate-900     -- heading, company name
text-slate-600     -- pill text
border-slate-200   -- pill borders
font-heading       -- company name (Unbounded/heading font)
font-display       -- headline
animate-pulse-glow -- logo glow
animate-pulse-dot  -- pill indicator dots
animate-blink-cursor -- typing cursor
```

## When to Use

- Opening/title slides
- Dramatic first impressions with animated elements
- Slides that need full-bleed backgrounds with overlaid content
