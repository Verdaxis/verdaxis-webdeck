import type { DeckContent } from "./types";

export const zh: DeckContent = {
  slides: {
    vision: { title: "值得信赖的交易所", section: "介绍" },
    toc: { title: "目录", section: "介绍" },
    "why-now": { title: "为何是现在", section: "机遇" },
    problem: { title: "行业痛点", section: "机遇" },
    solution: { title: "解决方案", section: "解决方案" },
    market: { title: "市场机遇", section: "市场" },
    product: { title: "产品平台", section: "产品" },
    traction: { title: "市场验证", section: "市场验证" },
    competitive: { title: "竞争优势", section: "竞争格局" },
    flywheel: { title: "生态飞轮", section: "增长" },
    revenue: { title: "收入模式", section: "商业模式" },
    team: { title: "核心团队", section: "团队" },
    financials: { title: "融资需求", section: "财务" },
    roadmap: { title: "愿景与路线图", section: "路线图" },
  },

  vision: {
    headline: "值得信赖的低碳燃料交易所",
    subtitle: "合规优先的可持续海运燃料认证交易市场",
    tagline: "防止重复计算 | 符合 IMO 及欧盟标准 | 实物交割优先逻辑",
    tickerItems: [
      { fuel: "生物甲醇", region: "西北欧", price: "$680", change: "+2.3%", ci: "32 gCO\u2082/MJ" },
      { fuel: "电制甲醇", region: "全球", price: "$1,250", change: "+1.1%", ci: "8 gCO\u2082/MJ" },
      { fuel: "FAME B100", region: "新加坡", price: "$1,420", change: "-0.5%", ci: "22 gCO\u2082/MJ" },
      { fuel: "生物液化天然气", region: "鹿特丹", price: "$890", change: "+3.7%", ci: "28 gCO\u2082/MJ" },
      { fuel: "绿色氢能", region: "中东", price: "$4,200", change: "+0.8%", ci: "4 gCO\u2082/MJ" },
      { fuel: "加氢处理植物油", region: "ARA", price: "$1,680", change: "-1.2%", ci: "18 gCO\u2082/MJ" },
    ],
  },

  toc: {
    heading: "目录",
    subheading: "浏览 Verdaxis 投资者演示文稿",
  },

  whyNow: {
    heading: "为何是现在 \u2014 行业拐点已至",
    subtitle: "海运行业正面临前所未有的监管与市场变革",
    drivers: [
      {
        title: "监管期限迫近",
        description: "FuelEU Maritime 于2025年1月正式执行。IMO 净零框架（NZF）锁定2050年目标。EU ETS 扩展至航运业。RED III 明确可持续燃料标准。不合规成本呈指数级增长。",
        iconKey: "regulation",
      },
      {
        title: "供应爆发式增长",
        description: "中国甲醇产能急剧攀升——2026年将超过1亿吨。生物甲醇项目在欧洲和亚洲加速扩张。电制甲醇试点项目在斯堪的纳维亚和中东相继启动。",
        iconKey: "supply",
      },
      {
        title: "船舶快速采用",
        description: "订单簿显示200多艘甲醇动力船舶正在建造中。主要航运公司（Maersk、CMA CGM）已承诺使用替代燃料。双燃料改装市场正在加速发展。",
        iconKey: "vessels",
      },
      {
        title: "绿色航运走廊",
        description: "新加坡至鹿特丹、上海至洛杉矶——各国政府正在建设燃料就绪的绿色航运走廊。港口基础设施投资正在释放需求。",
        iconKey: "corridors",
      },
    ],
    stats: [
      { value: "2025", label: "FuelEU Maritime 生效年份" },
      { value: "200+", label: "在建甲醇动力船舶" },
      { value: "$50B", label: "2030年替代燃料市场规模" },
      { value: "100M+", label: "吨甲醇产能" },
    ],
  },

  problem: {
    heading: "行业痛点",
    subtitle: "阻碍可持续海运燃料转型的三大关键瓶颈",
    cards: [
      {
        title: "监管浪潮",
        description: "船舶运营商同时面临 FuelEU Maritime、EU ETS、IMO NZF、RED III 及各地区法规的合规要求。缺乏统一工具来跨框架跟踪合规状态。单船不合规罚款可达数百万美元。",
        iconKey: "regulation",
      },
      {
        title: "市场碎片化",
        description: "替代燃料交易依赖电子邮件、WhatsApp 和经纪人电话。缺乏价格透明度。缺乏标准化质量验证。缺乏碳强度调整后的对比机制。买方无法高效找到经过认证的卖方。",
        iconKey: "fragmented",
      },
      {
        title: "关键技能缺口",
        description: "船员和运营团队缺乏替代燃料操作、安全规程和合规报告方面的培训。传统燃油知识无法直接应用于甲醇、氨或氢燃料的运营场景。",
        iconKey: "skills",
      },
    ],
  },

  solution: {
    heading: "Verdaxis 生态系统",
    subtitle: "三大协同支柱，全面解决替代燃料转型难题",
    pillars: [
      {
        title: "交易平台",
        description: "合规认证的交易市场，连接燃料生产商、买家和贸易商。具有碳强度调整定价的实时订单簿。实物交割优先逻辑，防止重复计算。数字产地证书。",
        iconKey: "trading",
      },
      {
        title: "合规引擎",
        description: "统一仪表盘，追踪 EU ETS、FuelEU Maritime、RED III、IMO NZF、45Z、RenovaBio 和 CORSIA 义务。自动报告生成。罚款预测。船队级别合规评分。",
        iconKey: "compliance",
      },
      {
        title: "数字化培训",
        description: "AI 驱动的培训模块，涵盖船员和运营团队的替代燃料操作、安全和合规培训。证书跟踪管理。知识库随最新法规持续更新。",
        iconKey: "training",
      },
    ],
  },

  market: {
    heading: "市场机遇",
    subtitle: "一个等待数字化变革的3000亿美元产业",
    tam: {
      value: "$300B",
      label: "潜在市场总量",
      description: "全球海运燃料市场——涵盖所有船舶燃料采购",
    },
    sam: {
      value: "$50B",
      label: "可服务目标市场",
      description: "2030年替代及低碳海运燃料市场——包括甲醇、生物燃料、液化天然气、氢能",
    },
    som: {
      value: "$5B",
      label: "可获取目标市场",
      description: "新加坡及全球主要港口的现货市场交易量——我们的桥头堡",
    },
    branchLabel: "市场规模详情",
  },

  product: {
    heading: "产品平台 \u2014 2026年上线",
    subtitle: "已在 app.verdaxis.exchange 上线运行的真实功能",
    features: [
      {
        name: "交易市场与订单簿",
        description: "浏览、挂牌和交易经过认证的替代燃料。实时订单簿，含买卖报价。碳强度调整定价，实现真实成本对比。",
        iconKey: "marketplace",
        highlight: "实时交易",
      },
      {
        name: "合规仪表盘",
        description: "在统一视图中追踪 EU ETS、FuelEU Maritime 和 IMO 义务。船队级别合规评分。自动罚款预测。",
        iconKey: "compliance",
        highlight: "6大框架",
        poweredBy: "marinachain",
      },
      {
        name: "船队追踪",
        description: "监控船舶位置、CII 评级和合规状态。基于航线的燃料优化。航次合规预测。",
        iconKey: "fleet",
        poweredBy: "marinachain",
      },
      {
        name: "AI 智能助手",
        description: "AI 驱动的市场情报。使用自然语言查询定价、合规和市场分析。工具调用架构实现实时数据接入。",
        iconKey: "ai",
        highlight: "AI 驱动",
      },
      {
        name: "生产商地图",
        description: "交互式全球地图，涵盖150多个替代燃料生产项目。可按燃料类型、地区、产能和认证状态筛选。",
        iconKey: "map",
        highlight: "150+ 项目",
        poweredBy: "gena",
      },
      {
        name: "能源计算器",
        description: "使用碳强度调整定价对比燃料选项。将碳成本、合规积分和全生命周期排放纳入考量。基于数据做出燃料决策。",
        iconKey: "calculator",
      },
    ],
    branchLabels: {
      "compliance-engine": "合规引擎详解",
      "ai-copilot": "AI 智能助手演示",
      "producer-map": "生产商地图",
    },
  },

  traction: {
    heading: "市场验证",
    subtitle: "平台已上线，合规已验证，市场已参与",
    stats: [
      { value: "已上线", label: "平台地址 app.verdaxis.exchange" },
      { value: "6", label: "合规框架" },
      { value: "150+", label: "已收录的生产项目" },
      { value: "运行中", label: "试点项目" },
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
      { title: "平台 MVP 上线", date: "2026年第一季度" },
      { title: "合规引擎 v1", date: "2026年第一季度" },
      { title: "AI 智能助手 Beta 版", date: "2026年第二季度" },
      { title: "首笔收入", date: "2026年第二季度" },
      { title: "创始会员计划", date: "2026年第二季度" },
    ],
  },

  competitive: {
    heading: "竞争优势",
    subtitle: "统一生态系统 vs. 单点解决方案",
    dimensions: [
      "燃料交易与撮合",
      "EU ETS 合规",
      "FuelEU Maritime 追踪",
      "船员培训",
      "集成数据分析",
    ],
    competitors: [
      {
        name: "传统经纪商",
        scores: {
          "燃料交易与撮合": "partial",
          "EU ETS 合规": "none",
          "FuelEU Maritime 追踪": "none",
          "船员培训": "none",
          "集成数据分析": "none",
        },
      },
      {
        name: "合规 SaaS 软件",
        scores: {
          "燃料交易与撮合": "none",
          "EU ETS 合规": "full",
          "FuelEU Maritime 追踪": "partial",
          "船员培训": "none",
          "集成数据分析": "partial",
        },
      },
      {
        name: "燃料供应平台",
        scores: {
          "燃料交易与撮合": "full",
          "EU ETS 合规": "none",
          "FuelEU Maritime 追踪": "none",
          "船员培训": "none",
          "集成数据分析": "none",
        },
      },
    ],
    verdaxisScores: {
      "燃料交易与撮合": "full",
      "EU ETS 合规": "full",
      "FuelEU Maritime 追踪": "full",
      "船员培训": "full",
      "集成数据分析": "full",
    },
  },

  flywheel: {
    heading: "生态飞轮",
    subtitle: "依托 MarinaChain 400多艘船舶基础，从第一天起即拥有网络优势",
    nodes: [
      { label: "MarinaChain 网络", description: "400多艘船舶已在平台上——即时分发渠道" },
      { label: "创始会员", description: "早期用户享有优惠定价和功能建议权" },
      { label: "市场流动性", description: "更多参与者 = 更窄价差 = 所有人享有更优价格" },
      { label: "数据智能", description: "交易数据驱动市场洞察和 AI 能力" },
      { label: "更多用户", description: "更优的数据和流动性吸引更多生产商和买家" },
    ],
    centerLabel: "Verdaxis 生态系统",
  },

  revenue: {
    heading: "收入模式",
    subtitle: "多元收入来源，单位经济效益清晰",
    streams: [
      {
        title: "交易佣金",
        description: "平台上每笔燃料交易收取0.5%的佣金。收入随交易量线性增长。",
        pricing: "每笔交易 0.5%",
        tag: "核心",
      },
      {
        title: "SaaS 订阅",
        description: "合规仪表盘和培训模块的月度订阅。船队合规按船计费。培训按用户计费。",
        pricing: "按船 / 按用户",
        tag: "经常性收入",
      },
      {
        title: "数据与分析",
        description: "高级市场情报、定价基准和合规分析。面向企业集成的 API 接口。",
        pricing: "分级方案",
        tag: "远期",
      },
    ],
    projectedLabel: "收入预测",
    growthStatement: "上线3年内实现1000万美元年经常性收入的增长路径",
  },

  team: {
    heading: "核心团队",
    subtitle: "海运、金融科技与合规领域的资深专家",
    members: [
      {
        name: "Dan Ha",
        role: "首席执行官兼联合创始人",
        bio: "连续创业者，拥有深厚的海运科技经验。此前创立了 MarinaChain，为航运业打造 AI 驱动的解决方案。兼具技术愿景与商业执行力。",
        imageUrl: "/images/team/dan-ha.png",
        company: "marinachain",
      },
      {
        name: "Jon J",
        role: "首席运营官兼联合创始人",
        bio: "运营与产品负责人，在技术平台规模化方面经验丰富。主导 Verdaxis 的产品开发、合作伙伴关系和市场推广战略。",
        imageUrl: "/images/team/jon-j.png",
        company: "marinachain",
      },
      {
        name: "Chris Chatterton",
        role: "董事总经理",
        bio: "30余年海运和能源行业经验。前国际燃料行业协会（IBIA）副秘书长。在监管法规和行业网络方面拥有深厚积累。",
        imageUrl: "/images/team/chris-chatterton.jpg",
        company: "greenm",
      },
      {
        name: "Gavin McGrath",
        role: "执行主席",
        bio: "资深企业高管和董事会成员。在能源交易和海运服务领域拥有丰富经验。在市场开拓和公司治理方面担任战略顾问。",
        imageUrl: "/images/team/gavin-mcgrath.jpg",
        company: "greenm",
      },
    ],
  },

  financials: {
    heading: "融资需求",
    subtitle: "种子轮融资50万美元，把握替代燃料交易所机遇",
    roundType: "种子轮",
    totalRaise: "$500,000",
    tranches: [
      {
        name: "第一期",
        amount: "$250,000",
        trigger: "即刻启动",
        description: "上线 MVP，吸纳创始会员，实现首笔收入，建立新加坡桥头堡",
      },
      {
        name: "第二期",
        amount: "$250,000",
        trigger: "达到业务里程碑后",
        description: "扩大用户获取，拓展鹿特丹枢纽，启动实时竞价，加速合规覆盖",
      },
    ],
    allocations: [
      { label: "工程与产品", percentage: "45%" },
      { label: "销售与市场", percentage: "25%" },
      { label: "合规与法律", percentage: "15%" },
      { label: "运营", percentage: "15%" },
    ],
    ctaText: "携手共建可持续燃料交易的未来",
  },

  roadmap: {
    heading: "愿景与路线图",
    subtitle: "从新加坡桥头堡到全球行业标准",
    phases: [
      {
        year: "2026",
        title: "启动 \u2014 新加坡桥头堡",
        items: [
          "甲醇与生物燃料交易上线",
          "创始会员计划",
          "合规引擎（FuelEU、EU ETS）",
          "AI 智能助手 Beta 版",
          "首笔收入里程碑",
        ],
      },
      {
        year: "2027",
        title: "扩张 \u2014 多枢纽布局",
        items: [
          "鹿特丹枢纽启动",
          "新增燃料类型（乙醇、生物液化天然气）",
          "实时竞价交易所",
          "培训模块上线",
          "A 轮融资筹备",
        ],
      },
      {
        year: "2028+",
        title: "规模化 \u2014 全球标准",
        items: [
          "全球枢纽网络",
          "衍生品与期货交易",
          "全面监管覆盖",
          "\"替代燃料领域的 Bloomberg\"",
        ],
      },
    ],
    visionStatement: "成为替代燃料领域的 Bloomberg \u2014 全球可持续海运燃料市场运营的权威平台。",
  },

  nav: {
    goToFirst: "回到第一页",
    previousSlide: "上一页",
    nextSlide: "下一页",
  },

  branches: {
    marketSizing: {
      title: "市场规模详情",
      tam: {
        label: "潜在市场总量",
        value: "$300B",
        source: "IEA, Clarksons Research",
        description: "全球海运燃料市场，涵盖所有船舶类型和燃料品类。在船队扩张和监管合规成本推动下，年均增长率为3-4%。",
      },
      sam: {
        label: "可服务目标市场",
        value: "$50B",
        source: "DNV, McKinsey Maritime Energy Transition",
        description: "2030年替代及低碳海运燃料市场。包括甲醇、生物燃料、生物液化天然气、电制燃料和氢能。增速最快的细分市场，年均增长率超过25%。",
      },
      som: {
        label: "可获取目标市场",
        value: "$5B",
        source: "MPA Singapore, Port of Rotterdam",
        description: "新加坡及全球主要加油港的现货市场交易量。我们的桥头堡战略优先瞄准交易量最大、数字化程度最高的市场。",
      },
    },
    complianceEngine: {
      title: "合规引擎深度解析",
      frameworks: [
        { name: "FuelEU Maritime", description: "针对停靠欧盟港口船舶的温室气体强度减排目标。2025年起实施阶梯式处罚。", status: "已生效" },
        { name: "EU ETS", description: "排放交易体系扩展至海运业。要求 MRV 报告。碳配额成本持续上升。", status: "已生效" },
        { name: "RED III", description: "可再生能源指令 III 明确可持续燃料标准。RFNBO 认证要求。", status: "已生效" },
        { name: "IMO NZF", description: "净零框架，目标2050年实现脱碳。中期措施预计2027年出台。燃料标准和碳税。", status: "即将实施" },
        { name: "US 45Z", description: "替代 45V 的清洁燃料生产税收抵免。基于碳强度的可持续燃料生产商激励机制。", status: "已生效" },
        { name: "CORSIA", description: "国际航空碳抵消与减排计划。与可持续燃料认证交叉适用。", status: "已生效" },
      ],
    },
    aiCopilot: {
      title: "AI 智能助手 \u2014 智能辅助工具",
      capabilities: [
        { name: "市场查询", description: "\"本周新加坡最便宜的生物甲醇是哪家？\" \u2014 从订单簿获取实时定价" },
        { name: "合规分析", description: "\"我第三季度的 FuelEU Maritime 合规缺口是多少？\" \u2014 计算缺口并建议燃料切换方案" },
        { name: "航线优化", description: "\"优化新加坡至鹿特丹的燃料计划\" \u2014 综合考虑港口燃料供应、碳强度评分和成本" },
        { name: "法规动态", description: "\"上个月 RED III 有什么变化？\" \u2014 跨框架监测监管法规动态" },
        { name: "组合分析", description: "\"展示我船队的平均 CII 趋势\" \u2014 汇总船舶数据，提供船队级别洞察" },
      ],
    },
    producerMap: {
      title: "全球生产商地图",
      stats: [
        { value: "150+", label: "生产项目" },
        { value: "40+", label: "覆盖国家" },
        { value: "6", label: "燃料类型" },
      ],
      regions: [
        "北欧（斯堪的纳维亚、荷兰、德国）",
        "地中海（西班牙、意大利、希腊）",
        "东南亚（新加坡、马来西亚、印度尼西亚）",
        "东亚（中国、韩国、日本）",
        "中东（阿联酋、沙特阿拉伯、阿曼）",
        "美洲（美国墨西哥湾、巴西、智利）",
      ],
    },
    businessModel: {
      title: "商业模式详情",
      streams: [
        { name: "交易佣金", description: "每笔完成的燃料交易收取0.5%佣金。平均交易规模5万至50万美元。收入随平台交易量线性增长。", pricing: "每笔交易 0.5%" },
        { name: "船队合规 SaaS", description: "合规仪表盘按船月度订阅。追踪 EU ETS、FuelEU 及其他框架。自动化 MRV 报告。", pricing: "$200-500/船/月" },
        { name: "培训平台", description: "替代燃料培训模块按用户计费。证书追踪管理。法规更新推送。", pricing: "$50-100/用户/月" },
        { name: "市场数据 API", description: "企业级 API 接口，提供定价数据、市场分析和合规基准。按查询量分级计费。", pricing: "$1,000-10,000/月" },
      ],
    },
  },
};
