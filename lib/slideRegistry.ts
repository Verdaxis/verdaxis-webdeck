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
};

export function preloadSlideById(id: string) {
  const importer = slideImporters[id as keyof typeof slideImporters];
  if (!importer) return;
  void importer();
}
