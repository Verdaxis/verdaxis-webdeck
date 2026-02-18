"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Score icon — full / partial / none
   ──────────────────────────────────────────── */

function ScoreIcon({ score }: { score: "full" | "partial" | "none" }) {
  if (score === "full") {
    return (
      <motion.div
        variants={scaleIn}
        className="flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 text-emerald"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
    );
  }

  if (score === "partial") {
    return (
      <motion.div
        variants={scaleIn}
        className="flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 12h12"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    );
  }

  // none
  return (
    <motion.div
      variants={scaleIn}
      className="flex items-center justify-center"
    >
      <svg
        className="w-4 h-4 text-slate-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Hero card — "Unified ecosystem"
   ──────────────────────────────────────────── */

function HeroCard({ subtitle }: { subtitle: string }) {
  return (
    <motion.div
      variants={scaleIn}
      className="relative flex items-center justify-center gap-3 mx-auto mb-6
        rounded-xl border border-verdaxis-blue/30 bg-verdaxis-blue/[0.06]
        px-6 py-3 max-w-md"
    >
      {/* Diamond / sparkle icon */}
      <svg
        className="relative w-5 h-5 text-verdaxis-blue flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>

      <span className="relative font-heading font-semibold text-sm sm:text-base text-verdaxis-blue">
        {subtitle}
      </span>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Stagger variant for table rows
   ──────────────────────────────────────────── */

const rowStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const rowFade = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ────────────────────────────────────────────
   Main slide
   ──────────────────────────────────────────── */

export default function SlideCompetitive() {
  const t = useContent();
  const { heading, subtitle, dimensions, competitors, verdaxisScores } = t.competitive;

  return (
    <SlideWrapper>
      <SlideBackground variant="waves" tint="blue" />
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Heading ── */}
        <motion.div className="flex items-center gap-4" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            {heading}
          </h2>
        </motion.div>

        {/* ── Hero card ── */}
        <HeroCard subtitle={subtitle} />

        {/* ── Comparison table ── */}
        <motion.div
          className="w-full overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-card"
          variants={fadeInUp}
        >
          <table className="w-full min-w-[600px] border-collapse">
            {/* Header */}
            <thead>
              <motion.tr variants={rowFade} className="bg-slate-50">
                <th className="text-left px-4 py-3 text-xs font-heading font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 w-[28%]">
                  {/* Dimension column header intentionally empty for clean look */}
                </th>
                {/* Verdaxis column — highlighted */}
                <th className="px-4 py-3 text-center border-b border-verdaxis-blue/30 w-[18%]">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-heading font-bold text-sm text-verdaxis-blue">
                      Verdaxis
                    </span>
                  </div>
                </th>
                {/* Competitor columns */}
                {competitors.map((comp) => (
                  <th
                    key={comp.name}
                    className="px-3 py-3 text-center border-b border-slate-100 w-[18%]"
                  >
                    <span className="font-heading font-semibold text-xs text-slate-400">
                      {comp.name}
                    </span>
                  </th>
                ))}
              </motion.tr>
            </thead>

            {/* Body */}
            <motion.tbody variants={rowStagger}>
              {dimensions.map((dim, i) => (
                <motion.tr
                  key={dim}
                  variants={rowFade}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  } hover:bg-slate-50 transition-colors`}
                >
                  {/* Dimension label */}
                  <td className="px-4 py-3 text-sm text-slate-700 font-medium border-r border-slate-100">
                    {dim}
                  </td>

                  {/* Verdaxis score — highlighted column */}
                  <td
                    className="px-4 py-3 text-center border-l border-r border-verdaxis-blue/20"
                    style={{
                      background: "rgba(93,173,226,0.04)",
                    }}
                  >
                    <ScoreIcon score={verdaxisScores[dim] ?? "full"} />
                  </td>

                  {/* Competitor scores */}
                  {competitors.map((comp) => (
                    <td
                      key={`${comp.name}-${dim}`}
                      className="px-3 py-3 text-center"
                    >
                      <ScoreIcon score={comp.scores[dim] ?? "none"} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        {/* ── Legend ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400"
          variants={fadeInUp}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Full
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none">
              <path d="M6 12h12" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
            </svg>
            Partial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            None
          </span>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
