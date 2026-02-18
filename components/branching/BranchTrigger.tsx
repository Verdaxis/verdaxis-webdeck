"use client";

import { motion } from "framer-motion";

interface BranchTriggerProps {
  label: string;
  onClick: () => void;
  variant?: "pill" | "card";
  icon?: React.ReactNode;
  className?: string;
}

export default function BranchTrigger({
  label,
  onClick,
  variant = "pill",
  icon,
  className = "",
}: BranchTriggerProps) {
  if (variant === "card") {
    return (
      <motion.button
        onClick={onClick}
        className={`group relative flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 hover:text-verdaxis-blue hover:border-verdaxis-blue/30 hover:bg-verdaxis-blue/5 hover:shadow-card transition-all ${className}`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
        <span>{label}</span>
        <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-verdaxis-blue transition-colors ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-1.5 rounded-full border border-verdaxis-blue/25 bg-verdaxis-blue/5 px-3 py-1.5 text-xs font-medium text-verdaxis-blue hover:text-verdaxis-dark-blue hover:border-verdaxis-blue/40 hover:bg-verdaxis-blue/10 transition-all ${className}`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.97 }}
    >
      {icon}
      <span>{label}</span>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
      {/* Subtle pulse */}
      <motion.span
        className="absolute inset-0 rounded-full border border-verdaxis-blue/15"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.button>
  );
}
