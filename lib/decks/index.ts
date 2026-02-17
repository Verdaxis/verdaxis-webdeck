import type { DeckConfig } from "./types";
import vc from "./vc";

export const decks: Record<string, DeckConfig> = { vc };

export { type DeckConfig, type SlideEntry } from "./types";
