import type { MarketContentByAudience, MarketDeckContent } from "./types";

const pilotInviteHref = "https://app.verdaxis.exchange/invite/VDX-WOKKYJ";
const salesWalkthroughHref = "https://www.youtube.com/watch?v=ScMzIvxBSi4";
const buyerWalkthroughHref = "https://vimeo.com/1184063423";
const supplierWalkthroughHref = "https://vimeo.com/1184063377";

const sharedSlides = {
  "market-hero": { title: "Pilot Access", section: "Overview" },
  "market-problem": { title: "Market Friction", section: "Problem" },
  "market-solution": { title: "Platform Model", section: "Solution" },
  "market-marketplace": { title: "Marketplace", section: "Product" },
  "market-intelligence": { title: "Intelligence", section: "Product" },
  "market-how-it-works": { title: "Workflow", section: "Activation" },
  "market-get-started": { title: "Get Started", section: "Call to Action" },
} satisfies MarketDeckContent["slides"];

const sharedNav = {
  goToFirst: "Go to first slide",
  previousSlide: "Previous slide",
  nextSlide: "Next slide",
} satisfies MarketDeckContent["nav"];

const sharedProblemCards = [
  {
    title: "Regulatory Maze",
    description:
      "FuelEU Maritime, EU ETS, and CII obligations overlap with escalating penalties and limited unified tooling.",
    iconKey: "regulation",
  },
  {
    title: "Opaque Markets",
    description:
      "Price discovery still runs through fragmented email threads and WhatsApp groups, making fair comparisons slow and inconsistent.",
    iconKey: "market",
  },
  {
    title: "Manual Processes",
    description:
      "Fuel documentation, offer comparison, and counterparty checks still sit across inboxes and spreadsheets, increasing execution risk and friction.",
    iconKey: "manual",
  },
] satisfies MarketDeckContent["problem"]["cards"];

const sharedPillars = [
  {
    title: "Marketplace",
    description:
      "Bring bids, listings, and qualified counterparties into one place so real supply and demand can meet faster.",
    iconKey: "marketplace",
  },
  {
    title: "Trusted Supply",
    description:
      "Surface declared CI data, certification evidence, and documentation quality before commercial discussions move forward.",
    iconKey: "compliance",
  },
  {
    title: "Market Intelligence",
    description:
      "Track reference prices, bid/ask depth, and port-level availability to support timing and pricing decisions.",
    iconKey: "intelligence",
  },
] satisfies MarketDeckContent["solution"]["pillars"];

const sharedFuelTypes = [
  { name: "Bio Ethanol", ci: "Supported" },
  { name: "Bio Methanol", ci: "Supported" },
  { name: "e-Methanol", ci: "Supported" },
  { name: "Synthetic Ethanol", ci: "Supported" },
] satisfies MarketDeckContent["marketplace"]["fuelTypes"];

const sharedPorts = [
  "Dalian",
  "Busan",
  "Shanghai",
  "Singapore",
  "Rotterdam",
  "Houston",
  "Los Angeles",
  "Santos",
];

const sharedFrameworks = [
  {
    name: "FuelEU Maritime",
    description:
      "Listings can carry declared CI data and supporting evidence relevant to FuelEU Maritime planning.",
    status: "Context",
  },
  {
    name: "EU ETS",
    description:
      "Alternative fuel choices can affect emissions exposure; Verdaxis keeps fuel and counterpart data visible for review.",
    status: "Context",
  },
  {
    name: "CII Rating",
    description:
      "Lower-carbon fuel procurement can support wider vessel performance and regulatory planning conversations.",
    status: "Context",
  },
] satisfies MarketDeckContent["compliance"]["frameworks"];

