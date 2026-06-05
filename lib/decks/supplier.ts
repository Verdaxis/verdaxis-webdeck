import type { DeckConfig } from "./types";
import { marketSlides } from "./sales";

const supplier: DeckConfig = {
  slug: "supplier",
  kind: "market",
  audience: "supplier",
  responsive: true,
  title: "Verdaxis — Supplier Deck",
  description: "Supplier-focused deck for fuel providers listing verified supply on Verdaxis.",
  slides: marketSlides,
};

export default supplier;
