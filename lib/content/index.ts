import type { DeckContent } from "./types";
import { en } from "./en";

export type { DeckContent };
export { en };

export async function loadContent(locale: string): Promise<DeckContent> {
  return en;
}

export function getContentSync(): DeckContent {
  return en;
}
