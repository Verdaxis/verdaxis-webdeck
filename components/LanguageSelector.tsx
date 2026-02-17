"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

const LOCALES = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ko", flag: "🇰🇷", label: "KO" },
  { code: "zh", flag: "🇨🇳", label: "ZH" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "ja", flag: "🇯🇵", label: "JA" },
] as const;

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors text-sm"
        aria-label="Change language"
      >
        <span className="text-base leading-none">{current.flag}</span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 right-0 bg-deep-dark/95 backdrop-blur-md border border-white/15 rounded-lg overflow-hidden shadow-xl shadow-black/30 min-w-[120px]">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                l.code === locale
                  ? "bg-verdaxis-blue/15 text-verdaxis-blue"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span className="font-medium">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
