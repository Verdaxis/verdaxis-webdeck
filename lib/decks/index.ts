import type { DeckConfig } from "./types";
import vc from "./vc";
import user from "./user";

export const decks: Record<string, DeckConfig> = { vc, user };

export { type DeckConfig, type SlideEntry } from "./types";
