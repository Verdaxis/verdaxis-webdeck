import type { DeckAudience } from "@/lib/decks/types";
import { marketEnContent } from "./en";
import type { MarketDeckContent } from "./types";

export type { MarketDeckContent };
export { marketEnContent };

export const DEFAULT_MARKET_LOCALE = "en";

export function getMarketContent(
  audience: DeckAudience,
  locale: string = DEFAULT_MARKET_LOCALE
): MarketDeckContent {
  switch (locale) {
    default:
      return marketEnContent[audience] ?? marketEnContent.sales;
  }
}

export async function loadMarketContent(
  audience: DeckAudience,
  locale: string = DEFAULT_MARKET_LOCALE
): Promise<MarketDeckContent> {
  return getMarketContent(audience, locale);
}
