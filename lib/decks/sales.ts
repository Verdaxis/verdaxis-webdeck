import type { DeckConfig, SlideEntry } from "./types";

export const marketSlides: SlideEntry[] = [
  { id: "market-hero" },
  { id: "market-problem" },
  { id: "market-solution" },
  { id: "market-marketplace" },
  { id: "market-intelligence" },
  { id: "market-how-it-works" },
  { id: "market-get-started" },
];

const sales: DeckConfig = {
  slug: "sales",
  kind: "market",
  audience: "sales",
  responsive: true,
  title: "Verdaxis — Sales Deck",
  description: "Generic market-facing deck for prospective buyers and suppliers evaluating Verdaxis.",
  slides: marketSlides,
};

export default sales;
