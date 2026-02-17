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
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Left border color progression: gold (primary) -> blended -> verdaxis-blue (growth)
const borderColors = [
  "border-l-gold-accent",
  "border-l-gold-light",
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
          className={`rounded-xl border border-white/10 bg-white/[0.04] p-4 border-l-[3px] ${borderColors[index] || borderColors[borderColors.length - 1]}`}
        >
          {/* Header: name + pricing badge */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="text-sm font-heading font-bold text-white">
              {stream.name}
            </h4>
            <span className="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-gold-accent/15 text-gold-accent border border-gold-accent/20">
              {stream.pricing}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-white/45 leading-relaxed">
            {stream.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
