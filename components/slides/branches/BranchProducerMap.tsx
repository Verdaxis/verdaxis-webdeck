"use client";

import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function LocationPin() {
  return (
    <svg
      className="w-4 h-4 text-verdaxis-blue flex-shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M8 1.5C5.24 1.5 3 3.74 3 6.5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Simplified world map outline with region marker dots
function WorldMapSVG() {
  return (
    <motion.svg
      viewBox="0 0 800 400"
      className="w-full h-auto opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Simplified continent outlines */}
      {/* North America */}
      <path
        d="M120 80 L180 60 L220 80 L230 120 L210 160 L180 180 L150 200 L130 180 L100 160 L90 120 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* South America */}
      <path
        d="M180 210 L200 200 L220 220 L230 260 L220 310 L200 340 L180 330 L170 290 L160 250 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* Europe */}
      <path
        d="M370 60 L400 50 L430 60 L440 80 L420 100 L400 110 L380 100 L370 80 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* Africa */}
      <path
        d="M380 130 L420 120 L450 140 L460 200 L440 260 L410 290 L380 270 L370 220 L360 170 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* Middle East */}
      <path
        d="M460 110 L500 100 L520 120 L510 150 L490 160 L460 140 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* Asia */}
      <path
        d="M500 50 L580 40 L650 60 L680 100 L670 140 L640 160 L600 170 L560 150 L530 120 L510 80 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />
      {/* Southeast Asia */}
      <path
        d="M600 180 L640 170 L660 190 L650 220 L630 230 L610 220 L600 200 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
      />

      {/* Region marker dots */}
      {/* Northern Europe */}
      <motion.circle variants={dotVariants} cx="400" cy="65" r="5" className="fill-verdaxis-blue" />
      <motion.circle variants={dotVariants} cx="400" cy="65" r="10" className="fill-verdaxis-blue/20" />

      {/* Mediterranean */}
      <motion.circle variants={dotVariants} cx="410" cy="100" r="5" className="fill-verdaxis-blue" />
      <motion.circle variants={dotVariants} cx="410" cy="100" r="10" className="fill-verdaxis-blue/20" />

      {/* Southeast Asia */}
      <motion.circle variants={dotVariants} cx="630" cy="195" r="5" className="fill-emerald" />
      <motion.circle variants={dotVariants} cx="630" cy="195" r="10" className="fill-emerald/20" />

      {/* East Asia */}
      <motion.circle variants={dotVariants} cx="660" cy="100" r="5" className="fill-verdaxis-blue" />
      <motion.circle variants={dotVariants} cx="660" cy="100" r="10" className="fill-verdaxis-blue/20" />

      {/* Middle East */}
      <motion.circle variants={dotVariants} cx="490" cy="130" r="5" className="fill-gold-accent" />
      <motion.circle variants={dotVariants} cx="490" cy="130" r="10" className="fill-gold-accent/20" />

      {/* Americas (US Gulf, Brazil, Chile) */}
      <motion.circle variants={dotVariants} cx="165" cy="150" r="5" className="fill-gold-accent" />
      <motion.circle variants={dotVariants} cx="165" cy="150" r="10" className="fill-gold-accent/20" />
      <motion.circle variants={dotVariants} cx="210" cy="290" r="4" className="fill-emerald" />
      <motion.circle variants={dotVariants} cx="210" cy="290" r="9" className="fill-emerald/20" />
    </motion.svg>
  );
}

export default function BranchProducerMap() {
  const t = useContent();
  const { stats, regions } = t.branches.producerMap;

  return (
    <motion.div
      className="flex flex-col gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Stat boxes */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
          >
            <div className="text-xl font-heading font-bold text-gold-accent">
              {stat.value}
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* World map */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 overflow-hidden"
      >
        <WorldMapSVG />
      </motion.div>

      {/* Region cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {regions.map((region) => (
          <motion.div
            key={region}
            variants={itemVariants}
            className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5"
          >
            <LocationPin />
            <span className="text-xs text-white/60 leading-snug">{region}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
