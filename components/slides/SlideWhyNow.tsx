"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function DriverIcon({ iconKey }: { iconKey: string }) {
  const cls = "w-8 h-8 text-gold-accent";

  switch (iconKey) {
    case "regulation":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.72 6.28l1.06-1.06" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-2.5 4h5L12 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 17h11" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l-1 3h8l-1-3" />
        </svg>
      );
    case "supply":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h2V10l4-5h4l-1 5h2V7l3-4h3v7h2v10h2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l4-10M9 20l2-10M14 20V10M19 20V7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v2M8 2v3M17 1v2" />
        </svg>
      );
    case "vessels":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l1.5-5h15L21 17" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 12V8h4v4M13 12V6h3v6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 4h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17c1 2 3 3 5 3s4-1 5-3c1 2 3 3 5 3s4-1 5-3" />
        </svg>
      );
    case "corridors":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 5h3c2 0 3 1 3 3v8c0 2 1 3 3 3h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l2 2-2 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3L7 5l2 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SlideWhyNow() {
  const t = useContent();

  return (
    <SlideWrapper>
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.whyNow.heading}
          </h2>
        </motion.div>

        <motion.p
          className="text-white/50 text-sm md:text-base mb-8 ml-6"
          variants={fadeInUp}
        >
          {t.whyNow.subtitle}
        </motion.p>

        {/* Driver cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {t.whyNow.drivers.map((driver, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative p-5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md
                hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center">
                  <DriverIcon iconKey={driver.iconKey} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-gold-accent mb-1.5">
                    {driver.title}
                  </h3>
                  <p className="text-white/55 text-xs md:text-sm leading-relaxed">
                    {driver.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div variants={fadeInUp}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.whyNow.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-verdaxis-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs md:text-sm leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
