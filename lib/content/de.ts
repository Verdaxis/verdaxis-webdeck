import type { DeckContent } from "./types";

export const de: DeckContent = {
  slides: {
    vision: { title: "Die vertrauenswürdige Börse", section: "Einführung" },
    toc: { title: "Inhaltsverzeichnis", section: "Einführung" },
    "why-now": { title: "Warum jetzt", section: "Chance" },
    problem: { title: "Das Problem", section: "Chance" },
    solution: { title: "Die Lösung", section: "Lösung" },
    market: { title: "Marktchance", section: "Markt" },
    product: { title: "Die Plattform", section: "Produkt" },
    traction: { title: "Traktion & Nachweis", section: "Traktion" },
    competitive: { title: "Unsere Stärke", section: "Wettbewerb" },
    flywheel: { title: "Ökosystem-Schwungrad", section: "Wachstum" },
    revenue: { title: "Erlösmodell", section: "Geschäftsmodell" },
    team: { title: "Das Team", section: "Team" },
    financials: { title: "Die Finanzierung", section: "Finanzen" },
    demo: { title: "Live-Demo", section: "Produkt" },
    roadmap: { title: "Vision & Roadmap", section: "Roadmap" },
  },

  vision: {
    headline: "Die vertrauenswürdige Börse für kohlenstoffarme Kraftstoffe",
    subtitle: "Compliance-orientierter Marktplatz für verifizierte nachhaltige Schiffskraftstoffe",
    tagline: "Doppelzählungsprävention | IMO- & EU-konform | Physical-First-Logik",
    tickerItems: [
      { fuel: "Bio-Methanol", region: "NW-Europa", price: "$680", change: "+2,3%", ci: "32 gCO₂/MJ" },
      { fuel: "E-Methanol", region: "Global", price: "$1.250", change: "+1,1%", ci: "8 gCO₂/MJ" },
      { fuel: "FAME B100", region: "Singapur", price: "$1.420", change: "-0,5%", ci: "22 gCO₂/MJ" },
      { fuel: "Bio-LNG", region: "Rotterdam", price: "$890", change: "+3,7%", ci: "28 gCO₂/MJ" },
      { fuel: "Grüner Wasserstoff", region: "Naher Osten", price: "$4.200", change: "+0,8%", ci: "4 gCO₂/MJ" },
      { fuel: "HVO", region: "ARA", price: "$1.680", change: "-1,2%", ci: "18 gCO₂/MJ" },
    ],
  },

  toc: {
    heading: "Inhaltsverzeichnis",
    subheading: "Navigieren Sie durch die Verdaxis-Investorenpräsentation",
  },

  whyNow: {
    heading: "Warum jetzt — Ein Wendepunkt",
    subtitle: "Die maritime Industrie steht vor einem beispiellosen regulatorischen und marktbezogenen Wandel",
    drivers: [
      {
        title: "Regulatorische Fristen",
        description: "FuelEU Maritime tritt ab Januar 2025 in Kraft. Das IMO Net-Zero Framework (NZF) verankert die Ziele für 2050. Das EU ETS wurde auf die Schifffahrt ausgeweitet. RED III definiert Kriterien für nachhaltige Kraftstoffe. Die Kosten bei Nichteinhaltung steigen exponentiell.",
        iconKey: "regulation",
      },
      {
        title: "Angebotsexplosion",
        description: "Chinesische Methanolproduktionskapazitäten steigen rapide — über 100 Mio. Tonnen bis 2026. Bio-Methanol-Projekte werden in Europa und Asien skaliert. E-Methanol-Pilotprojekte starten in Skandinavien und im Nahen Osten.",
        iconKey: "supply",
      },
      {
        title: "Schiffsadoption",
        description: "Auftragsbücher zeigen über 200 methanolbetriebene Schiffe in der Pipeline. Große Reedereien (Maersk, CMA CGM) haben sich zu alternativen Kraftstoffen verpflichtet. Der Dual-Fuel-Nachrüstungsmarkt beschleunigt sich.",
        iconKey: "vessels",
      },
      {
        title: "Grüne Korridore",
        description: "Singapur–Rotterdam, Shanghai–Los Angeles — Regierungen etablieren kraftstoffbereite grüne Schifffahrtskorridore. Hafeninfrastrukturinvestitionen erschließen Nachfrage.",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "Inkrafttreten FuelEU Maritime" },
      { value: "200+", label: "Methanolschiffe bestellt" },
      { value: "$50 Mrd.", label: "Alt. Kraftstoffmarkt bis 2030" },
      { value: "100 Mio.+", label: "Tonnen CH₃OH-Kapazität" },
    ],
  },

  problem: {
    heading: "Das Problem",
    subtitle: "Drei kritische Lücken blockieren den Übergang zu nachhaltigen Schiffskraftstoffen",
    cards: [
      {
        title: "Regulatorischer Tsunami",
        description: "Schiffsbetreiber sehen sich gleichzeitig mit FuelEU Maritime, EU ETS, IMO NZF, RED III und regionalen Vorschriften konfrontiert. Es gibt kein einheitliches Tool zur Compliance-Überwachung über alle Rahmenwerke hinweg. Strafen bei Nichteinhaltung können Millionen pro Schiff betragen.",
        iconKey: "regulation",
      },
      {
        title: "Fragmentierter Markt",
        description: "Der Handel mit alternativen Kraftstoffen erfolgt über E-Mails, WhatsApp und Makleranrufe. Keine transparente Preisgestaltung. Keine standardisierte Qualitätsverifizierung. Keine CI-adjustierten Vergleiche. Käufer können verifizierte Verkäufer nicht effizient finden.",
        iconKey: "fragmented",
      },
      {
        title: "Kritische Qualifikationslücke",
        description: "Besatzungen und Betriebsteams fehlt die Ausbildung im Umgang mit alternativen Kraftstoffen, Sicherheitsprotokollen und Compliance-Berichterstattung. Traditionelles Bunkerwissen lässt sich nicht auf Methanol-, Ammoniak- oder Wasserstoffbetrieb übertragen.",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "Das Verdaxis-Ökosystem",
    subtitle: "Drei integrierte Säulen zur Lösung der Energiewende bei alternativen Kraftstoffen",
    pillars: [
      {
        title: "Handelsplattform",
        description: "Compliance-verifizierter Marktplatz, der Kraftstoffproduzenten, Käufer und Händler verbindet. Echtzeit-Orderbuch mit CI-adjustierter Preisgestaltung. Physical-First-Logik zur Vermeidung von Doppelzählungen. Digitale Herkunftszertifikate.",
        iconKey: "trading",
      },
      {
        title: "Compliance-Engine",
        description: "Einheitliches Dashboard zur Verfolgung von EU ETS, FuelEU Maritime, RED III, IMO NZF, 45Z, RenovaBio und CORSIA-Verpflichtungen. Automatisierte Berichterstattung. Strafprognosen. Flottenweite Compliance-Bewertung.",
        iconKey: "compliance",
      },
      {
        title: "Digitale Schulung",
        description: "KI-gestützte Schulungsmodule für Besatzungen und Betriebspersonal im Umgang mit alternativen Kraftstoffen, Sicherheit und Compliance. Zertifizierungsverfolgung. Wissensdatenbank mit aktuellen Regulierungen.",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "Marktchance",
    subtitle: "Eine 300-Milliarden-Dollar-Industrie, reif für die digitale Transformation",
    tam: {
      value: "$300 Mrd.",
      label: "Gesamter adressierbarer Markt",
      description: "Globaler Markt für marine Bunkerkraftstoffe — alle Kraftstoffeinkäufe weltweit für sämtliche Schiffstypen",
    },
    sam: {
      value: "$50 Mrd.",
      label: "Adressierbarer Zielmarkt",
      description: "Alternative und kohlenstoffarme Schiffskraftstoffe bis 2030 — Methanol, Biokraftstoffe, LNG, Wasserstoff",
    },
    som: {
      value: "$5 Mrd.",
      label: "Erreichbarer Zielmarkt",
      description: "Spotmarktvolumen über Singapur und wichtige globale Hubs — unser Brückenkopf",
    },
    branchLabel: "Details zur Marktbemessung",
  },

  product: {
    heading: "Die Plattform — Live in 2026",
    subtitle: "Echte Funktionen, live unter app.verdaxis.exchange",
    features: [
      {
        name: "Marktplatz & Orderbuch",
        description: "Durchsuchen, anbieten und handeln Sie verifizierte alternative Kraftstoffe. Echtzeit-Orderbuch mit Geld-/Briefkursen. CI-adjustierte Preisgestaltung für echten Kostenvergleich.",
        iconKey: "marketplace",
        highlight: "Live-Handel",
      },
      {
        name: "Compliance-Dashboard",
        description: "Verfolgen Sie EU ETS, FuelEU Maritime und IMO-Verpflichtungen in einer Ansicht. Flottenweite Compliance-Bewertung. Automatisierte Strafprognosen.",
        iconKey: "compliance",
        highlight: "6 Rahmenwerke",
        poweredBy: "marinachain",
      },
      {
        name: "Flottenverfolgung",
        description: "Überwachen Sie Schiffspositionen, CII-Ratings und den Compliance-Status. Routenbasierte Kraftstoffoptimierung. Reise-Compliance-Prognosen.",
        iconKey: "fleet",
        poweredBy: "marinachain",
      },
      {
        name: "KI-Copilot",
        description: "KI-gestützte Marktintelligenz. Natürlichsprachliche Abfragen zu Preisen, Compliance und Marktanalysen. Tool-Calling-Architektur für Echtzeitdaten.",
        iconKey: "ai",
        highlight: "KI-gestützt",
      },
      {
        name: "Produzentenkarte",
        description: "Interaktive Karte mit über 150 globalen Produktionsprojekten für alternative Kraftstoffe. Filtern Sie nach Kraftstofftyp, Region, Kapazität und Zertifizierungsstatus.",
        iconKey: "map",
        highlight: "150+ Projekte",
        poweredBy: "gena",
      },
      {
        name: "Energierechner",
        description: "Vergleichen Sie Kraftstoffoptionen mit CI-adjustierter Preisgestaltung. Berücksichtigen Sie CO₂-Kosten, Compliance-Gutschriften und tatsächliche Lebenszyklusemissionen. Treffen Sie datenbasierte Kraftstoffentscheidungen.",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "Compliance im Detail",
      "ai-copilot": "KI-Copilot-Demo",
      "producer-map": "Produzentenkarte",
    },
  },

  traction: {
    heading: "Traktion & Nachweis",
    subtitle: "Plattform live, Compliance validiert, Markt engagiert",
    stats: [
      { value: "Live", label: "Plattform unter app.verdaxis.exchange" },
      { value: "6", label: "Compliance-Rahmenwerke" },
      { value: "150+", label: "Produzentenprojekte kartiert" },
      { value: "Aktiv", label: "Pilotprogramm" },
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
      { title: "Plattform-MVP-Launch", date: "Q1 2026" },
      { title: "Compliance-Engine v1", date: "Q1 2026" },
      { title: "KI-Copilot Beta", date: "Q2 2026" },
      { title: "Erste Umsätze", date: "Q2 2026" },
      { title: "Gründungsmitglieder-Programm", date: "Q2 2026" },
    ],
  },

  competitive: {
    heading: "Warum wir gewinnen",
    subtitle: "Einheitliches Ökosystem vs. Einzellösungen",
    dimensions: [
      "Kraftstoffhandel & Vermittlung",
      "EU ETS-Compliance",
      "FuelEU Maritime-Tracking",
      "Besatzungsschulung",
      "Integrierte Datenanalyse",
    ],
    competitors: [
      {
        name: "Traditionelle Makler",
        scores: {
          "Kraftstoffhandel & Vermittlung": "partial",
          "EU ETS-Compliance": "none",
          "FuelEU Maritime-Tracking": "none",
          "Besatzungsschulung": "none",
          "Integrierte Datenanalyse": "none",
        },
      },
      {
        name: "Compliance-SaaS",
        scores: {
          "Kraftstoffhandel & Vermittlung": "none",
          "EU ETS-Compliance": "full",
          "FuelEU Maritime-Tracking": "partial",
          "Besatzungsschulung": "none",
          "Integrierte Datenanalyse": "partial",
        },
      },
      {
        name: "Bunker-Plattformen",
        scores: {
          "Kraftstoffhandel & Vermittlung": "full",
          "EU ETS-Compliance": "none",
          "FuelEU Maritime-Tracking": "none",
          "Besatzungsschulung": "none",
          "Integrierte Datenanalyse": "none",
        },
      },
    ],
    verdaxisScores: {
      "Kraftstoffhandel & Vermittlung": "full",
      "EU ETS-Compliance": "full",
      "FuelEU Maritime-Tracking": "full",
      "Besatzungsschulung": "full",
      "Integrierte Datenanalyse": "full",
    },
  },

  flywheel: {
    heading: "Ökosystem-Schwungrad",
    subtitle: "Tag-1-Netzwerkvorteil durch MarinaChains Basis von über 400 Schiffen",
    nodes: [
      { label: "MarinaChain-Netzwerk", description: "Über 400 Schiffe bereits auf der Plattform — sofortiger Vertriebskanal" },
      { label: "Gründungsmitglieder", description: "Frühe Nutzer erhalten Vorzugspreise und Mitspracherecht bei Funktionen" },
      { label: "Marktliquidität", description: "Mehr Teilnehmer = engere Spreads = bessere Preise für alle" },
      { label: "Datenintelligenz", description: "Transaktionsdaten treiben Markteinblicke und KI-Fähigkeiten voran" },
      { label: "Mehr Nutzer", description: "Bessere Daten und Liquidität ziehen mehr Produzenten und Käufer an" },
    ],
    centerLabel: "Verdaxis-Ökosystem",
  },

  revenue: {
    heading: "Erlösmodell",
    subtitle: "Mehrere Erlösströme mit klarer Stückökonomie",
    streams: [
      {
        title: "Transaktionsgebühren",
        description: "0,5 % Provision auf jeden über die Plattform abgewickelten Kraftstoffhandel. Skaliert direkt mit dem Handelsvolumen.",
        pricing: "0,5 % pro Handel",
        tag: "Primär",
      },
      {
        title: "SaaS-Abonnements",
        description: "Monatliche Abonnements für das Compliance-Dashboard und Schulungsmodule. Pro-Schiff-Preise für Flotten-Compliance. Pro-Nutzer-Preise für Schulungen.",
        pricing: "Pro Schiff / pro Nutzer",
        tag: "Wiederkehrend",
      },
      {
        title: "Daten & Analysen",
        description: "Premium-Marktintelligenz, Preis-Benchmarks und Compliance-Analysen. API-Zugang für Unternehmensintegrationen.",
        pricing: "Gestaffelte Tarife",
        tag: "Zukünftig",
      },
    ],
    projectedLabel: "Umsatzprognose",
    growthStatement: "Pfad zu $10M ARR innerhalb von 3 Jahren nach Launch",
  },

  team: {
    heading: "Das Team",
    subtitle: "Fachexperten in Schifffahrt, Fintech und Compliance",
    members: [
      {
        name: "Dan Ha",
        role: "CEO & Mitgründer",
        bio: "Serienunternehmer mit umfassender Erfahrung in der maritimen Technologie. Zuvor Gründer von MarinaChain, wo er KI-gestützte Lösungen für die Schifffahrtsindustrie entwickelte. Verbindet technische Vision mit kommerzieller Umsetzung.",
        imageUrl: "/images/team/dan-ha.png",
        company: "marinachain",
      },
      {
        name: "Jon J",
        role: "COO & Mitgründer",
        bio: "Operations- und Produktverantwortlicher mit Erfahrung in der Skalierung von Technologieplattformen. Verantwortet Produktentwicklung, Partnerschaften und Go-to-Market-Strategie bei Verdaxis.",
        imageUrl: "/images/team/jon-j.png",
        company: "marinachain",
      },
      {
        name: "Chris Chatterton",
        role: "Geschäftsführer",
        bio: "Über 30 Jahre Erfahrung in der Schifffahrt und Energiewirtschaft. Ehemaliger stellvertretender Generalsekretär der International Bunker Industry Association (IBIA). Tiefgreifende regulatorische Expertise und Branchennetzwerk.",
        imageUrl: "/images/team/chris-chatterton.jpg",
        company: "greenm",
      },
      {
        name: "Gavin McGrath",
        role: "Vorstandsvorsitzender",
        bio: "Erfahrene Führungskraft und Vorstandsmitglied. Umfangreiche Erfahrung im Energiehandel und in maritimen Dienstleistungen. Strategischer Berater für Marktentwicklung und Corporate Governance.",
        imageUrl: "/images/team/gavin-mcgrath.jpg",
        company: "greenm",
      },
    ],
  },

  financials: {
    heading: "Die Finanzierung",
    subtitle: "Seed-Runde über $500.000 zur Erschließung der Marktchance im alternativen Kraftstoffhandel",
    roundType: "Seed",
    totalRaise: "$500.000",
    tranches: [
      {
        name: "Tranche 1",
        amount: "$250.000",
        trigger: "Sofort",
        description: "MVP-Launch, Aufnahme von Gründungsmitgliedern, erste Umsätze, Aufbau des Singapur-Brückenkopfs",
      },
      {
        name: "Tranche 2",
        amount: "$250.000",
        trigger: "Nach Erreichen von Traktions-Meilensteinen",
        description: "Skalierung der Nutzerakquise, Expansion zum Rotterdam-Hub, Launch des Live-Bietens, Beschleunigung der Compliance-Abdeckung",
      },
    ],
    allocations: [
      { label: "Engineering & Produkt", percentage: "45%" },
      { label: "Vertrieb & Marketing", percentage: "25%" },
      { label: "Compliance & Recht", percentage: "15%" },
      { label: "Betrieb", percentage: "15%" },
    ],
    ctaText: "Lassen Sie uns gemeinsam die Zukunft des nachhaltigen Kraftstoffhandels gestalten",
  },

  roadmap: {
    heading: "Vision & Roadmap",
    subtitle: "Vom Singapur-Brückenkopf zum globalen Standard",
    phases: [
      {
        year: "2026",
        title: "Launch — Brückenkopf Singapur",
        items: [
          "Methanol- und Biokraftstoffhandel live",
          "Gründungsmitglieder-Programm",
          "Compliance-Engine (FuelEU, EU ETS)",
          "KI-Copilot Beta",
          "Erster Umsatz-Meilenstein",
        ],
      },
      {
        year: "2027",
        title: "Expansion — Multi-Hub",
        items: [
          "Rotterdam-Hub-Launch",
          "Neue Kraftstofftypen (Ethanol, Bio-LNG)",
          "Live-Bietungs-Börse",
          "Launch des Schulungsmoduls",
          "Vorbereitung Series A",
        ],
      },
      {
        year: "2028+",
        title: "Skalierung — Globaler Standard",
        items: [
          "Globales Hub-Netzwerk",
          "Derivate- und Terminhandel",
          "Vollständige regulatorische Abdeckung",
          "\"Bloomberg der alternativen Kraftstoffe\"",
        ],
      },
    ],
    visionStatement: "Wir werden das Bloomberg der alternativen Kraftstoffe — die maßgebliche Plattform, auf der der weltweite Markt für nachhaltige Schiffskraftstoffe stattfindet.",
  },

  demo: {
    heading: "Verdaxis in Aktion erleben",
    subtitle: "Verfolgen Sie einen realen Transaktionsablauf — von der Suche bis zur Abwicklung, beide Seiten des Marktplatzes",
    buyer: {
      label: "Käufer",
      sublabel: "Beschaffung",
      steps: ["Suchen", "Durchsuchen", "Auswählen", "Bestätigt"],
    },
    seller: {
      label: "Verkäufer",
      sublabel: "Angebot",
      steps: ["Einstellen", "Veröffentlicht", "Zugeordnet", "Abgeschlossen"],
    },
    ui: {
      fuelType: "Kraftstofftyp",
      port: "Hafen",
      delivery: "Lieferung",
      quantity: "Menge",
      price: "Preis",
      ciScore: "CI-Wert",
      searchOffers: "Angebote suchen",
      offersFound: "Angebote gefunden",
      complianceCheck: "Compliance-Prüfung",
      certified: "Zertifiziert",
      total: "Gesamt",
      placeOrder: "Bestellung aufgeben",
      orderConfirmed: "Bestellung bestätigt",
      certificates: "Zertifikate",
      certificateOfOrigin: "Herkunftszertifikat",
      fueleuCompliance: "FuelEU-Konformität",
      euEtsAllowances: "EU ETS-Zertifikate",
      paymentSecured: "Zahlung über Treuhandkonto gesichert",
      createListing: "Neues Angebot erstellen",
      publishListing: "Angebot veröffentlichen",
      listingPublished: "Angebot veröffentlicht",
      liveStats: "Live-Statistiken",
      views: "Aufrufe",
      watchlist: "Merkliste",
      inquiries: "Anfragen",
      status: "Status",
      active: "Aktiv",
      newBuyerInquiry: "Neue Käuferanfrage!",
      buyerProfile: "Käuferprofil",
      verifiedBuyer: "Verifizierter Käufer",
      fleet: "Schiffsflotte",
      wants: "Nachfrage",
      yourPrice: "Ihr Preis",
      buyerBid: "Käufergebot",
      acceptDeal: "Geschäft annehmen",
      transactionComplete: "Transaktion abgeschlossen",
      settlement: "Abwicklung",
      paymentLabel: "Zahlung",
      secured: "Gesichert",
      certificatesLabel: "Zertifikate",
      issued: "Ausgestellt",
      complianceLabel: "Konformität",
      verified: "Verifiziert",
      revenue: "Umsatz",
    },
  },

  nav: {
    goToFirst: "Zur ersten Folie",
    previousSlide: "Vorherige Folie",
    nextSlide: "Nächste Folie",
  },

  branches: {
    marketSizing: {
      title: "Details zur Marktbemessung",
      tam: {
        label: "Gesamter adressierbarer Markt",
        value: "$300 Mrd.",
        source: "IEA, Clarksons Research",
        description: "Globaler Markt für marine Bunkerkraftstoffe einschließlich aller Schiffstypen und Kraftstoffkategorien. Wächst mit 3–4 % CAGR, getrieben durch Flottenexpansion und regulatorische Compliance-Kosten.",
      },
      sam: {
        label: "Adressierbarer Zielmarkt",
        value: "$50 Mrd.",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "Alternative und kohlenstoffarme Schiffskraftstoffe bis 2030. Umfasst Methanol, Biokraftstoffe, Bio-LNG, E-Fuels und Wasserstoff. Am schnellsten wachsendes Segment mit über 25 % CAGR.",
      },
      som: {
        label: "Erreichbarer Zielmarkt",
        value: "$5 Mrd.",
        source: "MPA Singapore, Port of Rotterdam",
        description: "Spotmarktvolumen in Singapur und wichtigen globalen Bunkerhäfen. Unsere Brückenkopf-Strategie zielt zuerst auf die volumenstärksten und digital fortschrittlichsten Märkte ab.",
      },
    },
    complianceEngine: {
      title: "Compliance-Engine im Detail",
      frameworks: [
        { name: "FuelEU Maritime", description: "Ziele zur Reduktion der Treibhausgasintensität für Schiffe, die EU-Häfen anlaufen. Gestaffelte Strafen ab 2025.", status: "Aktiv" },
        { name: "EU ETS", description: "Emissionshandelssystem auf die Schifffahrt ausgeweitet. MRV-Berichterstattung erforderlich. Zertifikatskosten steigend.", status: "Aktiv" },
        { name: "RED III", description: "Erneuerbare-Energien-Richtlinie III definiert Kriterien für nachhaltige Kraftstoffe. Zertifizierungsanforderungen für den RFNBO-Status.", status: "Aktiv" },
        { name: "IMO NZF", description: "Net-Zero Framework mit Dekarbonisierungsziel 2050. Mittelfristige Maßnahmen für 2027 erwartet. Kraftstoffstandard und CO₂-Abgabe.", status: "Bevorstehend" },
        { name: "US 45Z", description: "Clean Fuel Production Credit als Nachfolger von 45V. CI-basierte Anreize für Produzenten nachhaltiger Kraftstoffe.", status: "Aktiv" },
        { name: "CORSIA", description: "Programm zur CO₂-Kompensation und -Reduktion in der internationalen Luftfahrt. Übergreifend anwendbar für die Zertifizierung nachhaltiger Kraftstoffe.", status: "Aktiv" },
      ],
    },
    aiCopilot: {
      title: "KI-Copilot — Intelligenter Assistent",
      capabilities: [
        { name: "Marktabfragen", description: "\"Was ist das günstigste Bio-Methanol in Singapur diese Woche?\" — Echtzeitpreise aus dem Orderbuch" },
        { name: "Compliance-Analyse", description: "\"Wie groß ist meine FuelEU Maritime-Compliance-Lücke für Q3?\" — Berechnet das Defizit und empfiehlt Kraftstoffwechsel" },
        { name: "Routenoptimierung", description: "\"Optimiere den Kraftstoffplan für Singapur nach Rotterdam\" — Berücksichtigt Hafenverfügbarkeit, CI-Werte und Kosten" },
        { name: "Regulatorische Updates", description: "\"Was hat sich letzten Monat bei RED III geändert?\" — Überwacht regulatorische Entwicklungen über alle Rahmenwerke" },
        { name: "Portfolio-Analysen", description: "\"Zeige den durchschnittlichen CII-Trend meiner Flotte\" — Aggregiert Schiffsdaten für flottenweite Einblicke" },
      ],
    },
    producerMap: {
      title: "Globale Produzentenkarte",
      stats: [
        { value: "150+", label: "Produktionsprojekte" },
        { value: "40+", label: "Länder" },
        { value: "6", label: "Kraftstofftypen" },
      ],
      regions: [
        "Nordeuropa (Skandinavien, Niederlande, Deutschland)",
        "Mittelmeerraum (Spanien, Italien, Griechenland)",
        "Südostasien (Singapur, Malaysia, Indonesien)",
        "Ostasien (China, Südkorea, Japan)",
        "Naher Osten (VAE, Saudi-Arabien, Oman)",
        "Amerika (US-Golfküste, Brasilien, Chile)",
      ],
    },
    businessModel: {
      title: "Geschäftsmodell im Detail",
      streams: [
        { name: "Handelsprovision", description: "0,5 % Gebühr auf jeden abgeschlossenen Kraftstoffhandel. Durchschnittliche Handelsgröße $50K–$500K. Umsatz skaliert linear mit dem Plattformvolumen.", pricing: "0,5 % pro Transaktion" },
        { name: "Flotten-Compliance-SaaS", description: "Monatliches Pro-Schiff-Abonnement für das Compliance-Dashboard. Verfolgt EU ETS, FuelEU und andere Rahmenwerke. Automatisierte MRV-Berichterstattung.", pricing: "$200–500/Schiff/Monat" },
        { name: "Schulungsplattform", description: "Pro-Nutzer-Zugang zu Schulungsmodulen für alternative Kraftstoffe. Zertifizierungsverfolgung. Regulatorische Update-Feeds.", pricing: "$50–100/Nutzer/Monat" },
        { name: "Marktdaten-API", description: "Enterprise-API-Zugang für Preisdaten, Marktanalysen und Compliance-Benchmarks. Gestaffelt nach Abfragevolumen.", pricing: "$1.000–10.000/Monat" },
      ],
    },
  },
};
