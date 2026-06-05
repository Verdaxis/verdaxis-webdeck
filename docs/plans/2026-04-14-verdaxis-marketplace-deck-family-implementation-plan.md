# Verdaxis Marketplace Deck Family Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh the Verdaxis deck system so `vc` feels current again and the market-facing story splits cleanly into `sales`, `buyer`, and `supplier`.

**Architecture:** Introduce a shared market-facing deck shell with audience-specific content providers, then refresh the VC deck to the new visual system. Keep `user` only as a hidden legacy alias so old links still work. The implementation should minimize duplication by sharing slide shells, motion tokens, and route wiring across all market decks.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion 12.

---

### Task 1: Add deck-family metadata and route handling

**Files:**
- Modify: `lib/decks/types.ts`
- Modify: `lib/decks/index.ts`
- Create: `lib/decks/sales.ts`
- Create: `lib/decks/buyer.ts`
- Create: `lib/decks/supplier.ts`
- Modify: `lib/decks/user.ts`
- Modify: `app/page.tsx`
- Modify: `app/[deck]/page.tsx`
- Modify: `app/[deck]/layout.tsx`

**Step 1: Extend the deck contract**

- Add `kind: "vc" | "market"`.
- Add `audience: "sales" | "buyer" | "supplier"`.
- Add `responsive?: boolean`.
- Add `hidden?: boolean`.
- Add `aliasOf?: string`.

**Step 2: Split the deck registry**

- Move the canonical market-facing deck to `lib/decks/sales.ts`.
- Add `lib/decks/buyer.ts` and `lib/decks/supplier.ts` as first-class deck configs.
- Keep `lib/decks/user.ts` as a hidden alias to `sales` for legacy links.
- Export all four decks from `lib/decks/index.ts`.

**Step 3: Update the picker and deck route selection**

- Filter `hidden` decks out of `app/page.tsx` so only `vc`, `sales`, `buyer`, and `supplier` appear.
- Route market decks through the responsive container.
- Keep `vc` on the desktop-gated slide container.
- Preserve existing metadata generation in `app/[deck]/layout.tsx`.

**Step 4: Verify the route model**

- Run: `npm run build`
- Expected: static params include the new deck slugs, the picker no longer shows `user`, and the build succeeds after the type updates.

### Task 2: Build the shared market deck shell and content system

**Files:**
- Create: `components/MarketSlideContainer.tsx`
- Create: `lib/marketI18n.tsx`
- Create: `lib/content/market/types.ts`
- Create: `lib/content/market/index.ts`
- Create: `lib/content/market/en.ts`
- Modify: `lib/slideRegistry.ts`
- Move/rename: `components/slides/user/UserSlideHero.tsx` → `components/slides/market/MarketSlideHero.tsx`
- Move/rename: `components/slides/user/UserSlideProblem.tsx` → `components/slides/market/MarketSlideProblem.tsx`
- Move/rename: `components/slides/user/UserSlideSolution.tsx` → `components/slides/market/MarketSlideSolution.tsx`
- Move/rename: `components/slides/user/UserSlideMarketplace.tsx` → `components/slides/market/MarketSlideMarketplace.tsx`
- Move/rename: `components/slides/user/UserSlideCompliance.tsx` → `components/slides/market/MarketSlideCompliance.tsx`
- Move/rename: `components/slides/user/UserSlideIntelligence.tsx` → `components/slides/market/MarketSlideIntelligence.tsx`
- Move/rename: `components/slides/user/UserSlideHowItWorks.tsx` → `components/slides/market/MarketSlideHowItWorks.tsx`
- Move/rename: `components/slides/user/UserSlideGetStarted.tsx` → `components/slides/market/MarketSlideGetStarted.tsx`

**Step 1: Define the market content contract**

- Model audience-specific copy for hero, problem, solution, marketplace, compliance, intelligence, how-it-works, and CTA sections.
- Keep the content shape narrow enough that buyer/supplier variants only swap copy and CTA intent, not component structure.

**Step 2: Create the market i18n/provider layer**

- Add a provider and hook analogous to `lib/i18n.tsx`.
- Ensure the market shell can read content from a single audience-aware context.
- Keep the implementation English-first if translation coverage would slow the launch.

**Step 3: Replace the user-specific shell**

- Introduce `MarketSlideContainer` as the responsive, no-mobile-gate shell for all market-facing decks.
- Keep the navigation behavior and hash deep-linking from the current user container.
- Preserve the preloading and motion-lock behavior.

**Step 4: Repoint the slide registry**

- Re-register the market slide components under generic market IDs.
- Remove the `user-*` naming from the active market shell.
- Keep any temporary compatibility path only if the build needs it during the transition.

**Step 5: Verify the shell and content plumbing**

- Run: `npm run build`
- Expected: the market shell compiles, the deck route can render market slides from the new content provider, and the old `user` naming is no longer required in active components.

### Task 3: Make `sales` the canonical generic outbound deck

