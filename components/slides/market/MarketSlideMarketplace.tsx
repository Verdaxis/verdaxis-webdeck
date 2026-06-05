"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useMarketContent } from "@/lib/marketI18n";

function MarketplaceFeatureIcon({ iconKey }: { iconKey: string }) {
  switch (iconKey) {
    case "listings":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3"
          />
        </svg>
      );
    case "rfq":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.741c0-1.602 1.123-2.995 2.707-3.228A48.394 48.394 0 0112 3c2.392 0 4.744.175 7.043.513 1.584.233 2.707 1.626 2.707 3.228v6.018c0 1.6-1.123 2.994-2.707 3.227a48.172 48.172 0 01-3.423.379 1.14 1.14 0 00-.865.501L12 21l-2.755-4.133a1.14 1.14 0 00-.865-.501 48.172 48.172 0 01-3.423-.379c-1.584-.233-2.707-1.626-2.707-3.228V6.741z"
          />
        </svg>
      );
    case "matching":
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

function getFuelBadge(index: number) {
  const styles = [
    "bg-brand-green/10 text-brand-green border-brand-green/20",
    "bg-verdaxis-blue/10 text-verdaxis-blue border-verdaxis-blue/20",
    "bg-emerald/10 text-emerald border-emerald/20",
  ];
  return styles[index % styles.length];
}

export default function MarketSlideMarketplace() {
  const content = useMarketContent().marketplace;

  return (
    <SlideWrapper>
      <SlideBackground variant="grid" tint="blue" />
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
        <motion.p className="text-slate-500 text-sm md:text-base mb-8 ml-[20px]" variants={fadeInUp}>
          {content.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
            {content.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-verdaxis-blue/10 border border-verdaxis-blue/15 flex items-center justify-center text-verdaxis-blue group-hover:bg-verdaxis-blue group-hover:text-white transition-colors duration-200">
                  <MarketplaceFeatureIcon iconKey={feature.iconKey} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
            <div className="rounded-xl bg-white border border-slate-200 shadow-card p-5">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {content.fuelTypesLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.fuelTypes.map((fuel, index) => (
                  <div
                    key={fuel.name}
                    className={`inline-flex flex-col items-start px-3 py-2 rounded-lg border text-xs font-medium ${getFuelBadge(index)}`}
                  >
                    <span className="font-semibold">{fuel.name}</span>
                    <span className="font-mono opacity-70 text-[11px] mt-0.5">{fuel.ci}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 shadow-card p-5">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {content.keyPortsLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.ports.map((port) => (
                  <span
                    key={port}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600"
                  >
                    <svg
                      className="w-3 h-3 text-verdaxis-blue"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="3" />
                    </svg>
                    {port}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-verdaxis-blue/8 to-brand-green/8 border border-verdaxis-blue/15 p-5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">{content.liveDataLead}</span>{" "}
                {content.liveDataBody}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
