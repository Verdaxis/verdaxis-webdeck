"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useMarketContent } from "@/lib/marketI18n";

const toneStyles = {
  blue: {
    border: "border-t-verdaxis-blue",
    icon: "text-verdaxis-blue bg-verdaxis-blue/10 border-verdaxis-blue/15",
    connector: "rgba(93,173,226,0.25)",
    glow: "rgba(93,173,226,0.08)",
  },
  green: {
    border: "border-t-brand-green",
    icon: "text-brand-green bg-brand-green/10 border-brand-green/15",
    connector: "rgba(76,175,80,0.25)",
    glow: "rgba(76,175,80,0.08)",
  },
  dark: {
    border: "border-t-slate-900",
    icon: "text-slate-700 bg-slate-100 border-slate-200",
    connector: "rgba(15,23,42,0.22)",
    glow: "rgba(15,23,42,0.06)",
  },
} as const;

function StepIcon({ iconKey }: { iconKey: string }) {
  switch (iconKey) {
    case "register":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    case "list":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
      );
    case "trade":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function MarketSlideHowItWorks() {
  const content = useMarketContent().howItWorks;

  return (
    <SlideWrapper>
      <SlideBackground variant="orbs" tint="mixed" />
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            {content.heading}
          </h2>
        </motion.div>
        <motion.p className="text-slate-500 text-sm md:text-base mb-10 ml-[20px]" variants={fadeInUp}>
          {content.subtitle}
        </motion.p>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute top-16 left-0 right-0 pointer-events-none z-0"
            variants={fadeInUp}
            aria-hidden="true"
          >
            <svg className="w-full h-8" viewBox="0 0 900 32" preserveAspectRatio="none" fill="none">
              <path
                d="M200 16 H400"
                stroke={toneStyles.blue.connector}
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <polygon points="395,12 405,16 395,20" fill="rgba(93,173,226,0.4)" />
              <path
                d="M500 16 H700"
                stroke={toneStyles.green.connector}
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <polygon points="695,12 705,16 695,20" fill="rgba(76,175,80,0.4)" />
            </svg>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.steps.map((step, index) => {
              const tone = toneStyles[step.tone];
              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.97 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: "spring", stiffness: 105, damping: 16, delay: index * 0.14 },
                    },
                  }}
                  className={`relative overflow-hidden rounded-2xl bg-white border border-slate-200 border-t-2 ${tone.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className="absolute inset-x-4 top-0 h-[2px] rounded-full opacity-70"
                    style={{
                      background:
                        step.tone === "blue"
                          ? "linear-gradient(90deg, rgba(93,173,226,0), rgba(93,173,226,0.9), rgba(93,173,226,0))"
                          : step.tone === "green"
                            ? "linear-gradient(90deg, rgba(76,175,80,0), rgba(76,175,80,0.9), rgba(76,175,80,0))"
                            : "linear-gradient(90deg, rgba(15,23,42,0), rgba(15,23,42,0.65), rgba(15,23,42,0))",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -top-8 -right-8 h-28 w-28 rounded-full blur-2xl opacity-60 pointer-events-none"
                    style={{ background: tone.glow }}
                    aria-hidden="true"
                  />

                  <span
                    className="font-mono text-4xl font-bold text-slate-900/10 absolute top-4 right-5 select-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <div className="relative p-6">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${tone.icon}`}
                    >
                      <StepIcon iconKey={step.iconKey} />
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.description}</p>

                    <ul className="flex flex-col gap-1.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-xs text-slate-600">
                          <svg
                            className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                              step.tone === "green"
                                ? "text-brand-green"
                                : step.tone === "blue"
                                  ? "text-verdaxis-blue"
                                  : "text-slate-500"
                            }`}
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 8l3.5 3.5 6.5-7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-card"
        >
          <p className="text-sm text-slate-500 text-center">{content.note}</p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
