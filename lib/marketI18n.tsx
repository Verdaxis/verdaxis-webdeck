"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { DeckAudience } from "@/lib/decks/types";
import {
  DEFAULT_MARKET_LOCALE,
  getMarketContent,
  loadMarketContent,
  type MarketDeckContent,
} from "@/lib/content/market";

interface MarketI18nContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  audience: DeckAudience;
  content: MarketDeckContent;
}

const DEFAULT_AUDIENCE: DeckAudience = "sales";

const MarketI18nContext = createContext<MarketI18nContextValue>({
  locale: DEFAULT_MARKET_LOCALE,
  setLocale: () => {},
  audience: DEFAULT_AUDIENCE,
  content: getMarketContent(DEFAULT_AUDIENCE),
});

function detectInitialLocale(): string {
  if (typeof window === "undefined") return DEFAULT_MARKET_LOCALE;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang ?? DEFAULT_MARKET_LOCALE;
}

export function MarketI18nProvider({
  audience,
  children,
}: {
  audience: DeckAudience;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState(detectInitialLocale);
  const [content, setContent] = useState<MarketDeckContent>(() =>
    getMarketContent(audience, locale)
  );

  useEffect(() => {
    let mounted = true;
    void loadMarketContent(audience, locale).then((nextContent) => {
      if (mounted) setContent(nextContent);
    });
    return () => {
      mounted = false;
    };
  }, [audience, locale]);

  const setLocale = useCallback((nextLocale: string) => {
    setLocaleState(nextLocale || DEFAULT_MARKET_LOCALE);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (!nextLocale || nextLocale === DEFAULT_MARKET_LOCALE) {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", nextLocale);
    }
    window.history.replaceState(null, "", url.toString());
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, audience, content }),
    [locale, setLocale, audience, content]
  );

  return <MarketI18nContext.Provider value={value}>{children}</MarketI18nContext.Provider>;
}

export function useMarketContent(): MarketDeckContent {
  return useContext(MarketI18nContext).content;
}

export function useMarketI18n() {
  return useContext(MarketI18nContext);
}
