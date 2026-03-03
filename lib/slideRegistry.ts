import { lazy, type ComponentType } from "react";

export interface SlideRegistryEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<ComponentType<any>>;
  availableBranches?: string[];
}

const slideImporters = {
  vision: () => import("@/components/slides/SlideVision"),
  toc: () => import("@/components/slides/SlideTOC"),
  "why-now": () => import("@/components/slides/SlideWhyNow"),
  problem: () => import("@/components/slides/SlideProblem"),
  solution: () => import("@/components/slides/SlideSolution"),
  market: () => import("@/components/slides/SlideMarket"),
  product: () => import("@/components/slides/SlideProduct"),
  demo: () => import("@/components/slides/SlideDemo"),
  traction: () => import("@/components/slides/SlideTraction"),
  competitive: () => import("@/components/slides/SlideCompetitive"),
  flywheel: () => import("@/components/slides/SlideFlywheel"),
  revenue: () => import("@/components/slides/SlideRevenue"),
  team: () => import("@/components/slides/SlideTeam"),
  financials: () => import("@/components/slides/SlideFinancials"),
  roadmap: () => import("@/components/slides/SlideRoadmap"),
  "market-sizing": () => import("@/components/slides/branches/BranchMarketSizing"),
  "compliance-engine": () => import("@/components/slides/branches/BranchComplianceEngine"),
  "ai-copilot": () => import("@/components/slides/branches/BranchAICopilot"),
  "producer-map": () => import("@/components/slides/branches/BranchProducerMap"),
  "business-model": () => import("@/components/slides/branches/BranchBusinessModel"),
  // User onboarding deck
  "user-hero": () => import("@/components/slides/user/UserSlideHero"),
  "user-problem": () => import("@/components/slides/user/UserSlideProblem"),
  "user-solution": () => import("@/components/slides/user/UserSlideSolution"),
  "user-marketplace": () => import("@/components/slides/user/UserSlideMarketplace"),
  "user-compliance": () => import("@/components/slides/user/UserSlideCompliance"),
  "user-intelligence": () => import("@/components/slides/user/UserSlideIntelligence"),
  "user-how-it-works": () => import("@/components/slides/user/UserSlideHowItWorks"),
  "user-get-started": () => import("@/components/slides/user/UserSlideGetStarted"),
} as const;

export const slideRegistry: Record<string, SlideRegistryEntry> = {
  vision: { component: lazy(slideImporters.vision) },
  toc: { component: lazy(slideImporters.toc) },
  "why-now": { component: lazy(slideImporters["why-now"]) },
  problem: { component: lazy(slideImporters.problem) },
  solution: { component: lazy(slideImporters.solution) },
  market: { component: lazy(slideImporters.market), availableBranches: ["market-sizing"] },
  product: {
    component: lazy(slideImporters.product),
    availableBranches: ["compliance-engine", "ai-copilot", "producer-map"],
  },
  demo: { component: lazy(slideImporters.demo) },
  traction: { component: lazy(slideImporters.traction) },
  competitive: { component: lazy(slideImporters.competitive) },
  flywheel: { component: lazy(slideImporters.flywheel) },
  revenue: { component: lazy(slideImporters.revenue), availableBranches: ["business-model"] },
  team: { component: lazy(slideImporters.team) },
  financials: { component: lazy(slideImporters.financials) },
  roadmap: { component: lazy(slideImporters.roadmap) },
  "market-sizing": { component: lazy(slideImporters["market-sizing"]) },
  "compliance-engine": { component: lazy(slideImporters["compliance-engine"]) },
  "ai-copilot": { component: lazy(slideImporters["ai-copilot"]) },
  "producer-map": { component: lazy(slideImporters["producer-map"]) },
  "business-model": { component: lazy(slideImporters["business-model"]) },
  // User onboarding deck
  "user-hero": { component: lazy(slideImporters["user-hero"]) },
  "user-problem": { component: lazy(slideImporters["user-problem"]) },
  "user-solution": { component: lazy(slideImporters["user-solution"]) },
  "user-marketplace": { component: lazy(slideImporters["user-marketplace"]) },
  "user-compliance": { component: lazy(slideImporters["user-compliance"]) },
  "user-intelligence": { component: lazy(slideImporters["user-intelligence"]) },
  "user-how-it-works": { component: lazy(slideImporters["user-how-it-works"]) },
  "user-get-started": { component: lazy(slideImporters["user-get-started"]) },
};

export function preloadSlideById(id: string) {
  const importer = slideImporters[id as keyof typeof slideImporters];
  if (!importer) return;
  void importer();
}