**Files:**
- Modify: `lib/decks/sales.ts`
- Modify: `lib/decks/user.ts`
- Modify: `app/page.tsx`
- Modify: `components/slides/market/MarketSlideHero.tsx`
- Modify: `components/slides/market/MarketSlideProblem.tsx`
- Modify: `components/slides/market/MarketSlideSolution.tsx`
- Modify: `components/slides/market/MarketSlideMarketplace.tsx`
- Modify: `components/slides/market/MarketSlideCompliance.tsx`
- Modify: `components/slides/market/MarketSlideIntelligence.tsx`
- Modify: `components/slides/market/MarketSlideHowItWorks.tsx`
- Modify: `components/slides/market/MarketSlideGetStarted.tsx`

**Step 1: Rebuild the generic sales narrative**

- Make `sales` the default broad-market deck for unknown prospects.
- Keep the slide spine concise, legible, and conversion-focused.
- Use the new shared market shell and content provider.

**Step 2: Keep the alias invisible**

- Preserve `user` only as a hidden compatibility route.
- Ensure the picker and any deck list UI present `sales`, not `user`.

**Step 3: Tune the sales content**

- Keep the pitch simple: problem, solution, marketplace, trust, and next step.
- Make the first slide unmistakably Verdaxis, not generic “request access” copy.
- Keep the CTA labels active and specific.

**Step 4: Verify sales routing**

- Run: `npm run build`
- Run: `npm run dev -- --port 3010` and verify `/sales` and `/user` both render the same sales story.

### Task 4: Add buyer and supplier variants

**Files:**
- Create: `lib/content/market/buyer.en.ts`
- Create: `lib/content/market/supplier.en.ts`
- Modify: `lib/content/market/index.ts`
- Modify: `lib/marketI18n.tsx`
- Create: `lib/decks/buyer.ts`
- Create: `lib/decks/supplier.ts`
- Modify: `components/slides/market/MarketSlideHero.tsx`
- Modify: `components/slides/market/MarketSlideProblem.tsx`
- Modify: `components/slides/market/MarketSlideSolution.tsx`
- Modify: `components/slides/market/MarketSlideMarketplace.tsx`
- Modify: `components/slides/market/MarketSlideCompliance.tsx`
- Modify: `components/slides/market/MarketSlideIntelligence.tsx`
- Modify: `components/slides/market/MarketSlideHowItWorks.tsx`
- Modify: `components/slides/market/MarketSlideGetStarted.tsx`

**Step 1: Write the buyer storyline**

- Emphasize procurement pain, compliance certainty, liquidity, and price clarity.
- Make the CTA point at buyer qualification or buyer pilot signup.

**Step 2: Write the supplier storyline**

- Emphasize demand access, listing confidence, trust, settlement, and response speed.
- Make the CTA point at supplier onboarding or supplier intake.

**Step 3: Keep the shell shared**

- Reuse the exact same slide layout and motion system as `sales`.
- Only the content and CTA intent should change.

**Step 4: Verify both variants**

- Run: `npm run build`
- Expected: `/buyer` and `/supplier` render distinct content without duplicating the shell logic.

### Task 5: Refresh the VC deck to the new visual system

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `lib/animations.ts`
- Modify: `components/SlideBackground.tsx`
- Modify: `components/SlideWrapper.tsx`
- Modify: `components/SlideContainer.tsx`
- Modify: `components/slides/SlideVision.tsx`
- Modify: `components/slides/SlideProblem.tsx`
- Modify: `components/slides/SlideSolution.tsx`
- Modify: `components/slides/SlideTOC.tsx`
- Modify: `components/slides/SlideProduct.tsx`
- Modify: `components/slides/SlideFinancials.tsx`
- Modify: `components/slides/SlideFlywheel.tsx`
- Modify: `components/slides/SlideRevenue.tsx`

**Step 1: Tighten the global design tokens**

- Reconcile font loading and font tokens so the deck does not mix competing systems.
- Update the color and shadow tokens to support the new marketplace-clean direction.

**Step 2: Shorten the motion**

- Bring entrance timings down to deck-appropriate values.
- Replace any broad `transition-all` usage with explicit transition properties where possible.
- Keep motion purposeful: hierarchy, state change, or live data only.

**Step 3: Re-skin the VC slides**

- Keep the VC story structure.
- Introduce a few stronger dark exchange panels and denser metric groupings.
- Reduce the “default white card” repetition.

**Step 4: Verify the VC refresh**

- Run: `npm run build`
- Run: `npm run lint`
- Expected: the VC deck still compiles and the motion/typography baseline is consistent with the market decks.

### Task 6: Update docs and clean up legacy naming

**Files:**
- Modify: `ARCHITECTURE.md`
- Modify: `CLAUDE.md`
- Modify: `tasks/lessons.md`
- Modify: `README.md`

**Step 1: Document the new deck family**

- Describe `vc`, `sales`, `buyer`, and `supplier`.
- Note that `user` is now a hidden alias, not the canonical deck name.

**Step 2: Capture the lessons**

- Record the naming correction and the need to keep market-facing decks audience-specific.

**Step 3: Final verification**

- Run: `npm run build`
- Run: `npm run lint`
- Run a final route check on `/`, `/vc`, `/sales`, `/buyer`, `/supplier`, and `/user`.