const sharedHowItWorksSteps = [
  {
    number: "01",
    title: "Register and Set Up",
    description:
      "Create your account, choose your role, and configure fleet or supply profile details for pilot onboarding.",
    details: [
      "Select your role and operating profile",
      "Set notification preferences",
      "Invite key team members",
    ],
    iconKey: "register",
    tone: "blue",
  },
  {
    number: "02",
    title: "Run Marketplace Workflows",
    description:
      "Publish supply, place bids, or evaluate listings with CI-aware comparisons and structured documentation.",
    details: [
      "Filter by fuel type, port, and CI score",
      "Place bids or publish listings",
      "Set guardrails for price and documentation",
    ],
    iconKey: "list",
    tone: "green",
  },
  {
    number: "03",
    title: "Match and Keep Records",
    description:
      "Confirm matches, keep key documents organized, and move into direct commercial execution with context.",
    details: [
      "Auto-match or manually confirm trades",
      "Keep supplied documents attached",
      "Track fulfillment and payment milestones",
    ],
    iconKey: "trade",
    tone: "dark",
  },
] satisfies MarketDeckContent["howItWorks"]["steps"];

const salesContent: MarketDeckContent = {
  slides: sharedSlides,
  nav: sharedNav,
  hero: {
    eyebrow: "Pilot Launch",
    headline: "Request pilot access to Verdaxis",
    subtitle:
      "A market-facing platform for verified sustainable marine fuels, built for buyers and suppliers joining the pilot.",
    primaryCta: {
      label: "Join the Pilot",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Walkthrough",
      href: salesWalkthroughHref,
    },
    trustPills: ["Verified Supply", "CI Data", "MPA Aligned", "Singapore HQ"],
  },
  problem: {
    heading: "Maritime Decarbonization is Complex",
    subtitle: "Three critical barriers still block adoption of sustainable marine fuels.",
    cards: sharedProblemCards,
    callout: "Verdaxis was built to solve these three constraints in one workflow.",
  },
  solution: {
    heading: "One Platform. Complete Coverage.",
    subtitle: "Three practical pillars that convert market complexity into clearer commercial action.",
    pillars: sharedPillars,
    tagline:
      "Built for ship operators, fuel suppliers, and brokers navigating the transition together.",
  },
  marketplace: {
    heading: "Browse, List, and Trade Green Fuels",
    subtitle: "A live exchange built for low-carbon marine fuel transactions.",
    features: [
      {
        title: "Live Listings with CI Scores",
        description:
          "Every listing carries declared carbon intensity and certification data so offers can be compared on sustainability and price.",
        iconKey: "listings",
      },
      {
        title: "Structured Bids and Offers",
        description:
          "Keep bids, asks, and commercial intent in a shared structure instead of scattered inbox threads.",
        iconKey: "rfq",
      },
      {
        title: "Qualified Matchmaking",
        description:
          "Connect credible buyers and suppliers around fuel type, port, volume, and delivery window.",
        iconKey: "matching",
      },
    ],
    fuelTypesLabel: "Supported Fuel Types",
    fuelTypes: sharedFuelTypes,
    keyPortsLabel: "Key Ports",
    ports: sharedPorts,
    liveDataLead: "Market activity",
    liveDataBody: "updates as credible bids, asks, and listings enter the platform.",
  },
  compliance: {
    heading: "Stay Ahead of Regulations",
    subtitle: "Use clearer fuel data and documentation to support regulatory planning conversations.",
    frameworks: sharedFrameworks,
    scenario: {
      title: "Fuel Data Example",
      badge: "Example",
      fromLabel: "From",
      toLabel: "To",
      from: "VLSFO",
      to: "Bio Methanol",
      metrics: [
        { label: "CI Reduction", value: "-62%", tone: "green" },
        { label: "FuelEU Saving / yr", value: "EUR 420K", tone: "green" },
        { label: "ETS Saving / yr", value: "EUR 180K", tone: "blue" },
        { label: "CII Rating", value: "C to A", tone: "blue" },
      ],
    },
    dashboardNote: "Verdaxis focuses on the market data and documentation needed before specialist compliance work begins.",
  },
  intelligence: {
    heading: "Data-Driven Decisions",
    subtitle: "Reference pricing, market depth, and port availability in one trading view.",
    features: [
      {
        title: "Daily Reference Prices",
        description:
          "Use daily market reference prices to understand where buyers and sellers are meeting.",
        iconKey: "trends",
      },
      {
        title: "Supply and Demand Analytics",
        description:
          "Track bid and ask depth, regional flows, and emerging imbalances before they show up in the next conversation.",
        iconKey: "analytics",
      },
      {
        title: "Port Fuel Availability",
        description:
          "Understand where verified fuel is available, with volume and delivery-window visibility by port.",
        iconKey: "ports",
      },
    ],
    chart: {
      title: "Bio Methanol Reference Price",
      subtitle: "Singapore · Indicative reference",
      price: "$1,100",
      change: "daily reference",
      fromLabel: "30 days ago",
      toLabel: "Today",
    },
  },
  howItWorks: {
    heading: "How It Works",
    subtitle: "From sign-up to first qualified trade in under an hour.",
    steps: sharedHowItWorksSteps,
    note: "Verdaxis helps credible counterparties meet around documented fuel supply, clear pricing, and practical next steps.",
  },
  getStarted: {
    heading: "Ready to Start the Pilot?",
    subtitle:
      "Join the market-facing platform for sustainable marine fuels and activate your team.",
    primaryCta: {
      label: "Create Pilot Account",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Walkthrough",
      href: salesWalkthroughHref,
    },
    supportLabel: "Questions?",
    supportEmail: "hello@verdaxis.exchange",
    supportHref: "mailto:hello@verdaxis.exchange",
    trustSignals: [
      { label: "Built in Singapore", iconKey: "location" },
      { label: "MPA Compliant", iconKey: "shield" },
      { label: "EU ETS Ready", iconKey: "globe" },
      { label: "FuelEU Maritime", iconKey: "check" },
    ],
    footnote: "Pilot access is reviewed by the Verdaxis team before marketplace activation.",
  },
};

