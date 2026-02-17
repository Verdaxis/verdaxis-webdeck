import type { DeckConfig } from "./types";
import vc from "./vc";
import sales from "./sales";
import portbase from "./portbase";

export const decks: Record<string, DeckConfig> = { vc, sales, "partners/portbase": portbase };

export { type DeckConfig, type SlideEntry } from "./types";
