export interface SlideEntry {
  id: string;
  branches?: string[];
  noBranches?: true;
}

export interface DeckConfig {
  slug: string;
  title: string;
  description: string;
  slides: SlideEntry[];
}
