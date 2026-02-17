"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Phase opacity based on timeline position
   ──────────────────────────────────────────── */

function phaseStyles(index: number) {
  // 2026 = bright gold glow, 2027 = slightly dimmer, 2028+ = most dim
  switch (index) {
    case 0:
      return {
        yearColor: "text-gold-accent",
        dotBorder: "border-gold-accent",
        dotFill: "bg-gold-accent",
        glow: "shadow-[0_0_20px_rgba(212,168,83,0.3)]",
        cardBorder: "border-gold-accent/20",
        cardBg: "bg-gold-accent/[0.04]",
        opacity: "opacity-100",
      };
    case 1:
      return {
        yearColor: "text-verdaxis-blue",
        dotBorder: "border-verdaxis-blue",
        dotFill: "bg-verdaxis-blue",
        glow: "",
        cardBorder: "border-verdaxis-blue/15",
        cardBg: "bg-verdaxis-blue/[0.03]",
        opacity: "opacity-80",
      };
    default:
      return {
        yearColor: "text-white/50",
        dotBorder: "border-white/30",
        dotFill: "bg-white/30",
        glow: "",
        cardBorder: "border-white/10",
        cardBg: "bg-white/[0.03]",
        opacity: "opacity-60",
      };
  }
}

/* ────────────────────────────────────────────
   Main component
   ──────────────────────────────────────────── */

export default function SlideRoadmap() {
  const t = useContent();
  const { heading, subtitle, phases, visionStatement } = t.roadmap;

  return (
    <SlideWrapper>
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Heading ── */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-2"
            variants={fadeInUp}
          >
            <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {heading}
            </h2>
          </motion.div>
          <motion.p
            className="text-white/50 text-base md:text-lg ml-[16px] max-w-2xl"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <motion.div
          className="relative"
          variants={fadeInUp}
        >
          {/* ── Desktop: horizontal timeline ── */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="relative mx-auto" style={{ maxWidth: "90%" }}>
              {/* Horizontal line behind nodes */}
              <div className="absolute top-[18px] left-0 right-0 h-[2px] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-accent/60 via-verdaxis-blue/40 to-white/20"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Phase cards */}
              <div className="grid grid-cols-3 gap-6">
                {phases.map((phase, i) => {
                  const style = phaseStyles(i);
                  return (
                    <motion.div
                      key={phase.year}
                      className={`flex flex-col items-center ${style.opacity}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + i * 0.25,
                        ease: "easeOut",
                      }}
                    >
                      {/* Node dot */}
                      <div
                        className={`relative z-10 h-9 w-9 rounded-full border-2 ${style.dotBorder} bg-deep-dark flex items-center justify-center ${style.glow}`}
                      >
                        <div
                          className={`h-3.5 w-3.5 rounded-full ${style.dotFill}`}
                        />
                      </div>

                      {/* Card content */}
                      <div
                        className={`mt-5 w-full rounded-2xl border ${style.cardBorder} ${style.cardBg} backdrop-blur-md px-5 py-5`}
                      >
                        {/* Year */}
                        <span
                          className={`block font-heading text-2xl font-bold ${style.yearColor} mb-1`}
                        >
                          {phase.year}
                        </span>

                        {/* Title */}
                        <span className="block text-sm font-heading font-semibold text-white/80 mb-3">
                          {phase.title}
                        </span>

                        {/* Items */}
                        <ul className="flex flex-col gap-1.5">
                          {phase.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-white/50 leading-relaxed"
                            >
                              <svg
                                className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${i === 0 ? "text-gold-accent/60" : i === 1 ? "text-verdaxis-blue/50" : "text-white/30"}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Mobile: vertical timeline ── */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[14px] top-0 bottom-0 w-[2px] overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-gold-accent/60 via-verdaxis-blue/40 to-white/20"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
              </div>

              <div className="flex flex-col gap-6">
                {phases.map((phase, i) => {
                  const style = phaseStyles(i);
                  return (
                    <motion.div
                      key={phase.year}
                      className={`relative ${style.opacity}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + i * 0.25,
                        ease: "easeOut",
                      }}
                    >
                      {/* Node dot */}
                      <div
                        className={`absolute -left-8 top-0 z-10 h-7 w-7 rounded-full border-2 ${style.dotBorder} bg-deep-dark flex items-center justify-center ${style.glow}`}
                      >
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${style.dotFill}`}
                        />
                      </div>

                      {/* Card */}
                      <div
                        className={`rounded-2xl border ${style.cardBorder} ${style.cardBg} backdrop-blur-md px-5 py-5`}
                      >
                        <span
                          className={`block font-heading text-xl font-bold ${style.yearColor} mb-1`}
                        >
                          {phase.year}
                        </span>
                        <span className="block text-sm font-heading font-semibold text-white/80 mb-3">
                          {phase.title}
                        </span>
                        <ul className="flex flex-col gap-1.5">
                          {phase.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-white/50 leading-relaxed"
                            >
                              <svg
                                className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${i === 0 ? "text-gold-accent/60" : i === 1 ? "text-verdaxis-blue/50" : "text-white/30"}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Vision statement ── */}
        <motion.div
          variants={fadeInUp}
          className="relative text-center pt-4 pb-2"
        >
          {/* Verdaxis-blue glow behind text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(93,173,226,0.07) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <p className="relative font-heading text-lg md:text-xl lg:text-2xl font-semibold text-white/90 italic leading-relaxed max-w-3xl mx-auto">
            {visionStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
