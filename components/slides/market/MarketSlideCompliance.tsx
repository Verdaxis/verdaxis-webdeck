"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useMarketContent } from "@/lib/marketI18n";

function getFrameworkTone(index: number) {
  return index % 2 === 0
    ? {
        statusColor: "bg-brand-green/15 text-brand-green border-brand-green/25",
        accentColor: "border-l-brand-green",
      }
    : {
        statusColor: "bg-verdaxis-blue/15 text-verdaxis-blue border-verdaxis-blue/25",
        accentColor: "border-l-verdaxis-blue",
      };
}

export default function MarketSlideCompliance() {
  const content = useMarketContent().compliance;

  return (
    <SlideWrapper>
      <SlideBackground variant="mesh" tint="green" />
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-brand-green rounded-full" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            {content.heading}
          </h2>
        </motion.div>
        <motion.p className="text-slate-500 text-sm md:text-base mb-8 ml-[20px]" variants={fadeInUp}>
          {content.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
            {content.frameworks.map((framework, i) => {
              const tone = getFrameworkTone(i);
              return (
                <motion.div
                  key={framework.name}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                  }}
                  className={`relative p-5 rounded-xl bg-white border border-slate-200 border-l-4 ${tone.accentColor} shadow-card hover:shadow-card-hover transition-all duration-200`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-sm font-semibold text-slate-900">{framework.name}</h3>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${tone.statusColor}`}
                    >
                      {framework.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{framework.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-5">
            <div className="rounded-xl bg-white border border-slate-200 shadow-card p-6 flex-1">
              <div className="flex items-center gap-2 mb-5">
                <svg
                  className="w-5 h-5 text-verdaxis-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
                <h3 className="font-heading text-sm font-semibold text-slate-800">
                  {content.scenario.title}
                </h3>
                <span className="ml-auto text-[11px] font-semibold text-verdaxis-blue bg-verdaxis-blue/10 px-2 py-0.5 rounded-full border border-verdaxis-blue/20">
                  {content.scenario.badge}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 rounded-lg bg-slate-100 border border-slate-200 px-4 py-2.5 text-center">
                  <span className="block text-[11px] text-slate-400 mb-0.5">
                    {content.scenario.fromLabel}
                  </span>
                  <span className="font-heading text-sm font-bold text-slate-700">
                    {content.scenario.from}
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-verdaxis-blue flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <div className="flex-1 rounded-lg bg-brand-green/10 border border-brand-green/20 px-4 py-2.5 text-center">
                  <span className="block text-[11px] text-brand-green/70 mb-0.5">
                    {content.scenario.toLabel}
                  </span>
                  <span className="font-heading text-sm font-bold text-brand-green">
                    {content.scenario.to}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {content.scenario.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-slate-50 border border-slate-100 p-3">
                    <span
                      className={`block font-heading text-xl font-bold ${
                        metric.tone === "green" ? "text-brand-green" : "text-verdaxis-blue"
                      }`}
                    >
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-slate-400">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-5 py-4 flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-green flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <p className="text-xs text-slate-300">{content.dashboardNote}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