const buyerContent: MarketDeckContent = {
  ...salesContent,
  hero: {
    ...salesContent.hero,
    eyebrow: "Buyer Pilot",
    headline: "Secure verified low-carbon fuel supply with confidence",
    subtitle:
      "For procurement teams that need transparent pricing, clearer documentation, and credible supplier access.",
    primaryCta: {
      label: "Request Buyer Access",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Buyer Walkthrough",
      href: buyerWalkthroughHref,
    },
  },
  marketplace: {
    ...salesContent.marketplace,
    subtitle: "Compare qualified offers across ports and counterparties without fragmented inbox workflows.",
    features: [
      {
        title: "Buyer-Side Market Control",
        description:
          "Place bids, compare offers side-by-side, and keep negotiation context in one place.",
        iconKey: "rfq",
      },
      {
        title: "CI and Certification-Aware Comparison",
        description:
          "Evaluate price, CI data, and declared certification evidence attached to each listing.",
        iconKey: "listings",
      },
      {
        title: "Counterparty Verification",
        description:
          "Engage suppliers that have passed onboarding checks and provided documentation for review.",
        iconKey: "matching",
      },
    ],
  },
  howItWorks: {
    ...salesContent.howItWorks,
    subtitle: "From buyer onboarding to qualified fuel conversations in three steps.",
    steps: [
      {
        number: "01",
        title: "Register and Set Up",
        description:
          "Create your account, select buyer access, and share the operating profile needed for pilot onboarding.",
        details: [
          "Select buyer role",
          "Add procurement and operating profile",
          "Invite key team members",
        ],
        iconKey: "register",
        tone: "blue",
      },
      {
        number: "02",
        title: "Compare the Market",
        description:
          "Filter listed supply by fuel type, port, CI data, volume, and delivery window.",
        details: [
          "Filter by fuel type, port, and CI score",
          "Review bids, asks, and listed supply",
          "Compare price and documentation",
        ],
        iconKey: "list",
        tone: "green",
      },
      {
        number: "03",
        title: "Match and Execute",
        description:
          "Move from market view to direct counterparty discussion with clearer pricing and documentation context.",
        details: [
          "Confirm commercial interest",
          "Connect with qualified suppliers",
          "Keep key trade records organized",
        ],
        iconKey: "trade",
        tone: "dark",
      },
    ],
    note: "Buyer pilot access is free; supplier-side commercial terms support marketplace operations.",
  },
  getStarted: {
    ...salesContent.getStarted,
    heading: "Ready to streamline fuel procurement?",
    subtitle: "Start your Verdaxis buyer journey to compare verified supply and make faster procurement decisions.",
    primaryCta: {
      label: "Request Buyer Access",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Buyer Walkthrough",
      href: buyerWalkthroughHref,
    },
    trustSignals: [
      { label: "Buyer Workflow Ready", iconKey: "check" },
      { label: "Structured Market Flow", iconKey: "shield" },
      { label: "FuelEU and ETS Aware", iconKey: "globe" },
      { label: "Singapore Operations", iconKey: "location" },
    ],
  },
};

