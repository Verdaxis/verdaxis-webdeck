"use client";

import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function BranchMarketSizing() {
  const t = useContent();
  const { tam, sam, som } = t.branches.marketSizing;

  const cards = [
    {
      data: tam,
      borderClass: "border-slate-200",
      valueColor: "text-brand-green",
      labelColor: "text-brand-green",
      dotClass: "bg-brand-green/60 border-brand-green/20",
      bgClass: "bg-slate-50",
    },
    {
      data: sam,
      borderClass: "border-verdaxis-blue/25",
      valueColor: "text-verdaxis-blue",
      labelColor: "text-verdaxis-blue/80",
      dotClass: "bg-verdaxis-blue/60 border-verdaxis-blue/30",
      bgClass: "bg-slate-50",
    },
    {
      data: som,
      borderClass: "border-brand-green/25",
      valueColor: "text-brand-green",
      labelColor: "text-brand-green",
      dotClass: "bg-brand-green/60 border-brand-green/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
      bgClass: "bg-slate-50",
      glow: true,
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map(({ data, borderClass, valueColor, labelColor, dotClass, bgClass, glow }) => (
        <motion.div
          key={data.label}
          variants={cardVariants}
          className={`relative rounded-xl border ${borderClass} ${bgClass} p-5 overflow-hidden hover:bg-white hover:shadow-card transition-all duration-200`}
        >
          {/* Subtle glow for SOM card */}
          {glow && (
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-green/8 blur-2xl rounded-full pointer-events-none" />
          )}

          <div className="relative">
            {/* Top row: dot + label + value */}
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full border ${dotClass} flex-shrink-0`} />
              <span className={`text-sm font-heading font-semibold ${labelColor}`}>
                {data.label}
              </span>
              <span className={`ml-auto text-2xl font-heading font-bold ${valueColor}`}>
                {data.value}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed pl-6 mb-2">
              {data.description}
            </p>

            {/* Source citation */}
            <p className="text-xs italic text-slate-400 pl-6">
              {data.source}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
