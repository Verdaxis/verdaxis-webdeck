# Dependency Graph

## Most Imported Files (change these carefully)

- `lib/content/types.ts` — imported by **7** files
- `lib/decks/types.ts` — imported by **4** files
- `components/SlideNavigation.tsx` — imported by **2** files
- `components/LanguageSelector.tsx` — imported by **1** files
- `components/branching/SubSlideNavigation.tsx` — imported by **1** files
- `components/slides/branches/BranchMarketSizing.tsx` — imported by **1** files
- `components/slides/branches/BranchComplianceEngine.tsx` — imported by **1** files
- `components/slides/branches/BranchAICopilot.tsx` — imported by **1** files
- `components/slides/branches/BranchProducerMap.tsx` — imported by **1** files
- `components/slides/branches/BranchBusinessModel.tsx` — imported by **1** files
- `lib/content/en.ts` — imported by **1** files
- `lib/content/zh.ts` — imported by **1** files
- `lib/content/de.ts` — imported by **1** files
- `lib/content/nl.ts` — imported by **1** files
- `lib/content/fr.ts` — imported by **1** files
- `lib/content/pt.ts` — imported by **1** files
- `lib/decks/vc.ts` — imported by **1** files
- `lib/decks/user.ts` — imported by **1** files

## Import Map (who imports what)

- `lib/content/types.ts` ← `lib/content/de.ts`, `lib/content/en.ts`, `lib/content/fr.ts`, `lib/content/index.ts`, `lib/content/nl.ts` +2 more
- `lib/decks/types.ts` ← `lib/decks/index.ts`, `lib/decks/index.ts`, `lib/decks/user.ts`, `lib/decks/vc.ts`
- `components/SlideNavigation.tsx` ← `components/SlideContainer.tsx`, `components/UserSlideContainer.tsx`
- `components/LanguageSelector.tsx` ← `components/SlideNavigation.tsx`
- `components/branching/SubSlideNavigation.tsx` ← `components/branching/SubSlideContainer.tsx`
- `components/slides/branches/BranchMarketSizing.tsx` ← `components/slides/SlideMarket.tsx`
- `components/slides/branches/BranchComplianceEngine.tsx` ← `components/slides/SlideProduct.tsx`
- `components/slides/branches/BranchAICopilot.tsx` ← `components/slides/SlideProduct.tsx`
- `components/slides/branches/BranchProducerMap.tsx` ← `components/slides/SlideProduct.tsx`
- `components/slides/branches/BranchBusinessModel.tsx` ← `components/slides/SlideRevenue.tsx`
