"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { useMarketContent } from "@/lib/marketI18n";

export default function MarketSlideGetStarted() {
  const content = useMarketContent().getStarted;

  return (
    <SlideWrapper className="relative overflow-hidden">
      <SlideBackground variant="mesh" tint="mixed" />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={staggerContainer} className="flex flex-col items-center text-center gap-6">
          <motion.div variants={scaleIn} className="relative">
            <div
              className="absolute inset-0 -m-8 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-verdaxis-blue to-brand-green flex items-center justify-center shadow-card-lg">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-3 max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl font-normal text-slate-900 leading-tight tracking-tight">
              {content.heading}
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">{content.subtitle}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <a
              href={content.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-verdaxis-blue px-8 py-3.5 text-sm font-heading font-semibold text-white shadow-card-hover transition-all duration-200 hover:bg-verdaxis-dark-blue hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdaxis-blue"
            >
              {content.primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-heading font-medium text-slate-700 shadow-card transition-all duration-200 hover:border-verdaxis-blue/40 hover:text-verdaxis-blue hover:-translate-y-0.5"
            >
              {content.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-slate-400">
            {content.supportLabel}{" "}
            <a
              href={content.supportHref}
              className="text-verdaxis-blue hover:text-verdaxis-dark-blue transition-colors"
            >
              {content.supportEmail}
            </a>
          </motion.p>

          <motion.p variants={fadeInUp} className="max-w-2xl text-xs text-slate-400 leading-relaxed">
            {content.footnote}
          </motion.p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
