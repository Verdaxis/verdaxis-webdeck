import type { DeckConfig } from "./types";
import { marketSlides } from "./sales";

const buyer: DeckConfig = {
  slug: "buyer",
  kind: "market",
  audience: "buyer",
  responsive: true,
  title: "Verdaxis — Buyer Deck",
  description: "Buyer-focused deck for organizations procuring verified low-carbon marine fuels.",
  slides: marketSlides,
};

export default buyer;
