"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function UserSlideHero() {
  return (
    <SlideWrapper className="relative overflow-hidden bg-white">
      <SlideBackground variant="orbs" tint="mixed" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center gap-7 w-full max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={scaleIn} className="relative">
          <div
            className="absolute inset-0 -m-8 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(93,173,226,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <img
            src="/images/logos/verdaxis-icon.png"
            alt="Verdaxis"
            className="relative h-16 w-16 md:h-20 md:w-20 object-contain"
          />
        </motion.div>

        {/* Company name */}
        <motion.span
          variants={fadeInUp}
          className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-verdaxis-blue"
        >
          Verdaxis Exchange
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-slate-900"
        >
          Trade Sustainable Marine Fuels with Confidence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed"
        >
          The compliance-first marketplace connecting fuel buyers, sellers, and brokers
        </motion.p>

        {/* CTA button */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="https://app.verdaxis.exchange"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-verdaxis-blue px-8 py-3.5 text-sm font-heading font-semibold text-white shadow-card-hover transition-all duration-200 hover:bg-verdaxis-dark-blue hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdaxis-blue"
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-heading font-medium text-slate-700 shadow-card transition-all duration-200 hover:border-verdaxis-blue/40 hover:text-verdaxis-blue hover:-translate-y-0.5"
          >
            Watch Demo
          </a>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          variants={staggerContainer}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          {["FuelEU Ready", "EU ETS Compliant", "MPA Aligned", "Singapore HQ"].map(
            (pill) => (
              <motion.span
                key={pill}
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                {pill}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
