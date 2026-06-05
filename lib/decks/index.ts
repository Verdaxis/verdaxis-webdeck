import type { DeckConfig } from "./types";
import vc from "./vc";
import sales from "./sales";
import buyer from "./buyer";
import supplier from "./supplier";
import user from "./user";

export const decks: Record<string, DeckConfig> = { vc, sales, buyer, supplier, user };

export function resolveDeckConfig(slug: string): DeckConfig | undefined {
  const seen = new Set<string>();
  let current = decks[slug];

  while (current) {
    if (!current.aliasOf) return current;
    if (seen.has(current.slug)) return undefined;
    seen.add(current.slug);
    current = decks[current.aliasOf];
  }

  return undefined;
}

export { type DeckConfig, type SlideEntry } from "./types";
export { vc, sales, buyer, supplier, user };
