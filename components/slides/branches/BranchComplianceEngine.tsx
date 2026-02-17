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

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function BranchComplianceEngine() {
  const t = useContent();
  const { frameworks } = t.branches.complianceEngine;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {frameworks.map((fw) => {
        const isActive = fw.status === "Active";
        const borderColor = isActive ? "border-l-verdaxis-blue" : "border-l-gold-accent";
        const badgeBg = isActive
          ? "bg-emerald/15 text-emerald"
          : "bg-gold-accent/15 text-gold-accent";

        return (
          <motion.div
            key={fw.name}
            variants={cardVariants}
            className={`rounded-xl border border-white/10 bg-white/[0.04] p-4 border-l-[3px] ${borderColor}`}
          >
            {/* Header: name + status badge */}
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-heading font-bold text-white">
                {fw.name}
              </h4>
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeBg}`}
              >
                {fw.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-white/45 leading-relaxed">
              {fw.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
