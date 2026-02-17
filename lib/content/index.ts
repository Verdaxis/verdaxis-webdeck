import type { DeckContent } from "./types";
import { en } from "./en";

export type { DeckContent };
export { en };

const localeLoaders: Record<string, () => Promise<{ default: DeckContent }>> = {
  ko: () => import("./ko"),
  zh: () => import("./zh"),
  nl: () => import("./nl"),
  fr: () => import("./fr"),
  ja: () => import("./ja"),
};

export async function loadContent(locale: string): Promise<DeckContent> {
  if (locale === "en" || !localeLoaders[locale]) return en;
  try {
    const mod = await localeLoaders[locale]();
    return mod.default;
  } catch {
    return en;
  }
}

export function getContentSync(locale: string): DeckContent {
  // Synchronous access only works for English (bundled).
  // Non-English locales must be loaded async via loadContent().
  return en;
}
