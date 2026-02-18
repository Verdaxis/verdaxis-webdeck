"use client";

import { motion } from "framer-motion";

interface SubSlideNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onBack: () => void;
}

export default function SubSlideNavigation({
  current,
  total,
  onPrev,
  onNext,
  onBack,
}: SubSlideNavigationProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-white/90 backdrop-blur-sm">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400">
          {current + 1} / {total}
        </span>
        <div className="w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-verdaxis-blue rounded-full"
            animate={{ width: `${((current + 1) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
