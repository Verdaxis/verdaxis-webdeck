import type { DeckContent } from "./types";

export const en: DeckContent = {
  slides: {
    vision: { title: "The Trusted Exchange", section: "Introduction" },
    toc: { title: "Contents", section: "Introduction" },
    "why-now": { title: "Why Now", section: "Opportunity" },
    problem: { title: "The Problem", section: "Opportunity" },
    solution: { title: "The Solution", section: "Solution" },
    market: { title: "Market Opportunity", section: "Market" },
    product: { title: "The Platform", section: "Product" },
    traction: { title: "Traction & Proof", section: "Traction" },
    competitive: { title: "Why We Win", section: "Competitive" },
    flywheel: { title: "Ecosystem Flywheel", section: "Growth" },
    revenue: { title: "Revenue Model", section: "Business" },
    team: { title: "The Team", section: "Team" },
    financials: { title: "The Ask", section: "Financials" },
    roadmap: { title: "Vision & Roadmap", section: "Roadmap" },
  },

  vision: {
    headline: "The trusted exchange for low-carbon fuels",
    subtitle: "Compliance-first marketplace for verified sustainable marine fuels",
    tagline: "Double-Count Prevention | IMO & EU Aligned | Physical-First Logic",
    tickerItems: [
      { fuel: "Bio-Methanol", region: "NW Europe", price: "$680", change: "+2.3%", ci: "32 gCO\u2082/MJ" },
      { fuel: "E-Methanol", region: "Global", price: "$1,250", change: "+1.1%", ci: "8 gCO\u2082/MJ" },
      { fuel: "FAME B100", region: "Singapore", price: "$1,420", change: "-0.5%", ci: "22 gCO\u2082/MJ" },
      { fuel: "Bio-LNG", region: "Rotterdam", price: "$890", change: "+3.7%", ci: "28 gCO\u2082/MJ" },
      { fuel: "Green Hydrogen", region: "Middle East", price: "$4,200", change: "+0.8%", ci: "4 gCO\u2082/MJ" },
      { fuel: "HVO", region: "ARA", price: "$1,680", change: "-1.2%", ci: "18 gCO\u2082/MJ" },
    ],
  },

  toc: {
    heading: "Contents",
    subheading: "Navigate through the Verdaxis investor presentation",
  },

  whyNow: {
    heading: "Why Now \u2014 An Inflection Point",
    subtitle: "The maritime industry faces an unprecedented regulatory and market transformation",
    drivers: [
      {
        title: "Regulatory Deadlines",
        description: "FuelEU Maritime enforced from Jan 2025. IMO Net-Zero Framework (NZF) locks in 2050 targets. EU ETS extended to shipping. RED III defines sustainable fuel criteria. Non-compliance costs escalate exponentially.",
        iconKey: "regulation",
      },
      {
        title: "Supply Explosion",
        description: "Chinese methanol production capacity surging \u2014 100M+ tonnes by 2026. Bio-methanol projects scaling across Europe and Asia. E-methanol pilots launching in Scandinavia and Middle East.",
        iconKey: "supply",
      },
      {
        title: "Vessel Adoption",
        description: "Order books show 200+ methanol-powered vessels in pipeline. Major shipping lines (Maersk, CMA CGM) committed to alternative fuels. Dual-fuel retrofit market accelerating.",
        iconKey: "vessels",
      },
      {
        title: "Green Corridors",
        description: "Singapore\u2013Rotterdam, Shanghai\u2013Los Angeles \u2014 governments establishing fuel-ready green shipping corridors. Port infrastructure investments unlocking demand.",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "FuelEU Maritime Enforcement" },
      { value: "200+", label: "Methanol Vessels on Order" },
      { value: "$50B", label: "Alt Fuels Market by 2030" },
      { value: "100M+", label: "Tonnes CH\u2083OH Capacity" },
    ],
  },

  problem: {
    heading: "The Problem",
    subtitle: "Three critical gaps blocking the transition to sustainable marine fuels",
    cards: [
      {
        title: "Regulatory Tsunami",
        description: "Ship operators face FuelEU Maritime, EU ETS, IMO NZF, RED III, and regional mandates simultaneously. No unified tool to track compliance across frameworks. Penalties for non-compliance can reach millions per vessel.",
        iconKey: "regulation",
      },
      {
        title: "Fragmented Market",
        description: "Alternative fuel trading happens via emails, WhatsApp, and broker calls. No transparent pricing. No standardized quality verification. No carbon-intensity adjusted comparisons. Buyers can\u2019t find verified sellers efficiently.",
        iconKey: "fragmented",
      },
      {
        title: "Critical Skills Gap",
        description: "Crew and operations teams lack training on alternative fuel handling, safety protocols, and compliance reporting. Traditional bunker knowledge doesn\u2019t transfer to methanol, ammonia, or hydrogen operations.",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "The Verdaxis Ecosystem",
    subtitle: "Three integrated pillars solving the alternative fuel transition",
    pillars: [
      {
        title: "Trading Platform",
        description: "Compliance-verified marketplace connecting fuel producers, buyers, and traders. Real-time orderbook with CI-adjusted pricing. Physical-first logic preventing double-counting. Digital certificates of origin.",
        iconKey: "trading",
      },
      {
        title: "Compliance Engine",
        description: "Unified dashboard tracking EU ETS, FuelEU Maritime, RED III, IMO NZF, 45Z, RenovaBio, and CORSIA obligations. Automated reporting. Penalty forecasting. Fleet-level compliance scoring.",
        iconKey: "compliance",
      },
      {
        title: "Digital Training",
        description: "AI-powered training modules for crew and operations on alternative fuel handling, safety, and compliance. Certification tracking. Knowledge base updated with latest regulations.",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "Market Opportunity",
    subtitle: "A $300 billion industry ripe for digital transformation",
    tam: {
      value: "$300B",
      label: "Total Addressable Market",
      description: "Global marine bunker fuel market \u2014 all vessel fuel purchases worldwide",
    },
    sam: {
      value: "$50B",
      label: "Serviceable Addressable Market",
      description: "Alternative & low-carbon marine fuels by 2030 \u2014 methanol, biofuels, LNG, hydrogen",
    },
    som: {
      value: "$5B",
      label: "Serviceable Obtainable Market",
      description: "Spot market volume through Singapore + key global hubs \u2014 our beachhead",
    },
    branchLabel: "Market Sizing Detail \u2192",
  },

  product: {
    heading: "The Platform \u2014 Live in 2026",
    subtitle: "Real features, live at app.verdaxis.exchange",
    features: [
      {
        name: "Marketplace & Orderbook",
        description: "Browse, list, and trade verified alternative fuels. Real-time orderbook with bid/ask. CI-adjusted pricing for true cost comparison.",
        iconKey: "marketplace",
        highlight: "Live Trading",
      },
      {
        name: "Compliance Dashboard",
        description: "Track EU ETS, FuelEU Maritime, and IMO obligations in one view. Fleet-level compliance scoring. Automated penalty forecasting.",
        iconKey: "compliance",
        highlight: "6 Frameworks",
      },
      {
        name: "AI Copilot",
        description: "Gemini-powered market intelligence. Natural language queries for pricing, compliance, and market analysis. Tool-calling architecture for real-time data.",
        iconKey: "ai",
        highlight: "Gemini AI",
      },
      {
        name: "Fleet Tracking",
        description: "Monitor vessel positions, CII ratings, and compliance status. Route-based fuel optimization. Voyage compliance forecasting.",
        iconKey: "fleet",
      },
      {
        name: "Producer Map",
        description: "Interactive map of 150+ global alternative fuel production projects. Filter by fuel type, region, capacity, and certification status.",
        iconKey: "map",
        highlight: "150+ Projects",
      },
      {
        name: "Energy Calculator",
        description: "Compare fuel options with CI-adjusted pricing. Factor in carbon costs, compliance credits, and true lifecycle emissions. Make data-driven fuel decisions.",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "Compliance Deep Dive \u2192",
      "ai-copilot": "AI Copilot Demo \u2192",
      "producer-map": "Producer Map \u2192",
    },
  },

  traction: {
    heading: "Traction & Proof",
    subtitle: "Platform live, compliance validated, market engaged",
    stats: [
      { value: "Live", label: "Platform at app.verdaxis.exchange" },
      { value: "6", label: "Compliance Frameworks" },
      { value: "150+", label: "Producer Projects Mapped" },
      { value: "Active", label: "Pilot Program" },
    ],
    frameworks: [
      "FuelEU Maritime",
      "RED III",
      "IMO NZF",
      "US 45Z",
      "RenovaBio",
      "CORSIA",
    ],
    milestones: [
      { title: "Platform MVP Launch", date: "Q1 2026" },
      { title: "Compliance Engine v1", date: "Q1 2026" },
      { title: "AI Copilot Beta", date: "Q2 2026" },
      { title: "First Revenue", date: "Q2 2026" },
      { title: "Founding Members Program", date: "Q2 2026" },
    ],
  },

  competitive: {
    heading: "Why We Win",
    subtitle: "Unified ecosystem vs. point solutions",
    dimensions: [
      "Fuel Trading & Matchmaking",
      "EU ETS Compliance",
      "FuelEU Maritime Tracking",
      "Crew Training",
      "Integrated Data Analytics",
    ],
    competitors: [
      {
        name: "Traditional Brokers",
        scores: {
          "Fuel Trading & Matchmaking": "partial",
          "EU ETS Compliance": "none",
          "FuelEU Maritime Tracking": "none",
          "Crew Training": "none",
          "Integrated Data Analytics": "none",
        },
      },
      {
        name: "Compliance SaaS",
        scores: {
          "Fuel Trading & Matchmaking": "none",
          "EU ETS Compliance": "full",
          "FuelEU Maritime Tracking": "partial",
          "Crew Training": "none",
          "Integrated Data Analytics": "partial",
        },
      },
      {
        name: "Bunker Platforms",
        scores: {
          "Fuel Trading & Matchmaking": "full",
          "EU ETS Compliance": "none",
          "FuelEU Maritime Tracking": "none",
          "Crew Training": "none",
          "Integrated Data Analytics": "none",
        },
      },
    ],
    verdaxisScores: {
      "Fuel Trading & Matchmaking": "full",
      "EU ETS Compliance": "full",
      "FuelEU Maritime Tracking": "full",
      "Crew Training": "full",
      "Integrated Data Analytics": "full",
    },
  },

  flywheel: {
    heading: "Ecosystem Flywheel",
    subtitle: "Day 1 network advantage through MarinaChain\u2019s 400+ vessel base",
    nodes: [
      { label: "MarinaChain Network", description: "400+ vessels already on platform \u2014 instant distribution channel" },
      { label: "Founding Members", description: "Early adopters get preferential pricing and feature input" },
      { label: "Market Liquidity", description: "More participants = tighter spreads = better prices for all" },
      { label: "Data Intelligence", description: "Transaction data powers market insights and AI capabilities" },
      { label: "More Users", description: "Better data and liquidity attract more producers and buyers" },
    ],
    centerLabel: "Verdaxis Ecosystem",
  },

  revenue: {
    heading: "Revenue Model",
    subtitle: "Multiple revenue streams with clear unit economics",
    streams: [
      {
        title: "Transaction Fees",
        description: "0.5% commission on every fuel trade executed through the platform. Scales directly with trading volume.",
        pricing: "0.5% per trade",
        tag: "Primary",
      },
      {
        title: "SaaS Subscriptions",
        description: "Monthly subscriptions for compliance dashboard and training modules. Per-vessel pricing for fleet compliance. Per-user pricing for training.",
        pricing: "Per vessel / per user",
        tag: "Recurring",
      },
      {
        title: "Data & Analytics",
        description: "Premium market intelligence, pricing benchmarks, and compliance analytics. API access for enterprise integrations.",
        pricing: "Tiered plans",
        tag: "Future",
      },
    ],
    projectedLabel: "Revenue Projection",
    growthStatement: "Path to $10M ARR within 3 years of launch",
  },

  team: {
    heading: "The Team",
    subtitle: "Domain experts in maritime, fintech, and compliance",
    members: [
      {
        name: "Dan Ha",
        role: "CEO & Co-Founder",
        bio: "Serial entrepreneur with deep maritime tech experience. Previously founded MarinaChain, building AI-powered solutions for the shipping industry. Combines technical vision with commercial execution.",
      },
      {
        name: "Jon J",
        role: "COO & Co-Founder",
        bio: "Operations and product leader with experience scaling technology platforms. Drives product development, partnerships, and go-to-market strategy for Verdaxis.",
      },
      {
        name: "Chris Chatterton",
        role: "Managing Director",
        bio: "30+ years in maritime and energy. Former Deputy Secretary-General of the International Bunker Industry Association (IBIA). Deep regulatory expertise and industry network.",
      },
      {
        name: "Gavin McGrath",
        role: "Executive Chair",
        bio: "Seasoned executive and board director. Extensive experience in energy trading and maritime services. Strategic advisor on market development and corporate governance.",
      },
    ],
  },

  financials: {
    heading: "The Ask",
    subtitle: "Raising $500,000 Seed to capture the alternative fuel exchange opportunity",
    roundType: "Seed",
    totalRaise: "$500,000",
    tranches: [
      {
        name: "Tranche 1",
        amount: "$250,000",
        trigger: "Immediate",
        description: "Launch MVP, onboard founding members, first revenue, establish Singapore beachhead",
      },
      {
        name: "Tranche 2",
        amount: "$250,000",
        trigger: "Post-traction milestones",
        description: "Scale user acquisition, expand to Rotterdam hub, launch live bidding, accelerate compliance coverage",
      },
    ],
    allocations: [
      { label: "Engineering & Product", percentage: "45%" },
      { label: "Sales & Marketing", percentage: "25%" },
      { label: "Compliance & Legal", percentage: "15%" },
      { label: "Operations", percentage: "15%" },
    ],
    ctaText: "Let\u2019s build the future of sustainable fuel trading",
  },

  roadmap: {
    heading: "Vision & Roadmap",
    subtitle: "From Singapore beachhead to global standard",
    phases: [
      {
        year: "2026",
        title: "Launch \u2014 Singapore Beachhead",
        items: [
          "Methanol & biofuel trading live",
          "Founding Members Program",
          "Compliance engine (FuelEU, EU ETS)",
          "AI Copilot beta",
          "First revenue milestone",
        ],
      },
      {
        year: "2027",
        title: "Expand \u2014 Multi-Hub",
        items: [
          "Rotterdam hub launch",
          "New fuel types (Ethanol, Bio-LNG)",
          "Live Bidding Exchange",
          "Training module launch",
          "Series A preparation",
        ],
      },
      {
        year: "2028+",
        title: "Scale \u2014 Global Standard",
        items: [
          "Global hub network",
          "Derivatives & futures trading",
          "Full regulatory coverage",
          "\"Bloomberg of Alternative Fuels\"",
        ],
      },
    ],
    visionStatement: "Becoming the Bloomberg of Alternative Fuels \u2014 the definitive platform where the world\u2019s sustainable marine fuel market operates.",
  },

  nav: {
    goToFirst: "Go to first slide",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
  },

  branches: {
    marketSizing: {
      title: "Market Sizing Detail",
      tam: {
        label: "Total Addressable Market",
        value: "$300B",
        source: "IEA, Clarksons Research",
        description: "Global marine bunker fuel market including all vessel types and fuel categories. Growing at 3-4% CAGR driven by fleet expansion and regulatory compliance costs.",
      },
      sam: {
        label: "Serviceable Addressable Market",
        value: "$50B",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "Alternative and low-carbon marine fuels by 2030. Includes methanol, biofuels, bio-LNG, e-fuels, and hydrogen. Fastest growing segment at 25%+ CAGR.",
      },
      som: {
        label: "Serviceable Obtainable Market",
        value: "$5B",
        source: "MPA Singapore, Port of Rotterdam",
        description: "Spot market volume in Singapore and key global bunkering hubs. Our beachhead strategy targets the highest-volume, most digitally-ready markets first.",
      },
    },
    complianceEngine: {
      title: "Compliance Engine Deep Dive",
      frameworks: [
        { name: "FuelEU Maritime", description: "GHG intensity reduction targets for vessels calling at EU ports. Graduated penalties from 2025.", status: "Active" },
        { name: "EU ETS", description: "Emissions trading system extended to maritime. MRV reporting required. Allowance costs increasing.", status: "Active" },
        { name: "RED III", description: "Renewable Energy Directive III defines sustainable fuel criteria. Certification requirements for RFNBO status.", status: "Active" },
        { name: "IMO NZF", description: "Net-Zero Framework targeting 2050 decarbonization. Mid-term measures expected 2027. Fuel standard and carbon levy.", status: "Upcoming" },
        { name: "US 45Z", description: "Clean Fuel Production Credit replacing 45V. CI-based incentives for sustainable fuel producers.", status: "Active" },
        { name: "CORSIA", description: "Carbon Offsetting and Reduction Scheme for International Aviation. Cross-applicable for sustainable fuel certification.", status: "Active" },
      ],
    },
    aiCopilot: {
      title: "AI Copilot \u2014 Gemini-Powered Intelligence",
      capabilities: [
        { name: "Market Queries", description: "\"What's the cheapest bio-methanol available in Singapore this week?\" \u2014 real-time pricing from orderbook" },
        { name: "Compliance Analysis", description: "\"What's my FuelEU Maritime compliance gap for Q3?\" \u2014 calculates deficit and recommends fuel switches" },
        { name: "Route Optimization", description: "\"Optimize fuel plan for Singapore to Rotterdam\" \u2014 considers port fuel availability, CI scores, and cost" },
        { name: "Regulatory Updates", description: "\"What changed in RED III last month?\" \u2014 monitors regulatory developments across frameworks" },
        { name: "Portfolio Analytics", description: "\"Show my fleet's average CII trend\" \u2014 aggregates vessel data for fleet-level insights" },
      ],
    },
    producerMap: {
      title: "Global Producer Map",
      stats: [
        { value: "150+", label: "Production Projects" },
        { value: "40+", label: "Countries" },
        { value: "6", label: "Fuel Types" },
      ],
      regions: [
        "Northern Europe (Scandinavia, Netherlands, Germany)",
        "Mediterranean (Spain, Italy, Greece)",
        "Southeast Asia (Singapore, Malaysia, Indonesia)",
        "East Asia (China, South Korea, Japan)",
        "Middle East (UAE, Saudi Arabia, Oman)",
        "Americas (US Gulf, Brazil, Chile)",
      ],
    },
    businessModel: {
      title: "Business Model Detail",
      streams: [
        { name: "Trading Commission", description: "0.5% fee on each completed fuel trade. Average trade size $50K-$500K. Revenue scales linearly with platform volume.", pricing: "0.5% per transaction" },
        { name: "Fleet Compliance SaaS", description: "Per-vessel monthly subscription for compliance dashboard. Tracks EU ETS, FuelEU, and other frameworks. Automated MRV reporting.", pricing: "$200-500/vessel/month" },
        { name: "Training Platform", description: "Per-user access to alternative fuel training modules. Certification tracking. Regulatory update feeds.", pricing: "$50-100/user/month" },
        { name: "Market Data API", description: "Enterprise API access for pricing data, market analytics, and compliance benchmarks. Tiered based on query volume.", pricing: "$1,000-10,000/month" },
      ],
    },
  },
};
