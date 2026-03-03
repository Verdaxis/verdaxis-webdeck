"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    title: "Regulatory Maze",
    description:
      "FuelEU Maritime, EU ETS, and CII ratings across three overlapping frameworks — with escalating penalties and no unified compliance tool.",
    iconKey: "regulation",
    accent: {
      border: "border-t-red-500",
      dot: "bg-red-500",
      glow: "rgba(239,68,68,0.08)",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  },
  {
    title: "Opaque Markets",
    description:
      "No transparent, real-time pricing for sustainable marine fuels. Buyers overpay; sellers can't discover demand. Price discovery is done via email chains.",
    iconKey: "market",
    accent: {
      border: "border-t-amber-500",
      dot: "bg-amber-500",
      glow: "rgba(245,158,11,0.08)",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
  },
  {
    title: "Manual Processes",
    description:
      "RFQs by email, compliance tracked in spreadsheets, counterparty vetting done manually. The entire workflow is fragile, slow, and error-prone.",
    iconKey: "manual",
    accent: {
      border: "border-t-orange-500",
      dot: "bg-orange-500",
      glow: "rgba(249,115,22,0.08)",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  },
];

function ProblemIcon({ iconKey, className }: { iconKey: string; className?: string }) {
  const cls = className ?? "w-7 h-7";
  switch (iconKey) {
    case "regulation":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
    case "market":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
        </svg>
      );
    case "manual":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function UserSlideProblem() {
  return (
    <SlideWrapper>
      <SlideBackground variant="orbs" tint="blue" />
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            Maritime Decarbonization is Complex
          </h2>
        </motion.div>
        <motion.p className="text-slate-500 text-sm md:text-base mb-10 ml-[20px]" variants={fadeInUp}>
          Three critical barriers blocking the transition to sustainable marine fuels
        </motion.p>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.iconKey}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.12 },
                },
              }}
              className={`relative p-6 rounded-xl bg-white border border-slate-200 border-t-2 ${problem.accent.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden`}
            >
              {/* Pulsing dot */}
              <div className="absolute top-4 right-4" aria-hidden="true">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${problem.accent.dot} opacity-40`} />
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${problem.accent.dot} opacity-70`} />
                </span>
              </div>

              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${problem.accent.glow} 0%, transparent 70%)` }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className={`w-12 h-12 rounded-lg ${problem.accent.iconBg} border border-slate-100 flex items-center justify-center mb-4 ${problem.accent.iconColor}`}>
                  <ProblemIcon iconKey={problem.iconKey} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center gap-3 p-4 rounded-xl bg-verdaxis-blue/5 border border-verdaxis-blue/15"
        >
          <svg className="w-5 h-5 text-verdaxis-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <p className="text-sm text-slate-600">
            Verdaxis was built to solve exactly these three problems — in one platform.
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
