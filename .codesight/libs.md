# Libraries

- `lib/content/index.ts` — function loadContent: (locale) => Promise<DeckContent>
- `lib/slideRegistry.ts`
  - function preloadSlideById: (id) => void
  - interface SlideRegistryEntry
  - const slideRegistry: Record<string, SlideRegistryEntry>
