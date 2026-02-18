"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { DeckContent } from "@/lib/content/types";
import { en, loadContent } from "@/lib/content";

interface I18nContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  t: DeckContent;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

const SUPPORTED_LOCALES = ["zh", "de", "nl", "fr", "pt"];

function detectInitialLocale(): string {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang && lang !== "en") return lang;
  if (!lang) {
    const browserLang = navigator.language.split("-")[0];
    if (SUPPORTED_LOCALES.includes(browserLang)) return browserLang;
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(detectInitialLocale);
  const [content, setContent] = useState<DeckContent>(en);

  // Load non-English content on mount when detected locale differs
  useEffect(() => {
    if (locale !== "en") {
      loadContent(locale).then(setContent);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    if (newLocale === "en") {
      setContent(en);
    } else {
      loadContent(newLocale).then(setContent);
    }
    // Update URL param
    const url = new URL(window.location.href);
    if (newLocale === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", newLocale);
    }
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: content }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Returns the full DeckContent for the current locale */
export function useContent(): DeckContent {
  return useContext(I18nContext).t;
}

/** Returns locale, setLocale, and t (content) */
export function useI18n() {
  return useContext(I18nContext);
}
