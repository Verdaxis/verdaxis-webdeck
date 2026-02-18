import type { DeckContent } from "./types";

export const pt: DeckContent = {
  slides: {
    vision: { title: "A Plataforma de Confiança", section: "Introdução" },
    toc: { title: "Sumário", section: "Introdução" },
    "why-now": { title: "Por Que Agora", section: "Oportunidade" },
    problem: { title: "O Problema", section: "Oportunidade" },
    solution: { title: "A Solução", section: "Solução" },
    market: { title: "Oportunidade de Mercado", section: "Mercado" },
    product: { title: "A Plataforma", section: "Produto" },
    traction: { title: "Tração e Validação", section: "Tração" },
    competitive: { title: "Por Que Vencemos", section: "Competitividade" },
    flywheel: { title: "Flywheel do Ecossistema", section: "Crescimento" },
    revenue: { title: "Modelo de Receita", section: "Negócio" },
    team: { title: "A Equipe", section: "Equipe" },
    financials: { title: "A Captação", section: "Financeiro" },
    demo: { title: "Veja em Ação", section: "Produto" },
    roadmap: { title: "Visão e Roadmap", section: "Roadmap" },
  },

  vision: {
    headline: "A plataforma de confiança para combustíveis de baixo carbono",
    subtitle: "Marketplace com foco regulatório para combustíveis marítimos sustentáveis verificados",
    tagline: "Prevenção de Dupla Contagem | Alinhado à IMO e UE | Lógica Physical-First",
    tickerItems: [
      { fuel: "Bio-Methanol", region: "NW Europe", price: "$680", change: "+2.3%", ci: "32 gCO₂/MJ" },
      { fuel: "E-Methanol", region: "Global", price: "$1,250", change: "+1.1%", ci: "8 gCO₂/MJ" },
      { fuel: "FAME B100", region: "Singapore", price: "$1,420", change: "-0.5%", ci: "22 gCO₂/MJ" },
      { fuel: "Bio-LNG", region: "Rotterdam", price: "$890", change: "+3.7%", ci: "28 gCO₂/MJ" },
      { fuel: "Green Hydrogen", region: "Middle East", price: "$4,200", change: "+0.8%", ci: "4 gCO₂/MJ" },
      { fuel: "HVO", region: "ARA", price: "$1,680", change: "-1.2%", ci: "18 gCO₂/MJ" },
    ],
  },

  toc: {
    heading: "Sumário",
    subheading: "Navegue pela apresentação para investidores da Verdaxis",
  },

  whyNow: {
    heading: "Por Que Agora — Um Ponto de Inflexão",
    subtitle: "A indústria marítima enfrenta uma transformação regulatória e de mercado sem precedentes",
    drivers: [
      {
        title: "Prazos Regulatórios",
        description: "FuelEU Maritime em vigor desde janeiro de 2025. IMO Net-Zero Framework (NZF) estabelece metas para 2050. EU ETS estendido ao transporte marítimo. RED III define critérios para combustíveis sustentáveis. Os custos por não conformidade escalam exponencialmente.",
        iconKey: "regulation",
      },
      {
        title: "Explosão de Oferta",
        description: "Capacidade de produção de metanol na China em forte crescimento — mais de 100 milhões de toneladas até 2026. Projetos de biometanol em expansão na Europa e na Ásia. Projetos-piloto de e-metanol em lançamento na Escandinávia e no Oriente Médio.",
        iconKey: "supply",
      },
      {
        title: "Adoção por Embarcações",
        description: "Carteira de pedidos mostra mais de 200 embarcações movidas a metanol em desenvolvimento. Grandes armadores (Maersk, CMA CGM) comprometidos com combustíveis alternativos. Mercado de retrofit dual-fuel em aceleração.",
        iconKey: "vessels",
      },
      {
        title: "Corredores Verdes",
        description: "Singapura–Roterdã, Xangai–Los Angeles — governos estabelecendo corredores marítimos verdes prontos para combustíveis alternativos. Investimentos em infraestrutura portuária desbloqueando demanda.",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "Aplicação do FuelEU Maritime" },
      { value: "200+", label: "Embarcações a Metanol em Pedido" },
      { value: "$50B", label: "Mercado de Combustíveis Alternativos até 2030" },
      { value: "100M+", label: "Toneladas de Capacidade de CH₃OH" },
    ],
  },

  problem: {
    heading: "O Problema",
    subtitle: "Três lacunas críticas bloqueando a transição para combustíveis marítimos sustentáveis",
    cards: [
      {
        title: "Tsunami Regulatório",
        description: "Operadores de navios enfrentam simultaneamente FuelEU Maritime, EU ETS, IMO NZF, RED III e mandatos regionais. Não há ferramenta unificada para rastrear conformidade entre os diferentes marcos regulatórios. Penalidades por não conformidade podem chegar a milhões por embarcação.",
        iconKey: "regulation",
      },
      {
        title: "Mercado Fragmentado",
        description: "A comercialização de combustíveis alternativos acontece por e-mails, WhatsApp e ligações com corretores. Sem precificação transparente. Sem verificação padronizada de qualidade. Sem comparações ajustadas por intensidade de carbono. Compradores não conseguem encontrar vendedores verificados de forma eficiente.",
        iconKey: "fragmented",
      },
      {
        title: "Lacuna Crítica de Competências",
        description: "Tripulações e equipes de operações não possuem treinamento em manuseio de combustíveis alternativos, protocolos de segurança e relatórios de conformidade. O conhecimento tradicional de bunker não se transfere para operações com metanol, amônia ou hidrogênio.",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "O Ecossistema Verdaxis",
    subtitle: "Três pilares integrados para resolver a transição para combustíveis alternativos",
    pillars: [
      {
        title: "Plataforma de Negociação",
        description: "Marketplace com conformidade verificada conectando produtores, compradores e traders de combustíveis. Livro de ordens em tempo real com precificação CI-adjusted. Lógica physical-first prevenindo dupla contagem. Certificados digitais de origem.",
        iconKey: "trading",
      },
      {
        title: "Motor de Conformidade",
        description: "Painel unificado rastreando obrigações de EU ETS, FuelEU Maritime, RED III, IMO NZF, 45Z, RenovaBio e CORSIA. Relatórios automatizados. Previsão de penalidades. Pontuação de conformidade no nível da frota.",
        iconKey: "compliance",
      },
      {
        title: "Treinamento Digital",
        description: "Módulos de treinamento com inteligência artificial para tripulações e operações sobre manuseio, segurança e conformidade de combustíveis alternativos. Rastreamento de certificações. Base de conhecimento atualizada com as regulamentações mais recentes.",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "Oportunidade de Mercado",
    subtitle: "Uma indústria de $300 bilhões pronta para a transformação digital",
    tam: {
      value: "$300B",
      label: "Mercado Total Endereçável",
      description: "Mercado global de combustíveis marítimos (bunker) — todas as compras de combustível para embarcações no mundo",
    },
    sam: {
      value: "$50B",
      label: "Mercado Endereçável Disponível",
      description: "Combustíveis marítimos alternativos e de baixo carbono até 2030 — metanol, biocombustíveis, GNL, hidrogênio",
    },
    som: {
      value: "$5B",
      label: "Mercado Obtível",
      description: "Volume do mercado spot em Singapura e principais hubs globais — nosso ponto de entrada estratégico",
    },
    branchLabel: "Detalhamento do Dimensionamento de Mercado",
  },

  product: {
    heading: "A Plataforma — Ao Vivo em 2026",
    subtitle: "Funcionalidades reais, ao vivo em app.verdaxis.exchange",
    features: [
      {
        name: "Marketplace e Livro de Ordens",
        description: "Navegue, liste e negocie combustíveis alternativos verificados. Livro de ordens em tempo real com oferta/demanda. Precificação CI-adjusted para comparação real de custos.",
        iconKey: "marketplace",
        highlight: "Negociação Ativa",
      },
      {
        name: "Painel de Conformidade",
        description: "Acompanhe obrigações de EU ETS, FuelEU Maritime e IMO em uma única visão. Pontuação de conformidade no nível da frota. Previsão automatizada de penalidades.",
        iconKey: "compliance",
        highlight: "6 Marcos Regulatórios",
        poweredBy: "marinachain",
      },
      {
        name: "Rastreamento de Frota",
        description: "Monitore posições de embarcações, classificações CII e status de conformidade. Otimização de combustível baseada em rotas. Previsão de conformidade por viagem.",
        iconKey: "fleet",
        poweredBy: "marinachain",
      },
      {
        name: "Copiloto IA",
        description: "Inteligência de mercado com IA. Consultas em linguagem natural para precificação, conformidade e análise de mercado. Arquitetura com chamada de ferramentas para dados em tempo real.",
        iconKey: "ai",
        highlight: "Com IA",
      },
      {
        name: "Mapa de Produtores",
        description: "Mapa interativo com mais de 150 projetos globais de produção de combustíveis alternativos. Filtre por tipo de combustível, região, capacidade e status de certificação.",
        iconKey: "map",
        highlight: "150+ Projetos",
        poweredBy: "gena",
      },
      {
        name: "Calculadora de Energia",
        description: "Compare opções de combustível com precificação CI-adjusted. Considere custos de carbono, créditos de conformidade e emissões reais de ciclo de vida. Tome decisões de combustível baseadas em dados.",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "Aprofundamento em Conformidade",
      "ai-copilot": "Demo do Copiloto IA",
      "producer-map": "Mapa de Produtores",
    },
  },

  traction: {
    heading: "Tração e Validação",
    subtitle: "Plataforma ao vivo, conformidade validada, mercado engajado",
    stats: [
      { value: "Ao Vivo", label: "Plataforma em app.verdaxis.exchange" },
      { value: "6", label: "Marcos Regulatórios" },
      { value: "150+", label: "Projetos de Produtores Mapeados" },
      { value: "Ativo", label: "Programa Piloto" },
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
      { title: "Lançamento do MVP da Plataforma", date: "T1 2026" },
      { title: "Motor de Conformidade v1", date: "T1 2026" },
      { title: "Copiloto IA Beta", date: "T2 2026" },
      { title: "Primeira Receita", date: "T2 2026" },
      { title: "Programa de Membros Fundadores", date: "T2 2026" },
    ],
  },

  competitive: {
    heading: "Por Que Vencemos",
    subtitle: "Ecossistema unificado versus soluções isoladas",
    dimensions: [
      "Negociação e Matchmaking de Combustíveis",
      "Conformidade com EU ETS",
      "Rastreamento FuelEU Maritime",
      "Treinamento de Tripulação",
      "Análise de Dados Integrada",
    ],
    competitors: [
      {
        name: "Corretores Tradicionais",
        scores: {
          "Negociação e Matchmaking de Combustíveis": "partial",
          "Conformidade com EU ETS": "none",
          "Rastreamento FuelEU Maritime": "none",
          "Treinamento de Tripulação": "none",
          "Análise de Dados Integrada": "none",
        },
      },
      {
        name: "SaaS de Conformidade",
        scores: {
          "Negociação e Matchmaking de Combustíveis": "none",
          "Conformidade com EU ETS": "full",
          "Rastreamento FuelEU Maritime": "partial",
          "Treinamento de Tripulação": "none",
          "Análise de Dados Integrada": "partial",
        },
      },
      {
        name: "Plataformas de Bunker",
        scores: {
          "Negociação e Matchmaking de Combustíveis": "full",
          "Conformidade com EU ETS": "none",
          "Rastreamento FuelEU Maritime": "none",
          "Treinamento de Tripulação": "none",
          "Análise de Dados Integrada": "none",
        },
      },
    ],
    verdaxisScores: {
      "Negociação e Matchmaking de Combustíveis": "full",
      "Conformidade com EU ETS": "full",
      "Rastreamento FuelEU Maritime": "full",
      "Treinamento de Tripulação": "full",
      "Análise de Dados Integrada": "full",
    },
  },

  flywheel: {
    heading: "Flywheel do Ecossistema",
    subtitle: "Vantagem de rede desde o dia 1 com a base de mais de 400 embarcações da MarinaChain",
    nodes: [
      { label: "Rede MarinaChain", description: "Mais de 400 embarcações já na plataforma — canal de distribuição instantâneo" },
      { label: "Membros Fundadores", description: "Primeiros adotantes recebem precificação preferencial e influência no produto" },
      { label: "Liquidez de Mercado", description: "Mais participantes = spreads menores = melhores preços para todos" },
      { label: "Inteligência de Dados", description: "Dados de transações alimentam insights de mercado e recursos de IA" },
      { label: "Mais Usuários", description: "Melhores dados e liquidez atraem mais produtores e compradores" },
    ],
    centerLabel: "Ecossistema Verdaxis",
  },

  revenue: {
    heading: "Modelo de Receita",
    subtitle: "Múltiplas fontes de receita com economia unitária clara",
    streams: [
      {
        title: "Taxas de Transação",
        description: "Comissão de 0,5% em cada negociação de combustível executada pela plataforma. Escala diretamente com o volume de transações.",
        pricing: "0,5% por transação",
        tag: "Principal",
      },
      {
        title: "Assinaturas SaaS",
        description: "Assinaturas mensais para painel de conformidade e módulos de treinamento. Precificação por embarcação para conformidade de frota. Precificação por usuário para treinamento.",
        pricing: "Por embarcação / por usuário",
        tag: "Recorrente",
      },
      {
        title: "Dados e Análises",
        description: "Inteligência de mercado premium, benchmarks de precificação e análises de conformidade. Acesso via API para integrações corporativas.",
        pricing: "Planos escalonados",
        tag: "Futuro",
      },
    ],
    projectedLabel: "Projeção de Receita",
    growthStatement: "Caminho para $10M de ARR em 3 anos após o lançamento",
  },

  team: {
    heading: "A Equipe",
    subtitle: "Especialistas em marítimo, fintech e conformidade regulatória",
    members: [
      {
        name: "Dan Ha",
        role: "CEO e Cofundador",
        bio: "Empreendedor serial com profunda experiência em tecnologia marítima. Fundou anteriormente a MarinaChain, desenvolvendo soluções com IA para a indústria naval. Combina visão técnica com execução comercial.",
        imageUrl: "/images/team/dan-ha.png",
        company: "marinachain",
      },
      {
        name: "Jon J",
        role: "COO e Cofundador",
        bio: "Líder de operações e produto com experiência em escalar plataformas tecnológicas. Conduz o desenvolvimento de produto, parcerias e estratégia de go-to-market da Verdaxis.",
        imageUrl: "/images/team/jon-j.png",
        company: "marinachain",
      },
      {
        name: "Chris Chatterton",
        role: "Diretor Geral",
        bio: "Mais de 30 anos no setor marítimo e energético. Ex-Vice Secretário-Geral da International Bunker Industry Association (IBIA). Profunda expertise regulatória e ampla rede de contatos na indústria.",
        imageUrl: "/images/team/chris-chatterton.jpg",
        company: "greenm",
      },
      {
        name: "Gavin McGrath",
        role: "Presidente do Conselho",
        bio: "Executivo experiente e conselheiro. Vasta experiência em negociação de energia e serviços marítimos. Consultor estratégico em desenvolvimento de mercado e governança corporativa.",
        imageUrl: "/images/team/gavin-mcgrath.jpg",
        company: "greenm",
      },
    ],
  },

  financials: {
    heading: "A Captação",
    subtitle: "Captando $500.000 em rodada Seed para conquistar a oportunidade de exchange de combustíveis alternativos",
    roundType: "Seed",
    totalRaise: "$500,000",
    tranches: [
      {
        name: "Tranche 1",
        amount: "$250,000",
        trigger: "Imediato",
        description: "Lançar MVP, integrar membros fundadores, primeira receita, estabelecer ponto de entrada em Singapura",
      },
      {
        name: "Tranche 2",
        amount: "$250,000",
        trigger: "Após marcos de tração",
        description: "Escalar aquisição de usuários, expandir para hub de Roterdã, lançar negociação ao vivo, acelerar cobertura de conformidade",
      },
    ],
    allocations: [
      { label: "Engenharia e Produto", percentage: "45%" },
      { label: "Vendas e Marketing", percentage: "25%" },
      { label: "Conformidade e Jurídico", percentage: "15%" },
      { label: "Operações", percentage: "15%" },
    ],
    ctaText: "Vamos construir o futuro da negociação de combustíveis sustentáveis",
  },

  roadmap: {
    heading: "Visão e Roadmap",
    subtitle: "Do ponto de entrada em Singapura ao padrão global",
    phases: [
      {
        year: "2026",
        title: "Lançamento — Ponto de Entrada em Singapura",
        items: [
          "Negociação de metanol e biocombustíveis ao vivo",
          "Programa de Membros Fundadores",
          "Motor de conformidade (FuelEU, EU ETS)",
          "Copiloto IA beta",
          "Marco de primeira receita",
        ],
      },
      {
        year: "2027",
        title: "Expansão — Multi-Hub",
        items: [
          "Lançamento do hub de Roterdã",
          "Novos tipos de combustível (Etanol, Bio-GNL)",
          "Exchange com Negociação ao Vivo",
          "Lançamento de módulo de treinamento",
          "Preparação para Série A",
        ],
      },
      {
        year: "2028+",
        title: "Escala — Padrão Global",
        items: [
          "Rede global de hubs",
          "Negociação de derivativos e futuros",
          "Cobertura regulatória completa",
          "\"Bloomberg dos Combustíveis Alternativos\"",
        ],
      },
    ],
    visionStatement: "Tornar-se o Bloomberg dos Combustíveis Alternativos — a plataforma definitiva onde o mercado global de combustíveis marítimos sustentáveis opera.",
  },

  demo: {
    heading: "Veja a Verdaxis em Ação",
    subtitle: "Acompanhe um fluxo real de transação — da busca à liquidação, nos dois lados do marketplace",
    buyer: {
      label: "Comprador",
      sublabel: "Aquisição",
      steps: ["Buscar", "Explorar", "Selecionar", "Confirmado"],
    },
    seller: {
      label: "Vendedor",
      sublabel: "Fornecimento",
      steps: ["Listar", "Publicado", "Compatível", "Concluído"],
    },
    ui: {
      fuelType: "Tipo de Combustível",
      port: "Porto",
      delivery: "Entrega",
      quantity: "Quantidade",
      price: "Preço",
      ciScore: "Pontuação CI",
      searchOffers: "Buscar Ofertas",
      offersFound: "ofertas encontradas",
      complianceCheck: "Verificação de Conformidade",
      certified: "Certificado",
      total: "Total",
      placeOrder: "Fazer Pedido",
      orderConfirmed: "Pedido Confirmado",
      certificates: "Certificados",
      certificateOfOrigin: "Certificado de Origem",
      fueleuCompliance: "Conformidade FuelEU",
      euEtsAllowances: "Permissões EU ETS",
      paymentSecured: "Pagamento garantido via escrow",
      createListing: "Criar Novo Anúncio",
      publishListing: "Publicar Anúncio",
      listingPublished: "Anúncio Publicado",
      liveStats: "Estatísticas em Tempo Real",
      views: "Visualizações",
      watchlist: "Lista de Acompanhamento",
      inquiries: "Consultas",
      status: "Status",
      active: "Ativo",
      newBuyerInquiry: "Nova Consulta de Comprador!",
      buyerProfile: "Perfil do Comprador",
      verifiedBuyer: "Comprador Verificado",
      fleet: "frota de embarcações",
      wants: "Deseja",
      yourPrice: "Seu Preço",
      buyerBid: "Oferta do Comprador",
      acceptDeal: "Aceitar Negócio",
      transactionComplete: "Transação Concluída",
      settlement: "Liquidação",
      paymentLabel: "Pagamento",
      secured: "Garantido",
      certificatesLabel: "Certificados",
      issued: "Emitidos",
      complianceLabel: "Conformidade",
      verified: "Verificado",
      revenue: "Receita",
    },
  },

  nav: {
    goToFirst: "Ir para o primeiro slide",
    previousSlide: "Slide anterior",
    nextSlide: "Próximo slide",
  },

  branches: {
    marketSizing: {
      title: "Detalhamento do Dimensionamento de Mercado",
      tam: {
        label: "Mercado Total Endereçável",
        value: "$300B",
        source: "IEA, Clarksons Research",
        description: "Mercado global de combustíveis marítimos (bunker) incluindo todos os tipos de embarcações e categorias de combustível. Crescimento de 3-4% CAGR impulsionado pela expansão da frota e custos de conformidade regulatória.",
      },
      sam: {
        label: "Mercado Endereçável Disponível",
        value: "$50B",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "Combustíveis marítimos alternativos e de baixo carbono até 2030. Inclui metanol, biocombustíveis, bio-GNL, e-fuels e hidrogênio. Segmento de maior crescimento com CAGR de 25%+.",
      },
      som: {
        label: "Mercado Obtível",
        value: "$5B",
        source: "MPA Singapore, Port of Rotterdam",
        description: "Volume do mercado spot em Singapura e principais hubs globais de abastecimento marítimo. Nossa estratégia de entrada foca nos mercados de maior volume e mais preparados digitalmente.",
      },
    },
    complianceEngine: {
      title: "Aprofundamento no Motor de Conformidade",
      frameworks: [
        { name: "FuelEU Maritime", description: "Metas de redução de intensidade de GEE para embarcações que atracam em portos da UE. Penalidades graduais a partir de 2025.", status: "Ativo" },
        { name: "EU ETS", description: "Sistema de comércio de emissões estendido ao setor marítimo. Relatórios MRV obrigatórios. Custos de permissões em alta.", status: "Ativo" },
        { name: "RED III", description: "Diretiva de Energias Renováveis III define critérios para combustíveis sustentáveis. Requisitos de certificação para status de RFNBO.", status: "Ativo" },
        { name: "IMO NZF", description: "Net-Zero Framework com meta de descarbonização até 2050. Medidas de médio prazo previstas para 2027. Padrão de combustível e taxa de carbono.", status: "Em Breve" },
        { name: "US 45Z", description: "Crédito de Produção de Combustível Limpo substituindo o 45V. Incentivos baseados em CI para produtores de combustíveis sustentáveis.", status: "Ativo" },
        { name: "CORSIA", description: "Esquema de Compensação e Redução de Carbono para Aviação Internacional. Aplicável para certificação de combustíveis sustentáveis de forma transversal.", status: "Ativo" },
      ],
    },
    aiCopilot: {
      title: "Copiloto IA — Assistente Inteligente",
      capabilities: [
        { name: "Consultas de Mercado", description: "\"Qual o biometanol mais barato disponível em Singapura esta semana?\" — precificação em tempo real do livro de ordens" },
        { name: "Análise de Conformidade", description: "\"Qual é minha lacuna de conformidade com FuelEU Maritime no T3?\" — calcula o déficit e recomenda trocas de combustível" },
        { name: "Otimização de Rotas", description: "\"Otimize o plano de combustível de Singapura a Roterdã\" — considera disponibilidade de combustível nos portos, pontuações de CI e custos" },
        { name: "Atualizações Regulatórias", description: "\"O que mudou na RED III no último mês?\" — monitora desenvolvimentos regulatórios em todos os marcos" },
        { name: "Análise de Portfólio", description: "\"Mostre a tendência média de CII da minha frota\" — agrega dados de embarcações para insights no nível da frota" },
      ],
    },
    producerMap: {
      title: "Mapa Global de Produtores",
      stats: [
        { value: "150+", label: "Projetos de Produção" },
        { value: "40+", label: "Países" },
        { value: "6", label: "Tipos de Combustível" },
      ],
      regions: [
        "Norte da Europa (Escandinávia, Holanda, Alemanha)",
        "Mediterrâneo (Espanha, Itália, Grécia)",
        "Sudeste Asiático (Singapura, Malásia, Indonésia)",
        "Leste Asiático (China, Coreia do Sul, Japão)",
        "Oriente Médio (EAU, Arábia Saudita, Omã)",
        "Américas (Golfo dos EUA, Brasil, Chile)",
      ],
    },
    businessModel: {
      title: "Detalhamento do Modelo de Negócio",
      streams: [
        { name: "Comissão de Negociação", description: "Taxa de 0,5% em cada negociação de combustível concluída. Valor médio por transação de $50K-$500K. Receita escala linearmente com o volume da plataforma.", pricing: "0,5% por transação" },
        { name: "SaaS de Conformidade de Frota", description: "Assinatura mensal por embarcação para painel de conformidade. Rastreia EU ETS, FuelEU e outros marcos regulatórios. Relatórios MRV automatizados.", pricing: "$200-500/embarcação/mês" },
        { name: "Plataforma de Treinamento", description: "Acesso por usuário a módulos de treinamento em combustíveis alternativos. Rastreamento de certificações. Feed de atualizações regulatórias.", pricing: "$50-100/usuário/mês" },
        { name: "API de Dados de Mercado", description: "Acesso corporativo via API para dados de precificação, análises de mercado e benchmarks de conformidade. Planos escalonados por volume de consultas.", pricing: "$1.000-10.000/mês" },
      ],
    },
  },
};
