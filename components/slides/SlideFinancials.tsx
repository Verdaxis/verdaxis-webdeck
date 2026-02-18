"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Allocation bar segment colors
   ──────────────────────────────────────────── */

const allocationColors = [
  { bg: "bg-verdaxis-blue", label: "text-verdaxis-blue" },     // Engineering & Product
  { bg: "bg-brand-green", label: "text-brand-green" },         // Sales & Marketing
  { bg: "bg-emerald", label: "text-emerald" },                 // Compliance & Legal
  { bg: "bg-slate-300", label: "text-slate-500" },             // Operations
];

/* ────────────────────────────────────────────
   Main component
   ──────────────────────────────────────────── */

export default function SlideFinancials() {
  const t = useContent();
  const {
    heading,
    subtitle,
    roundType,
    totalRaise,
    tranches,
    allocations,
    ctaText,
  } = t.financials;

  return (
    <SlideWrapper>
      <SlideBackground variant="mesh" tint="mixed" />
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Heading ── */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-2"
            variants={fadeInUp}
          >
            <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
              {heading}
            </h2>
          </motion.div>
          <motion.p
            className="text-slate-500 text-base md:text-lg ml-[16px] max-w-2xl"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── Hero: total raise ── */}
        <motion.div
          variants={scaleIn}
          className="relative flex flex-col items-center text-center py-6"
        >
          {/* Round badge */}
          <span className="mb-3 inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-green">
            {roundType}
          </span>

          {/* Amount */}
          <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-brand-green">
            {totalRaise}
          </span>
        </motion.div>

        {/* ── Tranche cards ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer}
        >
          {tranches.map((tranche, i) => (
            <motion.div
              key={tranche.name}
              variants={fadeInUp}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-card
                px-6 py-6 transition-all duration-300
                hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-verdaxis-blue to-brand-green" />

              {/* Tranche label */}
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {tranche.name}
              </span>

              {/* Amount */}
              <span className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-3">
                {tranche.amount}
              </span>

              {/* Trigger badge */}
              <span className="self-start mb-3 inline-flex items-center gap-1.5 rounded-full border border-verdaxis-blue/25 bg-verdaxis-blue/10 px-3 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider text-verdaxis-blue">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {tranche.trigger}
              </span>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {tranche.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Use of funds allocation bar ── */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          {/* Horizontal bar */}
          <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-50">
            {allocations.map((alloc, i) => {
              const pct = parseInt(alloc.percentage, 10);
              const colors = allocationColors[i] ?? allocationColors[3];
              return (
                <motion.div
                  key={alloc.label}
                  className={`h-full ${colors.bg}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.15,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {allocations.map((alloc, i) => {
              const colors = allocationColors[i] ?? allocationColors[3];
              return (
                <div key={alloc.label} className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-sm flex-shrink-0 ${colors.bg}`}
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-sm font-heading font-bold ${colors.label}`}
                    >
                      {alloc.percentage}
                    </span>
                    <span className="text-xs text-slate-400 leading-tight truncate">
                      {alloc.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          variants={fadeInUp}
          className="relative text-center pt-4 pb-2"
        >
          <p className="relative font-heading text-xl md:text-2xl font-semibold text-slate-600 italic">
            {ctaText}
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
