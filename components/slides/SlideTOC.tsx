"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { DeckConfig } from "@/lib/decks/types";

const sectionColors: Record<string, { text: string; bg: string; border: string }> = {
  Introduction: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/30" },
  Opportunity: { text: "text-gold-accent", bg: "bg-gold-accent/10", border: "border-gold-accent/30" },
  Solution: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/30" },
  Market: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Product: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/30" },
  Traction: { text: "text-gold-accent", bg: "bg-gold-accent/10", border: "border-gold-accent/30" },
  Competitive: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Growth: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
  Business: { text: "text-gold-accent", bg: "bg-gold-accent/10", border: "border-gold-accent/30" },
  Team: { text: "text-verdaxis-blue", bg: "bg-verdaxis-blue/10", border: "border-verdaxis-blue/30" },
  Financials: { text: "text-gold-accent", bg: "bg-gold-accent/10", border: "border-gold-accent/30" },
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
      <motion.div
        className="w-full max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.toc.heading}
          </h2>
        </motion.div>

        <motion.p
          className="text-white/50 text-sm md:text-base mb-10 ml-6"
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
                  bg-white/[0.04] border border-white/10 backdrop-blur-md
                  hover:bg-white/[0.08] hover:border-white/20
                  transition-all duration-300 text-left cursor-pointer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Slide number */}
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 text-sm font-heading font-semibold group-hover:text-white/70 transition-colors">
                  {i + 1}
                </span>

                {/* Title */}
                <span className="flex-1 text-white/80 text-sm md:text-base font-medium group-hover:text-white transition-colors truncate">
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
                  className="flex-shrink-0 w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors"
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
