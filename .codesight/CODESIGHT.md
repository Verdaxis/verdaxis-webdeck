# verdaxis-webdeck — AI Context Map

> **Stack:** next-app | none | react | typescript

> 0 routes | 0 models | 47 components | 2 lib files | 0 env vars | 0 middleware | 28 import links
> **Token savings:** this file is ~1,700 tokens. Without it, AI exploration would cost ~24,500 tokens. **Saves ~22,800 tokens per conversation.**

---

# Components

- **DeckLayout** — props: params — `app/[deck]/layout.tsx`
- **DeckPage** — props: params — `app/[deck]/page.tsx`
- **RootLayout** — `app/layout.tsx`
- **DeckPicker** — `app/page.tsx`
- **AnimatedCounter** [client] — props: target, suffix, prefix, duration, className — `components/AnimatedCounter.tsx`
- **DataOcean** [client] — props: className, opacity — `components/DataOcean.tsx`
- **LanguageSelector** [client] — `components/LanguageSelector.tsx`
- **SlideBackground** [client] — props: variant, tint — `components/SlideBackground.tsx`
- **SlideContainer** [client] — props: deck, slideMetadata — `components/SlideContainer.tsx`
- **SlideNavigation** [client] — props: currentSlide, totalSlides, onPrev, onNext, onGoTo — `components/SlideNavigation.tsx`
- **SlideWrapper** [client] — props: className — `components/SlideWrapper.tsx`
- **UserSlideContainer** [client] — props: deck, slideMetadata — `components/UserSlideContainer.tsx`
- **BranchTrigger** [client] — props: label, onClick, variant, icon, className — `components/branching/BranchTrigger.tsx`
- **Modal** [client] — props: isOpen, onClose, title — `components/branching/Modal.tsx`
- **SubSlideContainer** [client] — props: isOpen, onClose, slides, title — `components/branching/SubSlideContainer.tsx`
- **SubSlideNavigation** [client] — props: current, total, onPrev, onNext, onBack — `components/branching/SubSlideNavigation.tsx`
- **SubSlideWrapper** [client] — props: className — `components/branching/SubSlideWrapper.tsx`
- **SlideCompetitive** [client] — `components/slides/SlideCompetitive.tsx`
- **SlideDemo** [client] — `components/slides/SlideDemo.tsx`
- **SlideFinancials** [client] — `components/slides/SlideFinancials.tsx`
- **SlideFlywheel** [client] — `components/slides/SlideFlywheel.tsx`
- **SlideMarket** [client] — props: branches — `components/slides/SlideMarket.tsx`
- **SlideProblem** [client] — `components/slides/SlideProblem.tsx`
- **SlideProduct** [client] — props: branches — `components/slides/SlideProduct.tsx`
- **SlideRevenue** [client] — props: branches — `components/slides/SlideRevenue.tsx`
- **SlideRoadmap** [client] — `components/slides/SlideRoadmap.tsx`
- **SlideSolution** [client] — `components/slides/SlideSolution.tsx`
- **SlideTOC** [client] — props: onGoTo, deck — `components/slides/SlideTOC.tsx`
- **SlideTeam** [client] — `components/slides/SlideTeam.tsx`
- **SlideTraction** [client] — `components/slides/SlideTraction.tsx`
- **SlideVision** [client] — `components/slides/SlideVision.tsx`
- **SlideWhyNow** [client] — `components/slides/SlideWhyNow.tsx`
- **BranchAICopilot** [client] — `components/slides/branches/BranchAICopilot.tsx`
- **BranchBusinessModel** [client] — `components/slides/branches/BranchBusinessModel.tsx`
- **BranchComplianceEngine** [client] — `components/slides/branches/BranchComplianceEngine.tsx`
- **BranchMarketSizing** [client] — `components/slides/branches/BranchMarketSizing.tsx`
- **BranchProducerMap** [client] — `components/slides/branches/BranchProducerMap.tsx`
- **UserSlideCompliance** [client] — `components/slides/user/UserSlideCompliance.tsx`
- **UserSlideGetStarted** [client] — `components/slides/user/UserSlideGetStarted.tsx`
- **UserSlideHero** [client] — `components/slides/user/UserSlideHero.tsx`
- **UserSlideHowItWorks** [client] — `components/slides/user/UserSlideHowItWorks.tsx`
- **UserSlideIntelligence** [client] — `components/slides/user/UserSlideIntelligence.tsx`
- **UserSlideMarketplace** [client] — `components/slides/user/UserSlideMarketplace.tsx`
- **UserSlideProblem** [client] — `components/slides/user/UserSlideProblem.tsx`
- **UserSlideSolution** [client] — `components/slides/user/UserSlideSolution.tsx`
- **BranchProvider** [client] — `lib/branchContext.tsx`
- **I18nProvider** [client] — `lib/i18n.tsx`

---

# Libraries

- `lib/content/index.ts` — function loadContent: (locale) => Promise<DeckContent>
- `lib/slideRegistry.ts`
  - function preloadSlideById: (id) => void
  - interface SlideRegistryEntry
  - const slideRegistry: Record<string, SlideRegistryEntry>

---

# Config

## Config Files

- `next.config.ts`
- `tailwind.config.ts`
- `tsconfig.json`

## Key Dependencies

- next: 16.1.6
- react: 19.2.3

---

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

---

_Generated by [codesight](https://github.com/Houseofmvps/codesight) — see your codebase clearly_