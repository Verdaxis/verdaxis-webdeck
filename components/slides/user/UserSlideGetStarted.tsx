"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const trustSignals = [
  {
    label: "Built in Singapore",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "MPA Compliant",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "EU ETS Ready",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    label: "FuelEU Maritime",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
];

export default function UserSlideGetStarted() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <SlideBackground variant="mesh" tint="mixed" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center gap-8 w-full max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-3">
          <h2 className="font-display text-3xl md:text-5xl font-normal text-slate-900 leading-tight tracking-tight">
            Ready to Transform Your Fuel Procurement?
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join the compliance-first marketplace for sustainable marine fuels.
            Start free — upgrade when you need more.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://app.verdaxis.exchange"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-verdaxis-blue px-8 py-3.5 text-sm font-heading font-semibold text-white shadow-card-hover transition-all duration-200 hover:bg-verdaxis-dark-blue hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdaxis-blue"
          >
            Create Free Account
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:hello@verdaxis.exchange?subject=Book%20a%20Demo"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-heading font-medium text-slate-700 shadow-card transition-all duration-200 hover:border-verdaxis-blue/40 hover:text-verdaxis-blue hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </motion.div>

        {/* Email */}
        <motion.p variants={fadeInUp} className="text-sm text-slate-400">
          Questions?{" "}
          <a
            href="mailto:hello@verdaxis.exchange"
            className="text-verdaxis-blue hover:text-verdaxis-dark-blue transition-colors"
          >
            hello@verdaxis.exchange
          </a>
        </motion.p>

        {/* Trust signals */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          {trustSignals.map((signal) => (
            <motion.span
              key={signal.label}
              variants={scaleIn}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-card"
            >
              <span className="text-verdaxis-blue">{signal.icon}</span>
              {signal.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider + bottom note */}
        <motion.div variants={fadeInUp} className="w-full max-w-xs">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <p className="mt-4 text-[11px] text-slate-400 tracking-wide">
            No credit card required · Cancel anytime · Enterprise pricing available
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
