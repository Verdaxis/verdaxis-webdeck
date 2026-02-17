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

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState("en");
  const [content, setContent] = useState<DeckContent>(en);

  // Read ?lang= param on mount, or auto-detect from browser language
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang && lang !== "en") {
      setLocaleState(lang);
      loadContent(lang).then(setContent);
    } else if (!lang) {
      const browserLang = navigator.language.split("-")[0];
      const supported = ["ko", "zh", "nl", "fr", "ja"];
      if (supported.includes(browserLang)) {
        setLocaleState(browserLang);
        loadContent(browserLang).then(setContent);
      }
    }
  }, []);

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
