"use client";

import { useCallback, useRef } from "react";
import { useContent } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoTo,
}: SlideNavigationProps) {
  const t = useContent();
  const trackRef = useRef<HTMLDivElement>(null);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const targetSlide = Math.round(ratio * (totalSlides - 1));
      onGoTo(Math.max(0, Math.min(totalSlides - 1, targetSlide)));
    },
    [totalSlides, onGoTo]
  );

  const progress =
    totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:flex items-center gap-3 px-4 md:px-6 py-3 bg-white/80 backdrop-blur-md border-t border-slate-200">
      {/* Home button (left) */}
      <button
        onClick={() => onGoTo(0)}
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-verdaxis-blue hover:border-verdaxis-blue/40 hover:bg-verdaxis-blue/5 transition-all"
        aria-label={t.nav.goToFirst}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 3V13M6 8L12 4V12L6 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Progress bar (center) */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="flex-1 h-1.5 bg-slate-200 rounded-full cursor-pointer relative group"
      >
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #5DADE2, #4CAF50)",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-verdaxis-blue rounded-full shadow-lg shadow-verdaxis-blue/20 transition-all duration-300 ease-out group-hover:scale-125"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>

      {/* Slide counter */}
      <span className="flex-shrink-0 text-slate-400 font-mono text-xs tabular-nums min-w-[3.5rem] text-center">
        {currentSlide + 1} / {totalSlides}
      </span>

      {/* Language selector + arrows (right side) */}
      <LanguageSelector />
      <div className="flex-shrink-0 flex items-center gap-1">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label={t.nav.previousSlide}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label={t.nav.nextSlide}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
