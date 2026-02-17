export interface DeckContent {
  slides: Record<string, SlideMetadata>;

  vision: {
    headline: string;
    subtitle: string;
    tagline: string;
    tickerItems: { fuel: string; region: string; price: string; change: string; ci: string }[];
  };

  toc: {
    heading: string;
    subheading: string;
  };

  whyNow: {
    heading: string;
    subtitle: string;
    drivers: { title: string; description: string; iconKey: string }[];
    stats: { value: string; label: string }[];
  };

  problem: {
    heading: string;
    subtitle: string;
    cards: { title: string; description: string; iconKey: string }[];
  };

  solution: {
    heading: string;
    subtitle: string;
    pillars: { title: string; description: string; iconKey: string }[];
  };

  market: {
    heading: string;
    subtitle: string;
    tam: { value: string; label: string; description: string };
    sam: { value: string; label: string; description: string };
    som: { value: string; label: string; description: string };
    branchLabel: string;
  };

  product: {
    heading: string;
    subtitle: string;
    features: {
      name: string;
      description: string;
      iconKey: string;
      highlight?: string;
    }[];
    branchLabels: Record<string, string>;
  };

  traction: {
    heading: string;
    subtitle: string;
    stats: { value: string; label: string }[];
    frameworks: string[];
    milestones: { title: string; date: string }[];
  };

  competitive: {
    heading: string;
    subtitle: string;
    dimensions: string[];
    competitors: { name: string; scores: Record<string, "full" | "partial" | "none"> }[];
    verdaxisScores: Record<string, "full">;
  };

  flywheel: {
    heading: string;
    subtitle: string;
    nodes: { label: string; description: string }[];
    centerLabel: string;
  };

  revenue: {
    heading: string;
    subtitle: string;
    streams: { title: string; description: string; pricing: string; tag?: string }[];
    projectedLabel: string;
    growthStatement: string;
  };

  team: {
    heading: string;
    subtitle: string;
    members: {
      name: string;
      role: string;
      bio: string;
      imageUrl?: string;
    }[];
  };

  financials: {
    heading: string;
    subtitle: string;
    roundType: string;
    totalRaise: string;
    tranches: { name: string; amount: string; trigger: string; description: string }[];
    allocations: { label: string; percentage: string }[];
    ctaText: string;
  };

  roadmap: {
    heading: string;
    subtitle: string;
    phases: {
      year: string;
      title: string;
      items: string[];
    }[];
    visionStatement: string;
  };

  nav: {
    goToFirst: string;
    previousSlide: string;
    nextSlide: string;
  };

  branches: {
    marketSizing: {
      title: string;
      tam: { label: string; value: string; source: string; description: string };
      sam: { label: string; value: string; source: string; description: string };
      som: { label: string; value: string; source: string; description: string };
    };
    complianceEngine: {
      title: string;
      frameworks: { name: string; description: string; status: string }[];
    };
    aiCopilot: {
      title: string;
      capabilities: { name: string; description: string }[];
    };
    producerMap: {
      title: string;
      stats: { value: string; label: string }[];
      regions: string[];
    };
    businessModel: {
      title: string;
      streams: { name: string; description: string; pricing: string }[];
    };
  };
}

interface SlideMetadata {
  title: string;
  section: string;
}
