"use client";

import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

// Left border color progression: brand-green (primary) -> blended -> verdaxis-blue (growth)
const borderColors = [
  "border-l-brand-green",
  "border-l-brand-green",
  "border-l-verdaxis-blue",
  "border-l-verdaxis-dark-blue",
];

export default function BranchBusinessModel() {
  const t = useContent();
  const { streams } = t.branches.businessModel;

  return (
    <motion.div
      className="flex flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {streams.map((stream, index) => (
        <motion.div
          key={stream.name}
          variants={cardVariants}
          className={`rounded-xl border border-slate-200 bg-slate-50 p-4 border-l-[3px] ${borderColors[index] || borderColors[borderColors.length - 1]} hover:bg-white hover:shadow-card transition-all duration-200`}
        >
          {/* Header: name + pricing badge */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="text-sm font-heading font-bold text-slate-900">
              {stream.name}
            </h4>
            <span className="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
              {stream.pricing}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-500 leading-relaxed">
            {stream.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
