import type { DeckContent } from "./types";

export const nl: DeckContent = {
  slides: {
    vision: { title: "De Vertrouwde Beurs", section: "Introductie" },
    toc: { title: "Inhoud", section: "Introductie" },
    "why-now": { title: "Waarom Nu", section: "Kans" },
    problem: { title: "Het Probleem", section: "Kans" },
    solution: { title: "De Oplossing", section: "Oplossing" },
    market: { title: "Marktkans", section: "Markt" },
    product: { title: "Het Platform", section: "Product" },
    traction: { title: "Tractie & Bewijs", section: "Tractie" },
    competitive: { title: "Waarom Wij Winnen", section: "Concurrentie" },
    flywheel: { title: "Ecosysteem-vliegwiel", section: "Groei" },
    revenue: { title: "Verdienmodel", section: "Bedrijfsmodel" },
    team: { title: "Het Team", section: "Team" },
    financials: { title: "De Vraag", section: "Financieel" },
    roadmap: { title: "Visie & Routekaart", section: "Routekaart" },
  },

  vision: {
    headline: "De vertrouwde beurs voor koolstofarme brandstoffen",
    subtitle: "Compliance-gerichte marktplaats voor geverifieerde duurzame scheepvaartbrandstoffen",
    tagline: "Dubbeltelling-preventie | IMO & EU afgestemd | Physical-First Logica",
    tickerItems: [
      { fuel: "Bio-Methanol", region: "NW Europa", price: "$680", change: "+2,3%", ci: "32 gCO\u2082/MJ" },
      { fuel: "E-Methanol", region: "Wereldwijd", price: "$1.250", change: "+1,1%", ci: "8 gCO\u2082/MJ" },
      { fuel: "FAME B100", region: "Singapore", price: "$1.420", change: "-0,5%", ci: "22 gCO\u2082/MJ" },
      { fuel: "Bio-LNG", region: "Rotterdam", price: "$890", change: "+3,7%", ci: "28 gCO\u2082/MJ" },
      { fuel: "Groene Waterstof", region: "Midden-Oosten", price: "$4.200", change: "+0,8%", ci: "4 gCO\u2082/MJ" },
      { fuel: "HVO", region: "ARA", price: "$1.680", change: "-1,2%", ci: "18 gCO\u2082/MJ" },
    ],
  },

  toc: {
    heading: "Inhoud",
    subheading: "Navigeer door de Verdaxis investeerderspresentatie",
  },

  whyNow: {
    heading: "Waarom Nu \u2014 Een Kantelpunt",
    subtitle: "De maritieme sector staat voor een ongekende regelgevende en markttransformatie",
    drivers: [
      {
        title: "Regelgevende Deadlines",
        description: "FuelEU Maritime van kracht vanaf januari 2025. IMO Net-Zero Framework (NZF) legt 2050-doelstellingen vast. EU ETS uitgebreid naar scheepvaart. RED III definieert criteria voor duurzame brandstoffen. Kosten voor niet-naleving stijgen exponentieel.",
        iconKey: "regulation",
      },
      {
        title: "Aanbodexplosie",
        description: "Chinese methanolproductiecapaciteit stijgt sterk \u2014 100M+ ton tegen 2026. Bio-methanolprojecten schalen op in Europa en Azi\u00eb. E-methanolpilots starten in Scandinavi\u00eb en het Midden-Oosten.",
        iconKey: "supply",
      },
      {
        title: "Scheepsadoptie",
        description: "Orderboeken tonen 200+ methanolgedreven schepen in de pijplijn. Grote rederijen (Maersk, CMA CGM) hebben zich gecommitteerd aan alternatieve brandstoffen. De markt voor dual-fuel retrofits versnelt.",
        iconKey: "vessels",
      },
      {
        title: "Groene Corridors",
        description: "Singapore\u2013Rotterdam, Shanghai\u2013Los Angeles \u2014 overheden stellen brandstofklare groene scheepvaartcorridors vast. Haveninvesteringen in infrastructuur ontsluiten de vraag.",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "FuelEU Maritime Handhaving" },
      { value: "200+", label: "Methanolschepen in Bestelling" },
      { value: "$50B", label: "Alt. Brandstofmarkt tegen 2030" },
      { value: "100M+", label: "Ton CH\u2083OH Capaciteit" },
    ],
  },

  problem: {
    heading: "Het Probleem",
    subtitle: "Drie kritieke hiaten blokkeren de overgang naar duurzame scheepvaartbrandstoffen",
    cards: [
      {
        title: "Regelgevende Tsunami",
        description: "Scheepsexploitanten worden gelijktijdig geconfronteerd met FuelEU Maritime, EU ETS, IMO NZF, RED III en regionale mandaten. Geen uniform instrument om naleving over regelgevingen heen te volgen. Boetes voor niet-naleving kunnen oplopen tot miljoenen per schip.",
        iconKey: "regulation",
      },
      {
        title: "Gefragmenteerde Markt",
        description: "Handel in alternatieve brandstoffen verloopt via e-mails, WhatsApp en makelaars. Geen transparante prijsvorming. Geen gestandaardiseerde kwaliteitsverificatie. Geen voor koolstofintensiteit gecorrigeerde vergelijkingen. Kopers kunnen geverifieerde verkopers niet effici\u00ebnt vinden.",
        iconKey: "fragmented",
      },
      {
        title: "Kritiek Kennistekort",
        description: "Bemanning en operationele teams missen training in de omgang met alternatieve brandstoffen, veiligheidsprotocollen en compliancerapportage. Traditionele bunkerkennis is niet overdraagbaar naar methanol-, ammoniak- of waterstofoperaties.",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "Het Verdaxis Ecosysteem",
    subtitle: "Drie ge\u00efntegreerde pijlers die de transitie naar alternatieve brandstoffen oplossen",
    pillars: [
      {
        title: "Handelsplatform",
        description: "Compliance-geverifieerde marktplaats die brandstofproducenten, kopers en handelaren verbindt. Realtime orderboek met CI-gecorrigeerde prijsstelling. Physical-first logica die dubbeltelling voorkomt. Digitale herkomstcertificaten.",
        iconKey: "trading",
      },
      {
        title: "Compliance Engine",
        description: "Uniform dashboard dat EU ETS, FuelEU Maritime, RED III, IMO NZF, 45Z, RenovaBio en CORSIA-verplichtingen volgt. Geautomatiseerde rapportage. Boetevoorspelling. Compliance-score op vlootniveau.",
        iconKey: "compliance",
      },
      {
        title: "Digitale Training",
        description: "AI-aangedreven trainingsmodules voor bemanning en operaties op het gebied van alternatieve brandstoffen, veiligheid en compliance. Certificaatbeheer. Kennisbank bijgewerkt met de nieuwste regelgeving.",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "Marktkans",
    subtitle: "Een industrie van $300 miljard, rijp voor digitale transformatie",
    tam: {
      value: "$300B",
      label: "Totale Adresseerbare Markt",
      description: "Wereldwijde markt voor scheepvaartbrandstof \u2014 alle brandstofaankopen voor alle scheepstypen wereldwijd",
    },
    sam: {
      value: "$50B",
      label: "Bereikbare Adresseerbare Markt",
      description: "Alternatieve & koolstofarme scheepvaartbrandstoffen tegen 2030 \u2014 methanol, biobrandstoffen, LNG, waterstof",
    },
    som: {
      value: "$5B",
      label: "Bereikbare Haalbare Markt",
      description: "Spotmarktvolume via Singapore + belangrijke wereldwijde hubs \u2014 ons bruggenhoofd",
    },
    branchLabel: "Marktomvang Detail",
  },

  product: {
    heading: "Het Platform \u2014 Live in 2026",
    subtitle: "Echte functionaliteit, live op app.verdaxis.exchange",
    features: [
      {
        name: "Marktplaats & Orderboek",
        description: "Bekijk, publiceer en verhandel geverifieerde alternatieve brandstoffen. Realtime orderboek met bied/laat. CI-gecorrigeerde prijsstelling voor eerlijke kostenvergelijking.",
        iconKey: "marketplace",
        highlight: "Live Handel",
      },
      {
        name: "Compliance Dashboard",
        description: "Volg EU ETS, FuelEU Maritime en IMO-verplichtingen in \u00e9\u00e9n overzicht. Compliance-score op vlootniveau. Geautomatiseerde boetevoorspelling.",
        iconKey: "compliance",
        highlight: "6 Regelgevingen",
        poweredBy: "marinachain",
      },
      {
        name: "Vlootmonitoring",
        description: "Monitor scheepsposities, CII-ratings en compliancestatus. Routegebaseerde brandstofoptimalisatie. Compliance-voorspelling per reis.",
        iconKey: "fleet",
        poweredBy: "marinachain",
      },
      {
        name: "AI Copilot",
        description: "AI-aangedreven marktintelligentie. Zoekopdrachten in natuurlijke taal voor prijzen, compliance en marktanalyse. Tool-calling architectuur voor realtime data.",
        iconKey: "ai",
        highlight: "AI-Aangedreven",
      },
      {
        name: "Producentenkaart",
        description: "Interactieve kaart van 150+ wereldwijde productieprojecten voor alternatieve brandstoffen. Filter op brandstoftype, regio, capaciteit en certificeringsstatus.",
        iconKey: "map",
        highlight: "150+ Projecten",
        poweredBy: "gena",
      },
      {
        name: "Energiecalculator",
        description: "Vergelijk brandstofopties met CI-gecorrigeerde prijsstelling. Inclusief koolstofkosten, compliance-credits en werkelijke levenscyclusemissies. Neem datagestuurde brandstofbeslissingen.",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "Compliance Verdieping",
      "ai-copilot": "AI Copilot Demo",
      "producer-map": "Producentenkaart",
    },
  },

  traction: {
    heading: "Tractie & Bewijs",
    subtitle: "Platform live, compliance gevalideerd, markt betrokken",
    stats: [
      { value: "Live", label: "Platform op app.verdaxis.exchange" },
      { value: "6", label: "Compliance-regelgevingen" },
      { value: "150+", label: "Producentenprojecten in Kaart" },
      { value: "Actief", label: "Pilotprogramma" },
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
      { title: "Platform MVP Lancering", date: "Q1 2026" },
      { title: "Compliance Engine v1", date: "Q1 2026" },
      { title: "AI Copilot B\u00e8ta", date: "Q2 2026" },
      { title: "Eerste Omzet", date: "Q2 2026" },
      { title: "Oprichtersleden-programma", date: "Q2 2026" },
    ],
  },

  competitive: {
    heading: "Waarom Wij Winnen",
    subtitle: "Ge\u00efntegreerd ecosysteem versus puntoplossingen",
    dimensions: [
      "Brandstofhandel & Matching",
      "EU ETS Compliance",
      "FuelEU Maritime Tracking",
      "Bemanningstraining",
      "Ge\u00efntegreerde Data-analyse",
    ],
    competitors: [
      {
        name: "Traditionele Makelaars",
        scores: {
          "Brandstofhandel & Matching": "partial",
          "EU ETS Compliance": "none",
          "FuelEU Maritime Tracking": "none",
          "Bemanningstraining": "none",
          "Ge\u00efntegreerde Data-analyse": "none",
        },
      },
      {
        name: "Compliance SaaS",
        scores: {
          "Brandstofhandel & Matching": "none",
          "EU ETS Compliance": "full",
          "FuelEU Maritime Tracking": "partial",
          "Bemanningstraining": "none",
          "Ge\u00efntegreerde Data-analyse": "partial",
        },
      },
      {
        name: "Bunkerplatformen",
        scores: {
          "Brandstofhandel & Matching": "full",
          "EU ETS Compliance": "none",
          "FuelEU Maritime Tracking": "none",
          "Bemanningstraining": "none",
          "Ge\u00efntegreerde Data-analyse": "none",
        },
      },
    ],
    verdaxisScores: {
      "Brandstofhandel & Matching": "full",
      "EU ETS Compliance": "full",
      "FuelEU Maritime Tracking": "full",
      "Bemanningstraining": "full",
      "Ge\u00efntegreerde Data-analyse": "full",
    },
  },

  flywheel: {
    heading: "Ecosysteem-vliegwiel",
    subtitle: "Dag 1 netwerkvoordeel via het netwerk van 400+ schepen van MarinaChain",
    nodes: [
      { label: "MarinaChain Netwerk", description: "400+ schepen reeds op het platform \u2014 direct distributiekanaal" },
      { label: "Oprichtersleden", description: "Vroege gebruikers krijgen voordeelprijzen en invloed op functionaliteit" },
      { label: "Marktliquiditeit", description: "Meer deelnemers = kleinere spreads = betere prijzen voor iedereen" },
      { label: "Data-intelligentie", description: "Transactiedata voedt marktinzichten en AI-mogelijkheden" },
      { label: "Meer Gebruikers", description: "Betere data en liquiditeit trekken meer producenten en kopers aan" },
    ],
    centerLabel: "Verdaxis Ecosysteem",
  },

  revenue: {
    heading: "Verdienmodel",
    subtitle: "Meerdere inkomstenstromen met duidelijke unit economics",
    streams: [
      {
        title: "Transactiekosten",
        description: "0,5% commissie op elke brandstoftransactie via het platform. Schaalt direct mee met handelsvolume.",
        pricing: "0,5% per transactie",
        tag: "Primair",
      },
      {
        title: "SaaS-abonnementen",
        description: "Maandelijkse abonnementen voor het compliance-dashboard en trainingsmodules. Prijs per schip voor vlootcompliance. Prijs per gebruiker voor training.",
        pricing: "Per schip / per gebruiker",
        tag: "Terugkerend",
      },
      {
        title: "Data & Analyse",
        description: "Premium marktintelligentie, prijsbenchmarks en compliance-analyses. API-toegang voor enterprise-integraties.",
        pricing: "Gestaffelde plannen",
        tag: "Toekomstig",
      },
    ],
    projectedLabel: "Omzetprognose",
    growthStatement: "Pad naar $10M ARR binnen 3 jaar na lancering",
  },

  team: {
    heading: "Het Team",
    subtitle: "Domeinexperts in maritieme sector, fintech en compliance",
    members: [
      {
        name: "Dan Ha",
        role: "CEO & Medeoprichter",
        bio: "Seri\u00eble ondernemer met diepgaande ervaring in maritieme technologie. Eerder oprichter van MarinaChain, waar hij AI-gedreven oplossingen voor de scheepvaartindustrie ontwikkelde. Combineert technische visie met commerci\u00eble executie.",
        imageUrl: "/images/team/dan-ha.png",
        company: "marinachain",
      },
      {
        name: "Jon J",
        role: "COO & Medeoprichter",
        bio: "Operations- en productleider met ervaring in het opschalen van technologieplatformen. Stuurt productontwikkeling, partnerschappen en go-to-marketstrategie aan voor Verdaxis.",
        imageUrl: "/images/team/jon-j.png",
        company: "marinachain",
      },
      {
        name: "Chris Chatterton",
        role: "Managing Director",
        bio: "30+ jaar ervaring in maritieme sector en energie. Voormalig plaatsvervangend secretaris-generaal van de International Bunker Industry Association (IBIA). Diepgaande regelgevende expertise en uitgebreid industrienetwerk.",
        imageUrl: "/images/team/chris-chatterton.jpg",
        company: "greenm",
      },
      {
        name: "Gavin McGrath",
        role: "Voorzitter Raad van Bestuur",
        bio: "Ervaren bestuurder en commissaris. Uitgebreide ervaring in energiehandel en maritieme dienstverlening. Strategisch adviseur voor marktontwikkeling en corporate governance.",
        imageUrl: "/images/team/gavin-mcgrath.jpg",
        company: "greenm",
      },
    ],
  },

  financials: {
    heading: "De Vraag",
    subtitle: "Ophalen van $500.000 Seed om de kans in de alternatieve brandstofhandel te grijpen",
    roundType: "Seed",
    totalRaise: "$500.000",
    tranches: [
      {
        name: "Tranche 1",
        amount: "$250.000",
        trigger: "Direct",
        description: "Lancering MVP, onboarding oprichtersleden, eerste omzet, vestiging Singapore als bruggenhoofd",
      },
      {
        name: "Tranche 2",
        amount: "$250.000",
        trigger: "Na tractie-mijlpalen",
        description: "Opschalen gebruikerswerving, uitbreiding naar Rotterdam-hub, lancering live biedingen, versnelling compliance-dekking",
      },
    ],
    allocations: [
      { label: "Engineering & Product", percentage: "45%" },
      { label: "Sales & Marketing", percentage: "25%" },
      { label: "Compliance & Juridisch", percentage: "15%" },
      { label: "Operaties", percentage: "15%" },
    ],
    ctaText: "Laten we samen de toekomst van duurzame brandstofhandel bouwen",
  },

  roadmap: {
    heading: "Visie & Routekaart",
    subtitle: "Van bruggenhoofd Singapore naar wereldwijde standaard",
    phases: [
      {
        year: "2026",
        title: "Lancering \u2014 Bruggenhoofd Singapore",
        items: [
          "Methanol- & biobrandstofhandel live",
          "Oprichtersleden-programma",
          "Compliance engine (FuelEU, EU ETS)",
          "AI Copilot b\u00e8ta",
          "Eerste omzetmijlpaal",
        ],
      },
      {
        year: "2027",
        title: "Uitbreiden \u2014 Multi-Hub",
        items: [
          "Lancering Rotterdam-hub",
          "Nieuwe brandstoftypen (Ethanol, Bio-LNG)",
          "Live Biedingen Exchange",
          "Lancering trainingsmodule",
          "Voorbereiding Series A",
        ],
      },
      {
        year: "2028+",
        title: "Opschalen \u2014 Wereldwijde Standaard",
        items: [
          "Wereldwijd hubnetwerk",
          "Derivaten- & futureshandel",
          "Volledige regelgevende dekking",
          "\"Bloomberg van Alternatieve Brandstoffen\"",
        ],
      },
    ],
    visionStatement: "De Bloomberg van Alternatieve Brandstoffen worden \u2014 het definitieve platform waarop de wereldwijde markt voor duurzame scheepvaartbrandstoffen opereert.",
  },

  nav: {
    goToFirst: "Ga naar eerste dia",
    previousSlide: "Vorige dia",
    nextSlide: "Volgende dia",
  },

  branches: {
    marketSizing: {
      title: "Marktomvang Detail",
      tam: {
        label: "Totale Adresseerbare Markt",
        value: "$300B",
        source: "IEA, Clarksons Research",
        description: "Wereldwijde markt voor scheepvaartbrandstof inclusief alle scheepstypen en brandstofcategorie\u00ebn. Groeit met 3-4% CAGR gedreven door vlootuitbreiding en kosten voor regelgevende naleving.",
      },
      sam: {
        label: "Bereikbare Adresseerbare Markt",
        value: "$50B",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "Alternatieve en koolstofarme scheepvaartbrandstoffen tegen 2030. Omvat methanol, biobrandstoffen, bio-LNG, e-brandstoffen en waterstof. Snelst groeiend segment met 25%+ CAGR.",
      },
      som: {
        label: "Bereikbare Haalbare Markt",
        value: "$5B",
        source: "MPA Singapore, Port of Rotterdam",
        description: "Spotmarktvolume in Singapore en belangrijke wereldwijde bunkerhubs. Onze bruggenhoofdstrategie richt zich eerst op de markten met het hoogste volume en de meeste digitale gereedheid.",
      },
    },
    complianceEngine: {
      title: "Compliance Engine Verdieping",
      frameworks: [
        { name: "FuelEU Maritime", description: "Reductiedoelstellingen voor broeikasgasintensiteit voor schepen die EU-havens aandoen. Geleidelijk oplopende boetes vanaf 2025.", status: "Actief" },
        { name: "EU ETS", description: "Emissiehandelssysteem uitgebreid naar scheepvaart. MRV-rapportage vereist. Kosten voor emissierechten stijgen.", status: "Actief" },
        { name: "RED III", description: "Richtlijn Hernieuwbare Energie III definieert criteria voor duurzame brandstoffen. Certificeringsvereisten voor RFNBO-status.", status: "Actief" },
        { name: "IMO NZF", description: "Net-Zero Framework gericht op decarbonisatie in 2050. Tussentijdse maatregelen verwacht in 2027. Brandstofstandaard en koolstofheffing.", status: "Aankomend" },
        { name: "US 45Z", description: "Clean Fuel Production Credit ter vervanging van 45V. CI-gebaseerde stimulansen voor producenten van duurzame brandstoffen.", status: "Actief" },
        { name: "CORSIA", description: "Carbon Offsetting and Reduction Scheme for International Aviation. Toepasbaar voor certificering van duurzame brandstoffen.", status: "Actief" },
      ],
    },
    aiCopilot: {
      title: "AI Copilot \u2014 Intelligente Assistent",
      capabilities: [
        { name: "Marktvragen", description: "\"Wat is de goedkoopste bio-methanol beschikbaar in Singapore deze week?\" \u2014 realtime prijzen uit het orderboek" },
        { name: "Compliance-analyse", description: "\"Wat is mijn FuelEU Maritime compliance-tekort voor Q3?\" \u2014 berekent het tekort en adviseert brandstofwissels" },
        { name: "Route-optimalisatie", description: "\"Optimaliseer brandstofplan voor Singapore naar Rotterdam\" \u2014 houdt rekening met beschikbaarheid in havens, CI-scores en kosten" },
        { name: "Regelgevende Updates", description: "\"Wat is er afgelopen maand veranderd in RED III?\" \u2014 monitort regelgevende ontwikkelingen over alle frameworks" },
        { name: "Portefeuille-analyse", description: "\"Toon de gemiddelde CII-trend van mijn vloot\" \u2014 aggregeert scheepsdata voor inzichten op vlootniveau" },
      ],
    },
    producerMap: {
      title: "Wereldwijde Producentenkaart",
      stats: [
        { value: "150+", label: "Productieprojecten" },
        { value: "40+", label: "Landen" },
        { value: "6", label: "Brandstoftypen" },
      ],
      regions: [
        "Noord-Europa (Scandinavi\u00eb, Nederland, Duitsland)",
        "Middellandse Zee (Spanje, Itali\u00eb, Griekenland)",
        "Zuidoost-Azi\u00eb (Singapore, Maleisi\u00eb, Indonesi\u00eb)",
        "Oost-Azi\u00eb (China, Zuid-Korea, Japan)",
        "Midden-Oosten (VAE, Saudi-Arabi\u00eb, Oman)",
        "Amerika (US Gulf, Brazili\u00eb, Chili)",
      ],
    },
    businessModel: {
      title: "Bedrijfsmodel Detail",
      streams: [
        { name: "Handelscommissie", description: "0,5% vergoeding per voltooide brandstoftransactie. Gemiddelde transactieomvang $50K-$500K. Omzet schaalt lineair met platformvolume.", pricing: "0,5% per transactie" },
        { name: "Vloot Compliance SaaS", description: "Maandelijks abonnement per schip voor het compliance-dashboard. Volgt EU ETS, FuelEU en andere regelgevingen. Geautomatiseerde MRV-rapportage.", pricing: "$200-500/schip/maand" },
        { name: "Trainingsplatform", description: "Toegang per gebruiker tot trainingsmodules voor alternatieve brandstoffen. Certificaatbeheer. Feeds met regelgevende updates.", pricing: "$50-100/gebruiker/maand" },
        { name: "Marktdata API", description: "Enterprise API-toegang voor prijsdata, marktanalyses en compliance-benchmarks. Gestaffeld op basis van queryvolume.", pricing: "$1.000-10.000/maand" },
      ],
    },
  },
};
