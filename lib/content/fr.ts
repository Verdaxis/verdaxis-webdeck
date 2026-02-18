import type { DeckContent } from "./types";

export const fr: DeckContent = {
  slides: {
    vision: { title: "La Place de Confiance", section: "Introduction" },
    toc: { title: "Sommaire", section: "Introduction" },
    "why-now": { title: "Pourquoi Maintenant", section: "Opportunit\u00e9" },
    problem: { title: "Le Probl\u00e8me", section: "Opportunit\u00e9" },
    solution: { title: "La Solution", section: "Solution" },
    market: { title: "Opportunit\u00e9 de March\u00e9", section: "March\u00e9" },
    product: { title: "La Plateforme", section: "Produit" },
    traction: { title: "Traction & Preuves", section: "Traction" },
    competitive: { title: "Nos Avantages", section: "Concurrence" },
    flywheel: { title: "Volant d\u2019Inertie", section: "Croissance" },
    revenue: { title: "Mod\u00e8le de Revenus", section: "Activit\u00e9" },
    team: { title: "L\u2019\u00c9quipe", section: "\u00c9quipe" },
    financials: { title: "La Lev\u00e9e", section: "Finances" },
    demo: { title: "D\u00e9monstration", section: "Produit" },
    roadmap: { title: "Vision & Feuille de Route", section: "Feuille de Route" },
  },

  vision: {
    headline: "La place d\u2019\u00e9change de confiance pour les carburants bas carbone",
    subtitle: "Place de march\u00e9 ax\u00e9e conformit\u00e9 pour les carburants marins durables v\u00e9rifi\u00e9s",
    tagline: "Pr\u00e9vention du Double Comptage | Conforme IMO & UE | Logique Physique d\u2019Abord",
    tickerItems: [
      { fuel: "Bio-M\u00e9thanol", region: "Europe du Nord-Ouest", price: "680 $", change: "+2,3 %", ci: "32 gCO\u2082/MJ" },
      { fuel: "E-M\u00e9thanol", region: "Mondial", price: "1 250 $", change: "+1,1 %", ci: "8 gCO\u2082/MJ" },
      { fuel: "FAME B100", region: "Singapour", price: "1 420 $", change: "-0,5 %", ci: "22 gCO\u2082/MJ" },
      { fuel: "Bio-GNL", region: "Rotterdam", price: "890 $", change: "+3,7 %", ci: "28 gCO\u2082/MJ" },
      { fuel: "Hydrog\u00e8ne Vert", region: "Moyen-Orient", price: "4 200 $", change: "+0,8 %", ci: "4 gCO\u2082/MJ" },
      { fuel: "HVO", region: "ARA", price: "1 680 $", change: "-1,2 %", ci: "18 gCO\u2082/MJ" },
    ],
  },

  toc: {
    heading: "Sommaire",
    subheading: "Parcourez la pr\u00e9sentation investisseurs de Verdaxis",
  },

  whyNow: {
    heading: "Pourquoi Maintenant \u2014 Un Point d\u2019Inflexion",
    subtitle: "L\u2019industrie maritime fait face \u00e0 une transformation r\u00e9glementaire et commerciale sans pr\u00e9c\u00e9dent",
    drivers: [
      {
        title: "\u00c9ch\u00e9ances R\u00e9glementaires",
        description: "FuelEU Maritime en vigueur depuis janvier 2025. Le cadre z\u00e9ro \u00e9mission nette de l\u2019IMO (NZF) fixe les objectifs 2050. EU ETS \u00e9tendu au transport maritime. RED III d\u00e9finit les crit\u00e8res des carburants durables. Les co\u00fbts de non-conformit\u00e9 augmentent de mani\u00e8re exponentielle.",
        iconKey: "regulation",
      },
      {
        title: "Explosion de l\u2019Offre",
        description: "Capacit\u00e9 de production chinoise de m\u00e9thanol en forte hausse \u2014 plus de 100 millions de tonnes d\u2019ici 2026. Projets de bio-m\u00e9thanol en expansion \u00e0 travers l\u2019Europe et l\u2019Asie. Pilotes d\u2019e-m\u00e9thanol lanc\u00e9s en Scandinavie et au Moyen-Orient.",
        iconKey: "supply",
      },
      {
        title: "Adoption par les Navires",
        description: "Les carnets de commandes montrent plus de 200 navires propuls\u00e9s au m\u00e9thanol en cours de construction. Les grandes compagnies maritimes (Maersk, CMA CGM) se sont engag\u00e9es dans les carburants alternatifs. Le march\u00e9 de la conversion bi-carburant s\u2019acc\u00e9l\u00e8re.",
        iconKey: "vessels",
      },
      {
        title: "Corridors Verts",
        description: "Singapour\u2013Rotterdam, Shanghai\u2013Los Angeles \u2014 les gouvernements \u00e9tablissent des corridors maritimes verts pr\u00eats en carburant. Les investissements dans les infrastructures portuaires lib\u00e8rent la demande.",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "Application de FuelEU Maritime" },
      { value: "200+", label: "Navires M\u00e9thanol en Commande" },
      { value: "50 Md$", label: "March\u00e9 des Carburants Alt. d\u2019ici 2030" },
      { value: "100M+", label: "Tonnes de Capacit\u00e9 CH\u2083OH" },
    ],
  },

  problem: {
    heading: "Le Probl\u00e8me",
    subtitle: "Trois lacunes critiques bloquent la transition vers les carburants marins durables",
    cards: [
      {
        title: "Tsunami R\u00e9glementaire",
        description: "Les armateurs font face simultan\u00e9ment \u00e0 FuelEU Maritime, EU ETS, IMO NZF, RED III et aux mandats r\u00e9gionaux. Aucun outil unifi\u00e9 pour suivre la conformit\u00e9 \u00e0 travers les diff\u00e9rents cadres. Les p\u00e9nalit\u00e9s de non-conformit\u00e9 peuvent atteindre des millions par navire.",
        iconKey: "regulation",
      },
      {
        title: "March\u00e9 Fragment\u00e9",
        description: "Le n\u00e9goce de carburants alternatifs se fait par e-mails, WhatsApp et appels de courtiers. Aucune transparence des prix. Aucune v\u00e9rification standardis\u00e9e de la qualit\u00e9. Aucune comparaison ajust\u00e9e en intensit\u00e9 carbone. Les acheteurs ne trouvent pas efficacement les vendeurs v\u00e9rifi\u00e9s.",
        iconKey: "fragmented",
      },
      {
        title: "D\u00e9ficit Critique de Comp\u00e9tences",
        description: "Les \u00e9quipages et les \u00e9quipes op\u00e9rationnelles manquent de formation sur la manipulation des carburants alternatifs, les protocoles de s\u00e9curit\u00e9 et le reporting de conformit\u00e9. Les connaissances traditionnelles en soutes ne s\u2019appliquent pas aux op\u00e9rations au m\u00e9thanol, \u00e0 l\u2019ammoniac ou \u00e0 l\u2019hydrog\u00e8ne.",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "L\u2019\u00c9cosyst\u00e8me Verdaxis",
    subtitle: "Trois piliers int\u00e9gr\u00e9s pour r\u00e9soudre la transition vers les carburants alternatifs",
    pillars: [
      {
        title: "Plateforme de N\u00e9goce",
        description: "Place de march\u00e9 avec v\u00e9rification de conformit\u00e9, reliant producteurs, acheteurs et n\u00e9gociants de carburants. Carnet d\u2019ordres en temps r\u00e9el avec tarification ajust\u00e9e \u00e0 l\u2019IC. Logique physique d\u2019abord emp\u00eachant le double comptage. Certificats d\u2019origine num\u00e9riques.",
        iconKey: "trading",
      },
      {
        title: "Moteur de Conformit\u00e9",
        description: "Tableau de bord unifi\u00e9 suivant les obligations EU ETS, FuelEU Maritime, RED III, IMO NZF, 45Z, RenovaBio et CORSIA. Reporting automatis\u00e9. Pr\u00e9vision des p\u00e9nalit\u00e9s. Notation de conformit\u00e9 au niveau de la flotte.",
        iconKey: "compliance",
      },
      {
        title: "Formation Num\u00e9rique",
        description: "Modules de formation assist\u00e9s par l\u2019IA pour les \u00e9quipages et les op\u00e9rations sur la manipulation, la s\u00e9curit\u00e9 et la conformit\u00e9 des carburants alternatifs. Suivi des certifications. Base de connaissances mise \u00e0 jour avec les derni\u00e8res r\u00e9glementations.",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "Opportunit\u00e9 de March\u00e9",
    subtitle: "Une industrie de 300 milliards de dollars m\u00fbre pour la transformation num\u00e9rique",
    tam: {
      value: "$300B",
      label: "March\u00e9 Total Adressable",
      description: "March\u00e9 mondial des soutes marines \u2014 l\u2019ensemble des achats de carburant pour tous les navires",
    },
    sam: {
      value: "$50B",
      label: "March\u00e9 Adressable Accessible",
      description: "Carburants marins alternatifs et bas carbone d\u2019ici 2030 \u2014 m\u00e9thanol, biocarburants, GNL, hydrog\u00e8ne",
    },
    som: {
      value: "$5B",
      label: "March\u00e9 Accessible Capturable",
      description: "Volume du march\u00e9 spot via Singapour et les principaux hubs mondiaux \u2014 notre t\u00eate de pont",
    },
    branchLabel: "D\u00e9tail du Dimensionnement de March\u00e9",
  },

  product: {
    heading: "La Plateforme \u2014 Op\u00e9rationnelle en 2026",
    subtitle: "Des fonctionnalit\u00e9s r\u00e9elles, disponibles sur app.verdaxis.exchange",
    features: [
      {
        name: "Place de March\u00e9 & Carnet d\u2019Ordres",
        description: "Parcourez, publiez et n\u00e9gociez des carburants alternatifs v\u00e9rifi\u00e9s. Carnet d\u2019ordres en temps r\u00e9el avec offres d\u2019achat et de vente. Tarification ajust\u00e9e \u00e0 l\u2019IC pour une comparaison r\u00e9elle des co\u00fbts.",
        iconKey: "marketplace",
        highlight: "N\u00e9goce en Direct",
      },
      {
        name: "Tableau de Bord de Conformit\u00e9",
        description: "Suivez les obligations EU ETS, FuelEU Maritime et IMO en un seul aper\u00e7u. Notation de conformit\u00e9 au niveau de la flotte. Pr\u00e9vision automatis\u00e9e des p\u00e9nalit\u00e9s.",
        iconKey: "compliance",
        highlight: "6 Cadres R\u00e9glementaires",
        poweredBy: "marinachain",
      },
      {
        name: "Suivi de Flotte",
        description: "Surveillez les positions des navires, les notations CII et l\u2019\u00e9tat de conformit\u00e9. Optimisation du carburant par itin\u00e9raire. Pr\u00e9vision de conformit\u00e9 par voyage.",
        iconKey: "fleet",
        poweredBy: "marinachain",
      },
      {
        name: "Copilote IA",
        description: "Intelligence de march\u00e9 assist\u00e9e par l\u2019IA. Requ\u00eates en langage naturel pour les prix, la conformit\u00e9 et l\u2019analyse de march\u00e9. Architecture d\u2019appel d\u2019outils pour les donn\u00e9es en temps r\u00e9el.",
        iconKey: "ai",
        highlight: "Assist\u00e9 par l\u2019IA",
      },
      {
        name: "Carte des Producteurs",
        description: "Carte interactive de plus de 150 projets mondiaux de production de carburants alternatifs. Filtrez par type de carburant, r\u00e9gion, capacit\u00e9 et statut de certification.",
        iconKey: "map",
        highlight: "150+ Projets",
        poweredBy: "gena",
      },
      {
        name: "Calculateur \u00c9nerg\u00e9tique",
        description: "Comparez les options de carburant avec une tarification ajust\u00e9e \u00e0 l\u2019IC. Int\u00e9grez les co\u00fbts carbone, les cr\u00e9dits de conformit\u00e9 et les \u00e9missions r\u00e9elles sur le cycle de vie. Prenez des d\u00e9cisions fond\u00e9es sur les donn\u00e9es.",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "Conformit\u00e9 en D\u00e9tail",
      "ai-copilot": "D\u00e9mo du Copilote IA",
      "producer-map": "Carte des Producteurs",
    },
  },

  traction: {
    heading: "Traction & Preuves",
    subtitle: "Plateforme op\u00e9rationnelle, conformit\u00e9 valid\u00e9e, march\u00e9 engag\u00e9",
    stats: [
      { value: "En Ligne", label: "Plateforme sur app.verdaxis.exchange" },
      { value: "6", label: "Cadres de Conformit\u00e9" },
      { value: "150+", label: "Projets de Producteurs R\u00e9pertori\u00e9s" },
      { value: "Actif", label: "Programme Pilote" },
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
      { title: "Lancement du MVP", date: "T1 2026" },
      { title: "Moteur de Conformit\u00e9 v1", date: "T1 2026" },
      { title: "Copilote IA B\u00eata", date: "T2 2026" },
      { title: "Premiers Revenus", date: "T2 2026" },
      { title: "Programme Membres Fondateurs", date: "T2 2026" },
    ],
  },

  competitive: {
    heading: "Nos Avantages Concurrentiels",
    subtitle: "\u00c9cosyst\u00e8me unifi\u00e9 face aux solutions isol\u00e9es",
    dimensions: [
      "N\u00e9goce & Mise en Relation de Carburants",
      "Conformit\u00e9 EU ETS",
      "Suivi FuelEU Maritime",
      "Formation des \u00c9quipages",
      "Analyse de Donn\u00e9es Int\u00e9gr\u00e9e",
    ],
    competitors: [
      {
        name: "Courtiers Traditionnels",
        scores: {
          "N\u00e9goce & Mise en Relation de Carburants": "partial",
          "Conformit\u00e9 EU ETS": "none",
          "Suivi FuelEU Maritime": "none",
          "Formation des \u00c9quipages": "none",
          "Analyse de Donn\u00e9es Int\u00e9gr\u00e9e": "none",
        },
      },
      {
        name: "SaaS de Conformit\u00e9",
        scores: {
          "N\u00e9goce & Mise en Relation de Carburants": "none",
          "Conformit\u00e9 EU ETS": "full",
          "Suivi FuelEU Maritime": "partial",
          "Formation des \u00c9quipages": "none",
          "Analyse de Donn\u00e9es Int\u00e9gr\u00e9e": "partial",
        },
      },
      {
        name: "Plateformes de Soutes",
        scores: {
          "N\u00e9goce & Mise en Relation de Carburants": "full",
          "Conformit\u00e9 EU ETS": "none",
          "Suivi FuelEU Maritime": "none",
          "Formation des \u00c9quipages": "none",
          "Analyse de Donn\u00e9es Int\u00e9gr\u00e9e": "none",
        },
      },
    ],
    verdaxisScores: {
      "N\u00e9goce & Mise en Relation de Carburants": "full",
      "Conformit\u00e9 EU ETS": "full",
      "Suivi FuelEU Maritime": "full",
      "Formation des \u00c9quipages": "full",
      "Analyse de Donn\u00e9es Int\u00e9gr\u00e9e": "full",
    },
  },

  flywheel: {
    heading: "Volant d\u2019Inertie de l\u2019\u00c9cosyst\u00e8me",
    subtitle: "Avantage d\u00e8s le premier jour gr\u00e2ce au r\u00e9seau de 400+ navires de MarinaChain et \u00e0 l\u2019\u00e9cosyst\u00e8me de trading de Green Marine",
    nodes: [
      { label: "R\u00e9seau MarinaChain", description: "Plus de 400 navires d\u00e9j\u00e0 sur la plateforme \u2014 distribution et donn\u00e9es de conformit\u00e9 instantan\u00e9es" },
      { label: "\u00c9cosyst\u00e8me Green Marine", description: "Courtage de carburant, comptabilit\u00e9 carbone et conseil r\u00e9glementaire int\u00e9gr\u00e9s" },
      { label: "Liquidit\u00e9 du March\u00e9", description: "Les r\u00e9seaux combin\u00e9s g\u00e9n\u00e8rent des spreads plus serr\u00e9s et de meilleurs prix" },
      { label: "Intelligence des Donn\u00e9es", description: "Les donn\u00e9es transactionnelles et de conformit\u00e9 alimentent les analyses et l\u2019IA" },
      { label: "Croissance du R\u00e9seau", description: "De meilleures donn\u00e9es, liquidit\u00e9 et services attirent davantage de producteurs et d\u2019acheteurs" },
    ],
    centerLabel: "\u00c9cosyst\u00e8me Verdaxis",
  },

  revenue: {
    heading: "Mod\u00e8le de Revenus",
    subtitle: "Plusieurs sources de revenus avec une \u00e9conomie unitaire claire",
    streams: [
      {
        title: "Commissions sur Transactions",
        description: "Commission de 0,5 % sur chaque transaction de carburant ex\u00e9cut\u00e9e via la plateforme. \u00c9volue proportionnellement au volume de n\u00e9goce.",
        pricing: "0,5 % par transaction",
        tag: "Principal",
      },
      {
        title: "Abonnements SaaS",
        description: "Abonnements mensuels pour le tableau de bord de conformit\u00e9 et les modules de formation. Tarification par navire pour la conformit\u00e9 de flotte. Tarification par utilisateur pour la formation.",
        pricing: "Par navire / par utilisateur",
        tag: "R\u00e9current",
      },
      {
        title: "Donn\u00e9es & Analyses",
        description: "Intelligence de march\u00e9 premium, r\u00e9f\u00e9rentiels de prix et analyses de conformit\u00e9. Acc\u00e8s API pour les int\u00e9grations entreprise.",
        pricing: "Forfaits \u00e9chelonn\u00e9s",
        tag: "Futur",
      },
    ],
    projectedLabel: "Projection de Revenus",
    growthStatement: "Trajectoire vers 10 M$ d\u2019ARR dans les 3 ans suivant le lancement",
  },

  team: {
    heading: "L\u2019\u00c9quipe",
    subtitle: "Experts du maritime, de la fintech et de la conformit\u00e9",
    members: [
      {
        name: "Dan Ha",
        role: "PDG & Co-Fondateur",
        bio: "Entrepreneur en s\u00e9rie avec une expertise approfondie dans la technologie maritime. A pr\u00e9c\u00e9demment fond\u00e9 MarinaChain, d\u00e9veloppant des solutions pilot\u00e9es par l\u2019IA pour l\u2019industrie du transport maritime. Allie vision technologique et ex\u00e9cution commerciale.",
        imageUrl: "/images/team/dan-ha.png",
        company: "marinachain",
      },
      {
        name: "Jon J",
        role: "Directeur des Op\u00e9rations & Co-Fondateur",
        bio: "Responsable op\u00e9rations et produit avec une exp\u00e9rience dans le d\u00e9veloppement de plateformes technologiques. Pilote le d\u00e9veloppement produit, les partenariats et la strat\u00e9gie de mise en march\u00e9 de Verdaxis.",
        imageUrl: "/images/team/jon-j.png",
        company: "marinachain",
      },
      {
        name: "Chris Chatterton",
        role: "Directeur G\u00e9n\u00e9ral",
        bio: "Plus de 30 ans d\u2019exp\u00e9rience dans le maritime et l\u2019\u00e9nergie. Ancien Secr\u00e9taire G\u00e9n\u00e9ral Adjoint de l\u2019International Bunker Industry Association (IBIA). Expertise r\u00e9glementaire approfondie et vaste r\u00e9seau industriel.",
        imageUrl: "/images/team/chris-chatterton.jpg",
        company: "greenm",
      },
      {
        name: "Gavin McGrath",
        role: "Pr\u00e9sident du Conseil",
        bio: "Dirigeant chevronn\u00e9 et administrateur de soci\u00e9t\u00e9s. Vaste exp\u00e9rience dans le n\u00e9goce d\u2019\u00e9nergie et les services maritimes. Conseiller strat\u00e9gique en d\u00e9veloppement de march\u00e9 et gouvernance d\u2019entreprise.",
        imageUrl: "/images/team/gavin-mcgrath.jpg",
        company: "greenm",
      },
    ],
  },

  financials: {
    heading: "La Lev\u00e9e de Fonds",
    subtitle: "Lev\u00e9e de 500 000 $ en amor\u00e7age pour saisir l\u2019opportunit\u00e9 de la place d\u2019\u00e9change de carburants alternatifs",
    roundType: "Amor\u00e7age",
    totalRaise: "500 000 $",
    tranches: [
      {
        name: "Tranche 1",
        amount: "250 000 $",
        trigger: "Imm\u00e9diat",
        description: "Lancer le MVP, int\u00e9grer les membres fondateurs, g\u00e9n\u00e9rer les premiers revenus, \u00e9tablir la t\u00eate de pont \u00e0 Singapour",
      },
      {
        name: "Tranche 2",
        amount: "250 000 $",
        trigger: "Apr\u00e8s jalons de traction",
        description: "Acc\u00e9l\u00e9rer l\u2019acquisition d\u2019utilisateurs, s\u2019\u00e9tendre au hub de Rotterdam, lancer les ench\u00e8res en direct, \u00e9largir la couverture de conformit\u00e9",
      },
    ],
    allocations: [
      { label: "Ing\u00e9nierie & Produit", percentage: "45%" },
      { label: "Ventes & Marketing", percentage: "25%" },
      { label: "Conformit\u00e9 & Juridique", percentage: "15%" },
      { label: "Op\u00e9rations", percentage: "15%" },
    ],
    ctaText: "Construisons ensemble l\u2019avenir du n\u00e9goce de carburants durables",
  },

  roadmap: {
    heading: "Vision & Feuille de Route",
    subtitle: "De la t\u00eate de pont \u00e0 Singapour au standard mondial",
    phases: [
      {
        year: "2026",
        title: "Lancement \u2014 T\u00eate de Pont \u00e0 Singapour",
        items: [
          "N\u00e9goce de m\u00e9thanol et biocarburants op\u00e9rationnel",
          "Programme Membres Fondateurs",
          "Moteur de conformit\u00e9 (FuelEU, EU ETS)",
          "Copilote IA en b\u00eata",
          "Premier jalon de revenus",
        ],
      },
      {
        year: "2027",
        title: "Expansion \u2014 Multi-Hubs",
        items: [
          "Lancement du hub de Rotterdam",
          "Nouveaux types de carburants (\u00c9thanol, Bio-GNL)",
          "Place d\u2019Ench\u00e8res en Direct",
          "Lancement du module de formation",
          "Pr\u00e9paration de la S\u00e9rie A",
        ],
      },
      {
        year: "2028+",
        title: "Passage \u00e0 l\u2019\u00c9chelle \u2014 Standard Mondial",
        items: [
          "R\u00e9seau mondial de hubs",
          "N\u00e9goce de produits d\u00e9riv\u00e9s et contrats \u00e0 terme",
          "Couverture r\u00e9glementaire compl\u00e8te",
          "\u00ab Le Bloomberg des Carburants Alternatifs \u00bb",
        ],
      },
    ],
    visionStatement: "Devenir le Bloomberg des Carburants Alternatifs \u2014 la plateforme de r\u00e9f\u00e9rence sur laquelle op\u00e8re le march\u00e9 mondial des carburants marins durables.",
  },

  demo: {
    heading: "D\u00e9couvrez Verdaxis en Action",
    subtitle: "Suivez une transaction r\u00e9elle \u2014 de la recherche au r\u00e8glement, des deux c\u00f4t\u00e9s de la place de march\u00e9",
    buyer: {
      label: "Acheteur",
      sublabel: "Approvisionnement",
      steps: ["Rechercher", "Parcourir", "S\u00e9lectionner", "Confirm\u00e9"],
    },
    seller: {
      label: "Vendeur",
      sublabel: "Offre",
      steps: ["Publier", "En ligne", "Appari\u00e9", "Termin\u00e9"],
    },
    ui: {
      fuelType: "Type de Carburant",
      port: "Port",
      delivery: "Livraison",
      quantity: "Quantit\u00e9",
      price: "Prix",
      ciScore: "Score IC",
      searchOffers: "Rechercher des Offres",
      offersFound: "offres trouv\u00e9es",
      complianceCheck: "V\u00e9rification de Conformit\u00e9",
      certified: "Certifi\u00e9",
      total: "Total",
      placeOrder: "Passer la Commande",
      orderConfirmed: "Commande Confirm\u00e9e",
      certificates: "Certificats",
      certificateOfOrigin: "Certificat d\u2019Origine",
      fueleuCompliance: "Conformit\u00e9 FuelEU",
      euEtsAllowances: "Quotas EU ETS",
      paymentSecured: "Paiement s\u00e9curis\u00e9 via s\u00e9questre",
      createListing: "Cr\u00e9er une Nouvelle Annonce",
      publishListing: "Publier l\u2019Annonce",
      listingPublished: "Annonce Publi\u00e9e",
      liveStats: "Statistiques en Direct",
      views: "Vues",
      watchlist: "Liste de Suivi",
      inquiries: "Demandes",
      status: "Statut",
      active: "Actif",
      newBuyerInquiry: "Nouvelle Demande d\u2019Acheteur\u00a0!",
      buyerProfile: "Profil de l\u2019Acheteur",
      verifiedBuyer: "Acheteur V\u00e9rifi\u00e9",
      fleet: "flotte de navires",
      wants: "Souhaite",
      yourPrice: "Votre Prix",
      buyerBid: "Offre de l\u2019Acheteur",
      acceptDeal: "Accepter l\u2019Accord",
      transactionComplete: "Transaction Termin\u00e9e",
      settlement: "R\u00e8glement",
      paymentLabel: "Paiement",
      secured: "S\u00e9curis\u00e9",
      certificatesLabel: "Certificats",
      issued: "\u00c9mis",
      complianceLabel: "Conformit\u00e9",
      verified: "V\u00e9rifi\u00e9",
      revenue: "Revenus",
    },
  },

  nav: {
    goToFirst: "Aller \u00e0 la premi\u00e8re diapositive",
    previousSlide: "Diapositive pr\u00e9c\u00e9dente",
    nextSlide: "Diapositive suivante",
  },

  branches: {
    marketSizing: {
      title: "D\u00e9tail du Dimensionnement de March\u00e9",
      tam: {
        label: "March\u00e9 Total Adressable",
        value: "$300B",
        source: "IEA, Clarksons Research",
        description: "March\u00e9 mondial des soutes marines incluant tous les types de navires et cat\u00e9gories de carburants. Croissance de 3 \u00e0 4 % de TCAC, port\u00e9e par l\u2019expansion de la flotte et les co\u00fbts de mise en conformit\u00e9 r\u00e9glementaire.",
      },
      sam: {
        label: "March\u00e9 Adressable Accessible",
        value: "$50B",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "Carburants marins alternatifs et bas carbone d\u2019ici 2030. Comprend le m\u00e9thanol, les biocarburants, le bio-GNL, les e-carburants et l\u2019hydrog\u00e8ne. Segment \u00e0 la croissance la plus rapide, avec un TCAC sup\u00e9rieur \u00e0 25 %.",
      },
      som: {
        label: "March\u00e9 Accessible Capturable",
        value: "$5B",
        source: "MPA Singapore, Port of Rotterdam",
        description: "Volume du march\u00e9 spot \u00e0 Singapour et dans les principaux hubs de soutage mondiaux. Notre strat\u00e9gie de t\u00eate de pont cible d\u2019abord les march\u00e9s les plus volumineux et les plus num\u00e9riquement avanc\u00e9s.",
      },
    },
    complianceEngine: {
      title: "Moteur de Conformit\u00e9 en D\u00e9tail",
      frameworks: [
        { name: "FuelEU Maritime", description: "Objectifs de r\u00e9duction de l\u2019intensit\u00e9 GES pour les navires faisant escale dans les ports de l\u2019UE. P\u00e9nalit\u00e9s graduelles \u00e0 partir de 2025.", status: "Actif" },
        { name: "EU ETS", description: "Syst\u00e8me d\u2019\u00e9change de quotas d\u2019\u00e9missions \u00e9tendu au maritime. Reporting MRV requis. Co\u00fbt des quotas en hausse.", status: "Actif" },
        { name: "RED III", description: "La Directive sur les \u00c9nergies Renouvelables III d\u00e9finit les crit\u00e8res des carburants durables. Exigences de certification pour le statut RFNBO.", status: "Actif" },
        { name: "IMO NZF", description: "Cadre z\u00e9ro \u00e9mission nette visant la d\u00e9carbonation d\u2019ici 2050. Mesures \u00e0 moyen terme attendues en 2027. Norme carburant et taxe carbone.", status: "\u00c0 venir" },
        { name: "US 45Z", description: "Cr\u00e9dit \u00e0 la production de carburants propres rempla\u00e7ant le 45V. Incitations bas\u00e9es sur l\u2019intensit\u00e9 carbone pour les producteurs de carburants durables.", status: "Actif" },
        { name: "CORSIA", description: "M\u00e9canisme de compensation et de r\u00e9duction du carbone pour l\u2019aviation internationale. Applicable de mani\u00e8re crois\u00e9e pour la certification des carburants durables.", status: "Actif" },
      ],
    },
    aiCopilot: {
      title: "Copilote IA \u2014 Assistant Intelligent",
      capabilities: [
        { name: "Requ\u00eates de March\u00e9", description: "\u00ab Quel est le bio-m\u00e9thanol le moins cher disponible \u00e0 Singapour cette semaine ? \u00bb \u2014 tarification en temps r\u00e9el depuis le carnet d\u2019ordres" },
        { name: "Analyse de Conformit\u00e9", description: "\u00ab Quel est mon \u00e9cart de conformit\u00e9 FuelEU Maritime pour le T3 ? \u00bb \u2014 calcule le d\u00e9ficit et recommande des changements de carburant" },
        { name: "Optimisation d\u2019Itin\u00e9raire", description: "\u00ab Optimiser le plan carburant de Singapour \u00e0 Rotterdam \u00bb \u2014 prend en compte la disponibilit\u00e9 du carburant au port, les scores IC et les co\u00fbts" },
        { name: "Mises \u00e0 Jour R\u00e9glementaires", description: "\u00ab Qu\u2019est-ce qui a chang\u00e9 dans RED III le mois dernier ? \u00bb \u2014 surveille les \u00e9volutions r\u00e9glementaires \u00e0 travers les cadres" },
        { name: "Analyses de Portefeuille", description: "\u00ab Montrez la tendance CII moyenne de ma flotte \u00bb \u2014 agr\u00e8ge les donn\u00e9es des navires pour des analyses au niveau de la flotte" },
      ],
    },
    producerMap: {
      title: "Carte Mondiale des Producteurs",
      stats: [
        { value: "150+", label: "Projets de Production" },
        { value: "40+", label: "Pays" },
        { value: "6", label: "Types de Carburants" },
      ],
      regions: [
        "Europe du Nord (Scandinavie, Pays-Bas, Allemagne)",
        "M\u00e9diterran\u00e9e (Espagne, Italie, Gr\u00e8ce)",
        "Asie du Sud-Est (Singapour, Malaisie, Indon\u00e9sie)",
        "Asie de l\u2019Est (Chine, Cor\u00e9e du Sud, Japon)",
        "Moyen-Orient (\u00c9AU, Arabie Saoudite, Oman)",
        "Am\u00e9riques (Golfe des \u00c9tats-Unis, Br\u00e9sil, Chili)",
      ],
    },
    businessModel: {
      title: "D\u00e9tail du Mod\u00e8le \u00c9conomique",
      streams: [
        { name: "Commission de N\u00e9goce", description: "Commission de 0,5 % sur chaque transaction de carburant finalis\u00e9e. Montant moyen des transactions de 50 K$ \u00e0 500 K$. Le revenu cro\u00eet lin\u00e9airement avec le volume de la plateforme.", pricing: "0,5 % par transaction" },
        { name: "SaaS Conformit\u00e9 de Flotte", description: "Abonnement mensuel par navire pour le tableau de bord de conformit\u00e9. Suivi EU ETS, FuelEU et autres cadres r\u00e9glementaires. Reporting MRV automatis\u00e9.", pricing: "200-500 $/navire/mois" },
        { name: "Plateforme de Formation", description: "Acc\u00e8s par utilisateur aux modules de formation sur les carburants alternatifs. Suivi des certifications. Flux de mises \u00e0 jour r\u00e9glementaires.", pricing: "50-100 $/utilisateur/mois" },
        { name: "API de Donn\u00e9es de March\u00e9", description: "Acc\u00e8s API entreprise pour les donn\u00e9es de prix, les analyses de march\u00e9 et les r\u00e9f\u00e9rentiels de conformit\u00e9. Tarification \u00e9chelonn\u00e9e selon le volume de requ\u00eates.", pricing: "1 000-10 000 $/mois" },
      ],
    },
  },
};
