"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Register & Set Up",
    description:
      "Create your account and select your role — Buyer, Seller, or Broker. Configure your fleet profile, compliance thresholds, and notification preferences.",
    details: ["Choose your role", "Set up your fleet profile", "Configure compliance alerts"],
    accentColor: "bg-verdaxis-blue",
    borderColor: "border-t-verdaxis-blue",
    numberColor: "text-verdaxis-blue",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Browse or List",
    description:
      "Explore verified fuel listings with CI scores and port availability, or create your own listings with compliance data attached. Set up automated RFQs.",
    details: ["Filter by fuel type, port, CI score", "List supply with compliance docs", "Set auto-match price limits"],
    accentColor: "bg-brand-green",
    borderColor: "border-t-brand-green",
    numberColor: "text-brand-green",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Trade with Confidence",
    description:
      "Auto-matched orders confirm instantly. For RFQ trades, accept, negotiate, and execute — all with compliance-verified counterparties and full audit trails.",
    details: ["Auto-match or confirm manually", "Full compliance audit trail", "Delivery and payment tracking"],
    accentColor: "bg-verdaxis-dark-blue",
    borderColor: "border-t-verdaxis-dark-blue",
    numberColor: "text-verdaxis-dark-blue",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function UserSlideHowItWorks() {
  return (
    <SlideWrapper>
      <SlideBackground variant="orbs" tint="mixed" />
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="flex items-center gap-4 mb-2" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
            How It Works
          </h2>
        </motion.div>
        <motion.p className="text-slate-500 text-sm md:text-base mb-10 ml-[20px]" variants={fadeInUp}>
          From sign-up to your first trade in under an hour
        </motion.p>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting arrow */}
          <motion.div
            className="hidden md:block absolute top-16 left-0 right-0 pointer-events-none z-0"
            variants={fadeInUp}
            aria-hidden="true"
          >
            <svg className="w-full h-8" viewBox="0 0 900 32" preserveAspectRatio="none" fill="none">
              <path
                d="M200 16 H400"
                stroke="rgba(93,173,226,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <polygon points="395,12 405,16 395,20" fill="rgba(93,173,226,0.4)" />
              <path
                d="M500 16 H700"
                stroke="rgba(76,175,80,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <polygon points="695,12 705,16 695,20" fill="rgba(76,175,80,0.4)" />
            </svg>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.15 },
                  },
                }}
                className={`relative p-6 rounded-xl bg-white border border-slate-200 border-t-2 ${step.borderColor} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Step number */}
                <span className={`font-mono text-4xl font-bold ${step.numberColor} opacity-15 absolute top-4 right-5 select-none`} aria-hidden="true">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.accentColor}/10 border border-slate-200 flex items-center justify-center mb-5 text-slate-700`}>
                  {step.icon}
                </div>

                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.description}</p>

                {/* Detail checklist */}
                <ul className="flex flex-col gap-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${step.numberColor}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div variants={fadeInUp} className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            All counterparties are verified. All trades carry a full compliance audit trail.
          </p>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
