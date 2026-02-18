"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Stat card — large value + label
   ──────────────────────────────────────────── */

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const isText = value === "Live" || value === "Active";
  const valueColor = isText ? "text-emerald" : "text-brand-green";

  return (
    <motion.div
      variants={scaleIn}
      className="flex flex-col items-center justify-center gap-2 rounded-xl
        bg-white shadow-card border border-slate-200
        px-4 py-5 sm:px-6 sm:py-6 flex-1 min-w-0
        hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <span className={`font-heading text-2xl sm:text-3xl md:text-4xl font-bold ${valueColor}`}>
        {value}
      </span>
      <span className="text-slate-500 text-xs sm:text-sm text-center leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Framework badge — pill with green dot
   ──────────────────────────────────────────── */

function FrameworkBadge({ name }: { name: string }) {
  return (
    <motion.span
      variants={scaleIn}
      className="inline-flex items-center gap-2 rounded-full border border-brand-green/15
        bg-brand-green/8 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm
        font-medium text-brand-green"
    >
      {/* Green active dot */}
      <span className="inline-block h-2 w-2 rounded-full bg-emerald animate-pulse" />
      {name}
    </motion.span>
  );
}

/* ────────────────────────────────────────────
   Milestone timeline — horizontal connected dots
   ──────────────────────────────────────────── */

function MilestoneTimeline({
  milestones,
}: {
  milestones: { title: string; date: string }[];
}) {
  return (
    <div className="relative w-full overflow-x-auto">
      <div className="flex items-start justify-between min-w-[600px] md:min-w-0 relative px-2">
        {/* Connecting line */}
        <div
          className="absolute top-[11px] left-[20px] right-[20px] h-[2px] bg-slate-200"
          aria-hidden
        />

        {milestones.map((ms, i) => (
          <motion.div
            key={ms.title}
            className="relative flex flex-col items-center text-center flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: "easeOut" }}
          >
            {/* Dot */}
            <div className="relative z-10 h-6 w-6 rounded-full border-2 border-brand-green bg-white flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-green" />
            </div>

            {/* Title */}
            <span className="mt-3 text-xs sm:text-sm font-medium text-slate-700 leading-tight max-w-[100px] sm:max-w-[120px]">
              {ms.title}
            </span>

            {/* Date */}
            <span className="mt-1 text-[10px] sm:text-xs text-brand-green font-heading font-semibold">
              {ms.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main slide
   ──────────────────────────────────────────── */

export default function SlideTraction() {
  const t = useContent();
  const { heading, subtitle, stats, frameworks, milestones } = t.traction;

  return (
    <SlideWrapper>
      <SlideBackground variant="orbs" tint="green" />
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col gap-8"
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

        <motion.p
          className="text-slate-500 text-sm md:text-base -mt-4 ml-6"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>

        {/* ── Stat boxes ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          variants={staggerContainer}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </motion.div>

        {/* ── Compliance framework badges ── */}
        <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
          <span className="text-slate-400 text-xs font-heading font-semibold tracking-wider uppercase ml-1">
            {/* Compliance Frameworks label — derived from the data context */}
          </span>
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 justify-center"
            variants={staggerContainer}
          >
            {frameworks.map((fw) => (
              <FrameworkBadge key={fw} name={fw} />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Milestone timeline ── */}
        <motion.div className="mt-2" variants={fadeInUp}>
          <MilestoneTimeline milestones={milestones} />
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