const supplierContent: MarketDeckContent = {
  ...salesContent,
  hero: {
    ...salesContent.hero,
    eyebrow: "Supplier Pilot",
    headline: "Reach qualified demand for verified sustainable fuels",
    subtitle:
      "For suppliers that want faster demand discovery, clearer listing workflows, and qualified buyer access.",
    primaryCta: {
      label: "Request Supplier Access",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Supplier Walkthrough",
      href: supplierWalkthroughHref,
    },
  },
  marketplace: {
    ...salesContent.marketplace,
    subtitle: "Publish verified supply, capture structured demand, and transact with qualified buyers.",
    features: [
      {
        title: "Faster Match and Execution",
        description:
          "Get visible to qualified buyers and move from listing to commercial discussion faster.",
        iconKey: "matching",
      },
      {
        title: "Structured Listing Workflow",
        description:
          "Publish supply with CI documentation, volume, and delivery windows in a reusable format.",
        iconKey: "listings",
      },
      {
        title: "Qualified Demand Visibility",
        description:
          "See buyer interest with clear specs and timelines instead of fragmented inbox requests.",
        iconKey: "rfq",
      },
    ],
  },
  howItWorks: {
    ...salesContent.howItWorks,
    subtitle: "From supplier onboarding to first qualified match in three structured steps.",
    steps: [
      {
        number: "01",
        title: "Register and Set Up",
        description:
          "Create your account, select supplier access, and share the operating profile needed for pilot onboarding.",
        details: [
          "Select supplier role",
          "Add supply and operating profile",
          "Invite key team members",
        ],
        iconKey: "register",
        tone: "blue",
      },
      {
        number: "02",
        title: "List Verified Supply",
        description:
          "Publish fuel availability with port, volume, delivery window, CI data, and supporting documents.",
        details: [
          "List by fuel type and port",
          "Attach CI and certification evidence",
          "Set volume and delivery window",
        ],
        iconKey: "list",
        tone: "green",
      },
      {
        number: "03",
        title: "Match with Buyers",
        description:
          "Connect with qualified buyer demand and move into direct commercial execution with clearer context.",
        details: [
          "Review qualified demand",
          "Respond to buyer interest",
          "Keep key trade records organized",
        ],
        iconKey: "trade",
        tone: "dark",
      },
    ],
    note: "Supplier commercial terms are expected to combine subscription, premium data options, and per-ton commission as the marketplace scales.",
  },
  getStarted: {
    ...salesContent.getStarted,
    heading: "Ready to show the market your supply?",
    subtitle: "Start your Verdaxis supplier journey to list inventory and connect with qualified buyer demand.",
    primaryCta: {
      label: "Request Supplier Access",
      href: pilotInviteHref,
    },
    secondaryCta: {
      label: "Watch Supplier Walkthrough",
      href: supplierWalkthroughHref,
    },
    trustSignals: [
      { label: "Supplier Workflow Ready", iconKey: "check" },
      { label: "Demand Visibility", iconKey: "globe" },
      { label: "Compliance Evidence Built-In", iconKey: "shield" },
      { label: "Singapore Operations", iconKey: "location" },
    ],
  },
};

export const marketEnContent: MarketContentByAudience = {
  sales: salesContent,
  buyer: buyerContent,
  supplier: supplierContent,
};
