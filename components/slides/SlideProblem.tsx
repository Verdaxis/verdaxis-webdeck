"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const cardAccents = [
  { border: "border-t-red-500", dot: "bg-red-500", glow: "rgba(239,68,68,0.08)" },
  { border: "border-t-amber-500", dot: "bg-amber-500", glow: "rgba(245,158,11,0.08)" },
  { border: "border-t-orange-500", dot: "bg-orange-500", glow: "rgba(249,115,22,0.08)" },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

function ProblemIcon({ iconKey }: { iconKey: string }) {
  const cls = "w-7 h-7";

  switch (iconKey) {
    case "regulation":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
    case "fragmented":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 8l-1 1" />
        </svg>
      );
    case "skills":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.489v7.415" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SlideProblem() {
  const t = useContent();

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
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            {t.problem.heading}
          </h2>
        </motion.div>

        <motion.p
          className="text-slate-500 text-sm md:text-base mb-10 ml-6"
          variants={fadeInUp}
        >
          {t.problem.subtitle}
        </motion.p>

        {/* Problem cards with connection lines */}
        <div className="relative">
          {/* Connection lines between cards (desktop only) */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0"
            variants={fadeInUp}
          >
            <svg
              className="w-full h-12"
              viewBox="0 0 900 48"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Line from card 1 to card 2 */}
              <path
                d="M230 24 H440"
                stroke="rgba(239,68,68,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Arrow at midpoint 1 */}
              <polygon
                points="335,20 345,24 335,28"
                fill="rgba(239,68,68,0.35)"
              />
              {/* Line from card 2 to card 3 */}
              <path
                d="M460 24 H670"
                stroke="rgba(245,158,11,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Arrow at midpoint 2 */}
              <polygon
                points="565,20 575,24 565,28"
                fill="rgba(245,158,11,0.35)"
              />
            </svg>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.problem.cards.map((card, i) => {
              const accent = cardAccents[i] ?? cardAccents[0];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`relative p-6 rounded-xl bg-white border border-slate-200 border-t-2 ${accent.border} shadow-card backdrop-blur-md
                    hover:bg-slate-50 hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden`}
                >
                  {/* Animated pulsing dot */}
                  <div className="absolute top-4 right-4">
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${accent.dot} opacity-40`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 ${accent.dot} opacity-70`}
                      />
                    </span>
                  </div>

                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 text-slate-600">
                      <ProblemIcon iconKey={card.iconKey} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
