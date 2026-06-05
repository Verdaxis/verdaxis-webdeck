import type { DeckAudience } from "@/lib/decks/types";

export interface MarketSlideMetadata {
  title: string;
  section: string;
}

export interface MarketNavContent {
  goToFirst: string;
  previousSlide: string;
  nextSlide: string;
}

export interface MarketCta {
  label: string;
  href: string;
}

export interface MarketHeroContent {
  eyebrow: string;
  headline: string;
  subtitle: string;
  primaryCta: MarketCta;
  secondaryCta: MarketCta;
  trustPills: string[];
}

export interface MarketProblemCard {
  title: string;
  description: string;
  iconKey: string;
}

export interface MarketProblemContent {
  heading: string;
  subtitle: string;
  cards: MarketProblemCard[];
  callout: string;
}

export interface MarketSolutionPillar {
  title: string;
  description: string;
  iconKey: string;
}

export interface MarketSolutionContent {
  heading: string;
  subtitle: string;
  pillars: MarketSolutionPillar[];
  tagline: string;
}

export interface MarketplaceFeature {
  title: string;
  description: string;
  iconKey: string;
}

export interface MarketplaceFuelType {
  name: string;
  ci: string;
}

export interface MarketplaceContent {
  heading: string;
  subtitle: string;
  features: MarketplaceFeature[];
  fuelTypesLabel: string;
  fuelTypes: MarketplaceFuelType[];
  keyPortsLabel: string;
  ports: string[];
  liveDataLead: string;
  liveDataBody: string;
}

export interface ComplianceFramework {
  name: string;
  description: string;
  status: string;
}

export interface ComplianceScenarioMetric {
  label: string;
  value: string;
  tone: "blue" | "green";
}

export interface ComplianceScenario {
  title: string;
  badge: string;
  fromLabel: string;
  toLabel: string;
  from: string;
  to: string;
  metrics: ComplianceScenarioMetric[];
}

export interface ComplianceContent {
  heading: string;
  subtitle: string;
  frameworks: ComplianceFramework[];
  scenario: ComplianceScenario;
  dashboardNote: string;
}

export interface IntelligenceFeature {
  title: string;
  description: string;
  tier?: string;
  tierTone?: "blue" | "green";
  iconKey: string;
}

export interface IntelligenceChart {
  title: string;
  subtitle: string;
  price: string;
  change: string;
  fromLabel: string;
  toLabel: string;
}

export interface IntelligencePremium {
  label: string;
  body: string;
}

export interface IntelligenceContent {
  heading: string;
  subtitle: string;
  features: IntelligenceFeature[];
  chart: IntelligenceChart;
  premium?: IntelligencePremium;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  iconKey: string;
  tone: "blue" | "green" | "dark";
}

export interface HowItWorksContent {
  heading: string;
  subtitle: string;
  steps: HowItWorksStep[];
  note: string;
}

export interface TrustSignal {
  label: string;
  iconKey: string;
}

export interface GetStartedContent {
  heading: string;
  subtitle: string;
  primaryCta: MarketCta;
  secondaryCta: MarketCta;
  supportLabel: string;
  supportEmail: string;
  supportHref: string;
  trustSignals: TrustSignal[];
  footnote: string;
}

export interface MarketDeckContent {
  slides: Record<string, MarketSlideMetadata>;
  nav: MarketNavContent;
  hero: MarketHeroContent;
  problem: MarketProblemContent;
  solution: MarketSolutionContent;
  marketplace: MarketplaceContent;
  compliance: ComplianceContent;
  intelligence: IntelligenceContent;
  howItWorks: HowItWorksContent;
  getStarted: GetStartedContent;
}

export type MarketContentByAudience = Record<DeckAudience, MarketDeckContent>;
