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
    transition: { duration: 0.4, ease: "easeOut" as const },
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
        const borderColor = isActive ? "border-l-verdaxis-blue" : "border-l-brand-green";
        const badgeBg = isActive
          ? "bg-brand-green/10 text-brand-green"
          : "bg-verdaxis-blue/10 text-verdaxis-blue";

        return (
          <motion.div
            key={fw.name}
            variants={cardVariants}
            className={`rounded-xl border border-slate-200 bg-slate-50 p-4 border-l-[3px] ${borderColor} hover:bg-white hover:shadow-card transition-all duration-200`}
          >
            {/* Header: name + status badge */}
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-heading font-bold text-slate-900">
                {fw.name}
              </h4>
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeBg}`}
              >
                {fw.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed">
              {fw.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
