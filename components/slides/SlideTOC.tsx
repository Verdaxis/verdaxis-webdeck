"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { DeckConfig } from "@/lib/decks/types";

const sectionColors: Record<string, { text: string; bg: string; border: string }> = {
  Introduction: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/20" },
  Opportunity: { text: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20" },
  Solution: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/20" },
  Market: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Product: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/20" },
  Traction: { text: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20" },
  Competitive: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Growth: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Business: { text: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20" },
  Team: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/20" },
  Financials: { text: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20" },
  Roadmap: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
};

interface SlideTOCProps {
  onGoTo: (index: number) => void;
  deck: DeckConfig;
}

export default function SlideTOC({ onGoTo, deck }: SlideTOCProps) {
  const t = useContent();

  const entries = deck.slides
    .map((entry, index) => ({
      index,
      id: entry.id,
      title: t.slides[entry.id]?.title ?? entry.id,
      section: t.slides[entry.id]?.section ?? "",
    }))
    .filter((entry) => entry.id !== "toc");

  return (
    <SlideWrapper>
      <SlideBackground variant="grid" />
      <motion.div
        className="w-full max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            {t.toc.heading}
          </h2>
        </motion.div>

        <motion.p
          className="text-slate-500 text-sm md:text-base mb-10 ml-6"
          variants={fadeInUp}
        >
          {t.toc.subheading}
        </motion.p>

        {/* Grid of entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {entries.map((entry, i) => {
            const colors = sectionColors[entry.section] ?? sectionColors.Introduction;
            return (
              <motion.button
                key={entry.id}
                variants={fadeInUp}
                onClick={() => onGoTo(entry.index)}
                className="group flex items-center gap-4 px-5 py-4 rounded-xl
                  bg-white border border-slate-200 shadow-card backdrop-blur-md
                  hover:bg-slate-50 hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1
                  transition-all duration-300 text-left cursor-pointer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Slide number */}
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 text-sm font-heading font-semibold group-hover:text-slate-600 transition-colors">
                  {i + 1}
                </span>

                {/* Title */}
                <span className="flex-1 text-slate-700 text-sm md:text-base font-medium group-hover:text-slate-900 transition-colors truncate">
                  {entry.title}
                </span>

                {/* Section tag */}
                <span
                  className={`flex-shrink-0 text-xs font-heading font-semibold px-3 py-1 rounded-full border ${colors.text} ${colors.bg} ${colors.border}`}
                >
                  {entry.section}
                </span>

                {/* Arrow */}
                <svg
                  className="flex-shrink-0 w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
