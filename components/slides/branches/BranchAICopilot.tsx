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

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function SparkleIcon() {
  return (
    <svg
      className="w-4 h-4 text-verdaxis-blue flex-shrink-0"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0l1.5 4.5L14 6l-4.5 1.5L8 12l-1.5-4.5L2 6l4.5-1.5L8 0z" />
      <path
        d="M12.5 9l.75 2.25L15.5 12l-2.25.75L12.5 15l-.75-2.25L9.5 12l2.25-.75L12.5 9z"
        opacity="0.5"
      />
    </svg>
  );
}

export default function BranchAICopilot() {
  const t = useContent();
  const { capabilities } = t.branches.aiCopilot;

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {capabilities.map((cap) => (
        <motion.div key={cap.name} variants={itemVariants} className="flex flex-col gap-1.5">
          {/* Question bubble */}
          <div className="flex items-start gap-2">
            <SparkleIcon />
            <div className="rounded-xl rounded-tl-sm border border-verdaxis-blue/20 bg-verdaxis-blue/[0.06] px-4 py-2.5 max-w-[90%]">
              <span className="text-sm font-heading font-semibold text-white/90">
                {cap.name}
              </span>
            </div>
          </div>

          {/* Answer */}
          <div className="ml-6 pl-4 border-l-2 border-white/[0.06]">
            <p className="text-xs text-white/50 leading-relaxed">
              {cap.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
