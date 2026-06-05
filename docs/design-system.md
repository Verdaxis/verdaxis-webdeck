# Design System - Verdaxis Deck Family

## Aesthetic Direction

Verdaxis should read as a premium marketplace that feels operational, credible, and slightly cinematic.

- Primary mode for `sales`, `buyer`, and `supplier`: marketplace-clean with cinematic accents.
- Secondary mode for `vc`: denser, darker, and more data-rich, but still aligned to the same brand system.
- Visual memory: live exchange energy, compliance confidence, and fast conversion.

## Brand Tokens

- Core blue: `verdaxis-blue`
- Support green: `brand-green`
- Deep accent: `verdaxis-dark-blue`
- Surfaces: white, slate-50, slate-100, slate-900
- Use gradients sparingly for emphasis, not as the default surface treatment.

## Typography

- Display: `DM Serif Display`
- Headings: `Montserrat`
- Body: `Lato`

Rules:

- Use display type for slide headlines and closing statements.
- Use heading type for labels, CTAs, metrics, and dense cards.
- Keep body copy short and scannable. Avoid paragraph-heavy slides.

## Spacing & Layout

- Use an 8px spacing rhythm.
- Favor wide slide breathing room with centered content blocks.
- Keep the market deck to clear 1-column, 2-column, or 3-column compositions.
- Use max-width containers around `6xl` for the market family.
- Reserve dark panels for callouts, not every section.

## Component Patterns

### Market Slides

- `hero`: a strong conversion headline, two CTAs, and trust pills.
- `problem`: three-card friction framing with more tension than the other slides.
- `solution`: three pillars, balanced and symmetric.
- `marketplace`: listings, RFQ, matching, and port/fuel context.
- `compliance`: compliance frameworks plus a scenario panel.
- `intelligence`: chart + feature stack + premium callout.
- `how-it-works`: three-step onboarding story with connector motion.
- `get-started`: closing CTA slide with trust signals and support info.

### Navigation

- Market decks use the shared navigation shell with language selection hidden.
- `user` remains a hidden alias to `sales`.

## Motion

Motion should feel crisp and purposeful, not decorative.

- Staggered entrance cadence: `0.12s`
- Fade-up transition: `0.45s`
- Scale-in transition: `0.4s`
- Card hover: `150-250ms`
- Slide transitions: `0.4s` center, `0.3s` exit
- Reduced motion must remain functional and readable.

## Anti-Patterns

- Avoid generic SaaS white-card layouts with no exchange language.
- Avoid purple-centric gradients or default AI dashboard styling.
- Avoid long autoplay loops or slow reveal timings.
- Avoid mixing market decks with investor-specific density.
- Avoid exposing `user` as the canonical route name.

## Deck Roles

- `sales`: canonical outbound deck for both sides of the marketplace.
- `buyer`: buyer-specific procurement story.
- `supplier`: supplier-specific activation story.
- `vc`: investor narrative, tighter and more data-heavy.
