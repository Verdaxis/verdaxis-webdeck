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
      borderClass: "border-white/15",
      valueColor: "text-gold-accent",
      labelColor: "text-gold-accent/80",
      dotClass: "bg-gold-accent/60 border-gold-accent/30",
      bgClass: "bg-white/[0.04]",
    },
    {
      data: sam,
      borderClass: "border-verdaxis-blue/25",
      valueColor: "text-verdaxis-blue",
      labelColor: "text-verdaxis-blue/80",
      dotClass: "bg-verdaxis-blue/60 border-verdaxis-blue/30",
      bgClass: "bg-verdaxis-blue/[0.03]",
    },
    {
      data: som,
      borderClass: "border-emerald/25",
      valueColor: "text-emerald",
      labelColor: "text-emerald/80",
      dotClass: "bg-emerald/60 border-emerald/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
      bgClass: "bg-emerald/[0.03]",
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
          className={`relative rounded-xl border ${borderClass} ${bgClass} backdrop-blur-sm p-5 overflow-hidden`}
        >
          {/* Subtle glow for SOM card */}
          {glow && (
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald/10 blur-2xl rounded-full pointer-events-none" />
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
            <p className="text-sm text-white/50 leading-relaxed pl-6 mb-2">
              {data.description}
            </p>

            {/* Source citation */}
            <p className="text-xs italic text-white/30 pl-6">
              {data.source}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
