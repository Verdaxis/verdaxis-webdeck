import type { DeckContent } from "./types";
import { en } from "./en";

export type { DeckContent };
export { en };

export async function loadContent(locale: string): Promise<DeckContent> {
  switch (locale) {
    case "zh":
      return (await import("./zh")).zh;
    case "de":
      return (await import("./de")).de;
    case "nl":
      return (await import("./nl")).nl;
    case "fr":
      return (await import("./fr")).fr;
    case "pt":
      return (await import("./pt")).pt;
    default:
      return en;
  }
}

export function getContentSync(): DeckContent {
  return en;
}
