"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const PILOT_REFERRAL_CODE = "VDX-CHRIS1";
const PILOT_SIGNUP_URL = `https://app.verdaxis.exchange/register?ref=${PILOT_REFERRAL_CODE}`;
// Temporary placeholder until the walkthrough video is produced.
const PILOT_WALKTHROUGH_URL = "https://www.youtube.com/watch?v=ScMzIvxBSi4";

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
          <Image
            src="/images/logos/verdaxis-logo-words-bottom.png"
            alt="Verdaxis"
            width={180}
            height={180}
            className="relative h-28 w-28 md:h-36 md:w-36 object-contain"
          />
        </motion.div>

        {/* Company name */}
        <motion.span
          variants={fadeInUp}
          className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-verdaxis-blue"
        >
          Pilot Launch
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-slate-900"
        >
          Request pilot access to Verdaxis
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed"
        >
          The compliance-first marketplace for verified sustainable marine fuels,
          built for buyers and suppliers joining the pilot.
        </motion.p>

        {/* CTA button */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href={PILOT_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-verdaxis-blue px-8 py-3.5 text-sm font-heading font-semibold text-white shadow-card-hover transition-all duration-200 hover:bg-verdaxis-dark-blue hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdaxis-blue"
          >
            Join the Pilot
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={PILOT_WALKTHROUGH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-heading font-medium text-slate-700 shadow-card transition-all duration-200 hover:border-verdaxis-blue/40 hover:text-verdaxis-blue hover:-translate-y-0.5"
          >
            Watch Walkthrough
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
