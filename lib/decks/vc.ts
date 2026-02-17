import type { DeckConfig } from "./types";

const vc: DeckConfig = {
  slug: "vc",
  title: "Verdaxis \u2014 Investor Deck",
  description: "The trusted exchange for low-carbon fuels. Compliance-first marketplace for verified sustainable marine fuels.",
  slides: [
    { id: "vision" },
    { id: "toc" },
    { id: "why-now" },
    { id: "problem" },
    { id: "solution" },
    { id: "market", branches: ["market-sizing"] },
    { id: "product", branches: ["compliance-engine", "ai-copilot", "producer-map"] },
    { id: "traction" },
    { id: "competitive" },
    { id: "flywheel" },
    { id: "revenue", branches: ["business-model"] },
    { id: "team" },
    { id: "financials" },
    { id: "roadmap" },
  ],
};

export default vc;
