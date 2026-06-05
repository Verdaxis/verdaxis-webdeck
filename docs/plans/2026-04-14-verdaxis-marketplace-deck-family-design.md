# Verdaxis Marketplace Deck Family — Design

## Goal
Refresh the Verdaxis deck system so the investor story stays current and the market-facing story splits cleanly into `sales`, `buyer`, and `supplier` decks.

## Audit Baseline

The current market-facing deck is functional, but it reads like a hardcoded pilot shell rather than a durable deck family.

- `app/[deck]/page.tsx` still special-cases `user` as the only responsive route.
- `lib/decks/user.ts` makes the generic market-facing deck name vague for outbound use.
- `components/slides/user/*` are mostly hardcoded, so buyer/supplier variants would drift unless the architecture is cleaned up.
- `lib/animations.ts` uses 0.8s entrance timings and 0.2 stagger, which feels slow for a pitch deck.
- `app/layout.tsx` and `app/globals.css` define typography in a split, inconsistent way.
- The current white-card language is clear, but too close to a default SaaS template for a pilot launch.

The MarinaChain Verdaxis brochure is useful as a reference for kinetic exchange energy, not as a direct visual template.

## Direction

Use a `marketplace-clean with cinematic accents` system.

- Clean enough to feel trustworthy, concise, and conversion-oriented.
- Cinematic enough to feel premium and alive when the room needs it.
- Verdaxis blue and green stay as the core palette.
- Dark exchange panels are used sparingly for emphasis, numeric moments, and live-market surfaces.
- The MarinaChain brochure’s density, order-book energy, and data motion are references for rhythm, not for brand treatment.

## Deck Family

### `vc`

Keep the investor deck separate, but refresh it to match the new brand system.

- More cinematic than the market decks.
- Denser than `sales`, `buyer`, and `supplier`.
- Better for moat, traction, financials, roadmap, and technical depth.

### `sales`

Make `sales` the canonical generic market-facing deck.

- This is the outbound default when the recipient is not yet clearly buyer-side or supplier-side.
- It should be short, legible, and strongly conversion-oriented.
- It becomes the base visual and interaction system for the other market-facing decks.

### `buyer`

Build a buyer-specific deck on the same shared system.

- Focus on procurement pain, compliance, pricing, liquidity, and speed to first trade.
- CTAs should point at buyer onboarding, pilot signup, or buyer qualification.

### `supplier`

Build a supplier-specific deck on the same shared system.

- Focus on demand access, listing flow, trust, compliance artifacts, and activation of supply.
- CTAs should point at supplier onboarding, listing intake, or supplier qualification.

### `user`

Keep `user` only as a legacy alias if needed for old links.

- It should not be the canonical name.
- It should not appear as a primary deck option.

## Shared Visual System

### Color

- Base background: light slate / off-white.
- Primary brand accent: Verdaxis blue.
- Secondary brand accent: Verdaxis green.
- Dark emphasis surface: near-navy exchange panel.
- Avoid broad use of gold, purple, or neon gradients.

### Typography

- Use one disciplined sans for body/UI and one characterful serif or display face for hero moments.
- The deck family should not feel like three fonts fighting each other.
- Headlines should be confident, not decorative.
- Body copy should stay readable and compact.

### Layout

- Use asymmetric hero treatments instead of centered generic stacks.
- Prefer bento-style information grouping over repetitive card rows.
- Use dark surfaces for numeric or exchange-like moments only.
- Keep the market decks lighter and more open than the investor deck.

### Motion

- Motion should reinforce hierarchy and action, not decorate the page.
- One or two kinetic motifs per slide max.
- Use short entrance timing, subtle press feedback, and fast exits.
- The shared motion language should feel calibrated, not flashy.

## Motion Rules

- Micro-interactions: 150 to 250ms.
- Standard transitions: 200 to 350ms.
- Complex slide orchestration: 400ms max in aggregate.
- Staggering: 30 to 60ms between related items.
- Use transform and opacity only for most motion.
- Respect `prefers-reduced-motion` everywhere.
- Avoid infinite decorative motion unless it communicates live system state.

## Architecture

The current deck architecture should evolve from a hardcoded `user` deck into a proper market-facing family.

- Add deck metadata so routes can declare whether they are `vc` or market-facing.
- Add a responsive market slide container for `sales`, `buyer`, and `supplier`.
- Keep `vc` on the existing presentation container unless a specific slide needs a different shell.
- Move market-facing copy into deck-specific content modules so audience text is not hardcoded in slide components.
- Hide legacy alias routes from the root deck picker.

Recommended contract additions:

- `kind: "vc" | "market"`
- `audience: "sales" | "buyer" | "supplier"`
- `responsive?: boolean`
- `hidden?: boolean`
- `aliasOf?: string`

## Slide Strategy

### Sales

- Hero
- Problem
- Solution
- Marketplace
- Compliance
- Intelligence / proof
- How it works
- Get started

### Buyer

- Buyer hero
- Buyer pain / current workflow
- Procurement and compliance value
- Liquidity / pricing / matching
- How onboarding works
- Pilot CTA

### Supplier

- Supplier hero
- Supply-side pain / demand access
- Listing and activation flow
- Trust, compliance, and settlement
- How onboarding works
- Pilot CTA

### VC

- Keep the existing spine, but update surfaces, spacing, motion, and typography so it matches the refreshed brand system.

## Anti-Patterns

- Generic white SaaS cards everywhere.
- Slow, slideshow-like motion.
- Centered hero copy with no strong visual hierarchy.
- Vague deck naming like `user` for external outreach.
- Hardcoded audience copy inside reusable slide components.
- Overusing dark panels or overusing theming accents.
- Transitioning `all` instead of explicit properties.

## Rollout Order

1. Refresh tokens and motion.
2. Create the market deck shell and content architecture.
3. Rename `user` to `sales` as the canonical generic deck.
4. Add `buyer` and `supplier`.
5. Refresh `vc` surfaces and timing.
6. Hide legacy aliases from the picker.
7. Verify build, lint, and route behavior.
