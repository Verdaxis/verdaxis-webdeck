import type { DeckConfig } from "./types";
import { marketSlides } from "./sales";

const user: DeckConfig = {
  slug: "user",
  kind: "market",
  audience: "sales",
  responsive: true,
  hidden: true,
  aliasOf: "sales",
  title: "Verdaxis — Sales Deck",
  description: "Legacy alias route for the canonical Verdaxis sales deck.",
  slides: marketSlides,
};

export default user;
