export interface SlideEntry {
  id: string;
  branches?: string[];
  noBranches?: true;
}

export type DeckKind = "vc" | "market";
export type DeckAudience = "sales" | "buyer" | "supplier";

export interface DeckConfig {
  slug: string;
  title: string;
  description: string;
  kind: DeckKind;
  audience?: DeckAudience;
  responsive?: boolean;
  hidden?: boolean;
  aliasOf?: string;
  slides: SlideEntry[];
}
