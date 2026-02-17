export interface DeckContent {
  /** Slide metadata (title/section) used by TOC and navigation */
  slides: Record<string, SlideMetadata>;

  vision: {
    subtitle: string;
    taglineItems: string[];
  };

  toc: {
    heading: string;
    subheading: string;
  };

  whyNow: {
    heading: string;
    subtitle: string;
    regulationCards: { title: string; year: string; description: string }[];
    marketStats: { value: string; label: string }[];
    urgencyStatement: string;
    concreteExample?: string;
    tamSomBar: { label: string; value: string; description: string }[];
    branchLabels: {
      shippingMarket: string;
      marketSizing: string;
    };
  };

  problem: {
    heading: string;
    subtitle: string;
    cards: { title: string; summary: string; details?: string[] }[];
    documentCaption: string;
  };

  noonReport: {
    heading: string;
    subtitle: string;
    phaseLabels: [string, string];
    flowNodes: { label: string }[];
    documentCaption: string;
    beforeAfter?: { before: string; after: string }[];
  };

  goToMarket: {
    heading: string;
    subtitle: string;
    channels: {
      name: string;
      description: string;
      iconKey: string;
      stat: string;
    }[];
    stats: { value: string; label: string }[];
    branchLabels: {
      trojanHorse: string;
      marketReach: string;
    };
  };

  marinaAI: {
    heading: string;
    subtitle: string;
    tagline: string;
    personas: { name: string; role: string; description: string; icon: string }[];
    keyMetrics: { value: string; label: string }[];
    architecturePreview: string;
    branchLabel: string;
  };

  product: {
    heading: string;
    subtitle: string;
    products: { name: string; tagline: string; tags: string[]; branchLabel: string }[];
    dataSecurityBranchLabel?: string;
  };

  competitive: {
    heading: string;
    subtitle: string;
    dimensions: { label: string }[];
    features: { feature: string }[];
    heroLabel: string;
    competitorDescriptions: Record<string, string>;
    targetUserRow?: { mc: string; competitors: Record<string, string> };
    branchLabels: {
      techIP: string;
    };
  };

  flywheel: {
    heading: string;
    subtitle: string;
    centerLabel: string;
    nodes: { name: string; shortPhrase: string; problem?: string; solution?: string; effect?: string }[];
    statCards: { stat: string; phase: string }[];
    businessFlywheel?: { label: string; description: string }[];
  };

  traction: {
    heading: string;
    subtitle: string;
    stats: { label: string; value?: string }[];
    majorClientsLabel: string;
    partnersLabel: string;
    supportedByLabel: string;
    clientOutcomes?: { value: string; label: string }[];
    achievements: { title: string; year: string }[];
    branchLabels: {
      clientList: string;
      caseStudies: string;
    };
  };

  financials: {
    heading: string;
    subtitle: string;
    growthMultiplier: string;
    revenueStreams: { title: string; pricing: string; tag?: string }[];
    projectedRevenueLabel: string;
    growthStatement: string;
    metrics: { label: string; value?: string }[];
    unitEconomics?: { label: string; value: string }[];
    businessModelSummary?: string;
    branchLabel: string;
  };

  team: {
    heading: string;
    subtitle: string;
    founderMarketFit?: string;
    groupLabels: Record<string, string>;
    branchLabel: string;
    fullTeamBranchLabel?: string;
  };

  ask: {
    heading: string;
    subtitle: string;
    roundType?: string;
    priorFunding?: string;
    fundAllocationLabel: string;
    keyTargetsLabel: string;
    allocations: { label: string; percentage?: string }[];
    targets: { label: string; description?: string }[];
    milestones?: { label: string; timeline: string }[];
    ctaText: string;
    raisingLabel: string;
  };

  dataSecurity: {
    heading: string;
    subtitle: string;
    tiers: {
      id: string;
      name: string;
      badge: string;
      description: string;
      pros: string[];
      cons: string[];
      pricing: string;
    }[];
    privacyTooltip: string;
    cloudTooltip: string;
    spectrumLabel: [string, string];
  };

  nav: {
    goToFirst: string;
    previousSlide: string;
    nextSlide: string;
  };

  /** Branch content for modals and sub-slides */
  branches: {
    shippingMarket: {
      title: string;
      vesselValues: string;
      charterRates: string;
      factors: string[];
      dataInsight: string;
    };
    marketSizing: {
      title: string;
      tam: { label: string; value: string; source: string; description: string };
      sam: { label: string; value: string; source: string; description: string };
      som: { label: string; value: string; source: string; description: string };
      perProduct: { product: string; market: string; size: string }[];
    };
    marinaAIDeepDive: {
      title: string;
      architecture: {
        title: string;
        layers: { name: string; description: string }[];
        principles: { title: string; description: string }[];
      };
      ssaCaseStudy: {
        title: string;
        client: string;
        description: string;
        capabilities: { name: string; description: string }[];
      };
      bunkerDemo: {
        title: string;
        description: string;
        features: string[];
      };
      roadmap: {
        title: string;
        milestones: { version: string; description: string; timeline: string }[];
        networkVision: string;
      };
    };
    products: {
      parseAI: ProductBranch;
      marinaNet: ProductBranch;
      marinaDocs: ProductBranch;
      marinaCP: ProductBranch;
      marinaCon: ProductBranch;
      carbonDesk: ProductBranch;
    };
    clientList: {
      title: string;
      clients: string[];
      partners: string[];
      supporters: string[];
    };
    caseStudies: {
      title: string;
      studies: {
        client: string;
        headline: string;
        stats: { value: string; label: string }[];
        description: string;
      }[];
    };
    techIP: {
      title: string;
      patents: { name: string; status: string }[];
      techCapabilities: { name: string; description: string }[];
    };
    businessModel: {
      title: string;
      streams: {
        name: string;
        description: string;
        pricing: string;
      }[];
      dataMonetization: string;
    };
    goToMarket: {
      title: string;
      regions: { name: string; focus: string }[];
      partnerships: { partner: string; role: string }[];
      events: string[];
    };
    trojanHorse: {
      title: string;
      subtitle: string;
      flowNodes: { label: string; sublabel: string }[];
      heroBadge: string;
      overlayLabels: string[];
      bottomCaption: string;
      statement: string;
    };
  };
}

interface SlideMetadata {
  title: string;
  section: string;
}

interface ProductBranch {
  name: string;
  tagline: string;
  description: string;
  keyMetrics: { value: string; label: string }[];
  features: string[];
}
