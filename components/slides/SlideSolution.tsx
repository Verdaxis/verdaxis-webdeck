"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/animations";

function PillarIcon({ iconKey }: { iconKey: string }) {
  const iconClass = "w-10 h-10 text-verdaxis-blue";

  switch (iconKey) {
    case "trading":
      return (
        <svg className={iconClass} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Exchange arrows with chart bars */}
          <rect x="6" y="22" width="5" height="10" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="13" y="16" width="5" height="16" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="20" y="10" width="5" height="22" rx="1" fill="currentColor" />
          <path d="M28 14l5-5m0 0l-3 0m3 0l0 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 26l-5 5m0 0l3 0m-3 0l0-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
      );
    case "compliance":
      return (
        <svg className={iconClass} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield with checkmark */}
          <path
            d="M20 4L6 10v10c0 8.4 5.96 16.26 14 18 8.04-1.74 14-9.6 14-18V10L20 4z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "training":
      return (
        <svg className={iconClass} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Book with brain/AI sparkle */}
          <path
            d="M8 6h10c2.2 0 4 1.8 4 4v22c0-1.66-1.34-3-3-3H8V6z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M32 6H22c-2.2 0-4 1.8-4 4v22c0-1.66 1.34-3 3-3h11V6z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.08"
          />
          {/* AI sparkle */}
          <circle cx="27" cy="14" r="1.5" fill="currentColor" />
          <path d="M27 10v2m0 4v2m-4-4h2m4 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SlideSolution() {
  const t = useContent();
  const { heading, subtitle, pillars } = t.solution;

  return (
    <SlideWrapper>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
            {heading}
          </h2>
        </motion.div>
        <motion.p
          className="text-slate-500 text-base md:text-lg mb-10 ml-[16px] max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        {/* Pillars */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connecting line behind the pillars (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] -translate-y-1/2 z-0">
            <div className="w-full h-full bg-gradient-to-r from-verdaxis-blue/0 via-verdaxis-blue/25 to-verdaxis-blue/0" />
            {/* Subtle glow */}
            <div className="absolute inset-0 blur-sm bg-gradient-to-r from-verdaxis-blue/0 via-verdaxis-blue/15 to-verdaxis-blue/0" />
          </div>

          {pillars.map((pillar, index) => {
            const isCenter = index === 1;
            return (
              <motion.div
                key={pillar.iconKey}
                variants={scaleIn}
                className={`
                  relative z-10 flex flex-col items-center text-center
                  rounded-2xl border border-slate-200 bg-white shadow-card
                  px-6 py-8 md:py-10
                  transition-all duration-300
                  hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1
                  ${isCenter ? "md:-translate-y-3 md:shadow-[0_0_40px_rgba(93,173,226,0.08)]" : ""}
                `}
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-verdaxis-blue to-brand-green" />

                {/* Glow spot for center pillar */}
                {isCenter && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-8 bg-verdaxis-blue/10 blur-xl rounded-full pointer-events-none" />
                )}

                {/* Icon */}
                <div className="mb-5 p-3 rounded-xl bg-verdaxis-blue/10 border border-verdaxis-blue/15">
                  <PillarIcon iconKey={pillar.iconKey} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Pillar number indicator */}
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-200 text-xs text-slate-400 font-heading">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
