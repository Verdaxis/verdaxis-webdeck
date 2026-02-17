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
  "noon-report": () => import("@/components/slides/SlideNoonReport"),
  product: () => import("@/components/slides/SlideProduct"),
  "marina-ai": () => import("@/components/slides/SlideMarinaAI"),
  traction: () => import("@/components/slides/SlideTraction"),
  competitive: () => import("@/components/slides/SlideCompetitive"),
  flywheel: () => import("@/components/slides/SlideFlywheel"),
  "go-to-market": () => import("@/components/slides/SlideGoToMarket"),
  financials: () => import("@/components/slides/SlideFinancials"),
  team: () => import("@/components/slides/SlideTeam"),
  ask: () => import("@/components/slides/SlideAsk"),
  "data-security": () => import("@/components/slides/SlideDataSecurity"),
  "pb-vision": () => import("@/components/slides/portbase/SlidePBVision"),
  "pb-toc": () => import("@/components/slides/portbase/SlidePBToc"),
  "pb-opportunity": () => import("@/components/slides/portbase/SlidePBOpportunity"),
  "pb-problem": () => import("@/components/slides/portbase/SlidePBProblem"),
  "pb-parseai": () => import("@/components/slides/portbase/SlidePBParseAI"),
  "pb-demo": () => import("@/components/slides/portbase/SlidePBDemo"),
  "pb-integration": () => import("@/components/slides/portbase/SlidePBIntegration"),
  "pb-data-security": () => import("@/components/slides/SlideDataSecurity"),
  "pb-compliance": () => import("@/components/slides/portbase/SlidePBCompliance"),
  "pb-traction": () => import("@/components/slides/SlideTraction"),
  "pb-marina-ai": () => import("@/components/slides/portbase/SlidePBMarinaAI"),
  "pb-next-steps": () => import("@/components/slides/portbase/SlidePBNextSteps"),
} as const;

export const slideRegistry: Record<string, SlideRegistryEntry> = {
  vision: { component: lazy(slideImporters.vision) },
  toc: { component: lazy(slideImporters.toc) },
  "why-now": { component: lazy(slideImporters["why-now"]) },
  problem: { component: lazy(slideImporters.problem) },
  "noon-report": { component: lazy(slideImporters["noon-report"]) },
  product: { component: lazy(slideImporters.product), availableBranches: ["data-security"] },
  "marina-ai": { component: lazy(slideImporters["marina-ai"]) },
  traction: { component: lazy(slideImporters.traction) },
  competitive: { component: lazy(slideImporters.competitive) },
  flywheel: { component: lazy(slideImporters.flywheel) },
  "go-to-market": { component: lazy(slideImporters["go-to-market"]), availableBranches: ["trojan-horse"] },
  financials: { component: lazy(slideImporters.financials) },
  team: { component: lazy(slideImporters.team) },
  ask: { component: lazy(slideImporters.ask) },
  "data-security": { component: lazy(slideImporters["data-security"]) },
  "pb-vision": { component: lazy(slideImporters["pb-vision"]) },
  "pb-toc": { component: lazy(slideImporters["pb-toc"]) },
  "pb-opportunity": { component: lazy(slideImporters["pb-opportunity"]) },
  "pb-problem": { component: lazy(slideImporters["pb-problem"]) },
  "pb-parseai": { component: lazy(slideImporters["pb-parseai"]) },
  "pb-demo": { component: lazy(slideImporters["pb-demo"]) },
  "pb-integration": { component: lazy(slideImporters["pb-integration"]) },
  "pb-data-security": { component: lazy(slideImporters["pb-data-security"]) },
  "pb-compliance": { component: lazy(slideImporters["pb-compliance"]) },
  "pb-traction": { component: lazy(slideImporters["pb-traction"]) },
  "pb-marina-ai": { component: lazy(slideImporters["pb-marina-ai"]) },
  "pb-next-steps": { component: lazy(slideImporters["pb-next-steps"]) },
};

export function preloadSlideById(id: string) {
  const importer = slideImporters[id as keyof typeof slideImporters];
  if (!importer) return;
  void importer();
}
