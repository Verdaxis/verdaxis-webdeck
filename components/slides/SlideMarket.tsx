"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import AnimatedCounter from "@/components/AnimatedCounter";
import BranchTrigger from "@/components/branching/BranchTrigger";
import Modal from "@/components/branching/Modal";
import { useState, lazy, Suspense } from "react";

const BranchMarketSizing = lazy(
  () => import("./branches/BranchMarketSizing")
);

interface SlideMarketProps {
  branches?: string[];
}

/** Parse a value like "$300B" into { numeric: 300, prefix: "$", suffix: "B" } */
function parseValue(val: string) {
  const match = val.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: val };
  return {
    prefix: match[1],
    numeric: parseInt(match[2], 10),
    suffix: match[3],
  };
}

export default function SlideMarket({ branches }: SlideMarketProps) {
  const t = useContent();
  const { heading, subtitle, tam, sam, som, branchLabel } = t.market;
  const [showBranch, setShowBranch] = useState(false);

  const tamParsed = parseValue(tam.value);
  const samParsed = parseValue(sam.value);
  const somParsed = parseValue(som.value);

  return (
    <SlideWrapper>
      <SlideBackground variant="mesh" tint="blue" />
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

        {/* TAM / SAM / SOM visualization */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Concentric circles */}
          <motion.div
            variants={scaleIn}
            className="relative flex-shrink-0 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]"
          >
            {/* TAM - Outer circle */}
            <div className="absolute inset-0 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              <motion.div
                className="absolute top-4 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-0.5">
                  {tam.label}
                </span>
              </motion.div>
            </div>

            {/* SAM - Middle circle */}
            <div className="absolute inset-[18%] rounded-full border border-verdaxis-blue/30 bg-verdaxis-blue/[0.04] flex items-center justify-center">
              <motion.div
                className="absolute top-3 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-verdaxis-blue/50 block mb-0.5">
                  {sam.label}
                </span>
              </motion.div>
            </div>

            {/* SOM - Inner circle (bright, with glow) */}
            <div className="absolute inset-[36%] rounded-full border-2 border-emerald/50 bg-emerald/[0.08] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="text-center">
                <AnimatedCounter
                  target={somParsed.numeric}
                  prefix={somParsed.prefix}
                  suffix={somParsed.suffix}
                  className="text-2xl sm:text-3xl font-heading font-bold text-emerald"
                />
                <span className="block text-[9px] uppercase tracking-wider text-emerald/60 mt-0.5">
                  {som.label}
                </span>
              </div>
            </div>

            {/* SAM value - positioned inside middle ring */}
            <motion.div
              className="absolute bottom-[22%] left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <AnimatedCounter
                target={samParsed.numeric}
                prefix={samParsed.prefix}
                suffix={samParsed.suffix}
                className="text-xl font-heading font-bold text-verdaxis-blue"
              />
            </motion.div>

            {/* TAM value - positioned inside outer ring */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedCounter
                target={tamParsed.numeric}
                prefix={tamParsed.prefix}
                suffix={tamParsed.suffix}
                className="text-2xl sm:text-3xl font-heading font-bold text-brand-green"
              />
            </motion.div>

            {/* Subtle radial glow behind circles */}
            <div className="absolute inset-0 rounded-full bg-verdaxis-blue/[0.05] blur-2xl pointer-events-none" />
          </motion.div>

          {/* Descriptions sidebar */}
          <motion.div
            className="flex-1 flex flex-col gap-5 min-w-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* TAM */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-slate-200 bg-white shadow-card p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-brand-green/60 border border-brand-green/30" />
                <span className="text-sm font-heading font-semibold text-brand-green">
                  {tam.label}
                </span>
                <span className="ml-auto text-lg font-heading font-bold text-brand-green">
                  {tam.value}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-6">
                {tam.description}
              </p>
            </motion.div>

            {/* SAM */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-verdaxis-blue/15 bg-verdaxis-blue/[0.04] p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-verdaxis-blue/60 border border-verdaxis-blue/30" />
                <span className="text-sm font-heading font-semibold text-verdaxis-blue">
                  {sam.label}
                </span>
                <span className="ml-auto text-lg font-heading font-bold text-verdaxis-blue">
                  {sam.value}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-6">
                {sam.description}
              </p>
            </motion.div>

            {/* SOM */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-emerald/15 bg-emerald/[0.04] p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald/60 border border-emerald/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                <span className="text-sm font-heading font-semibold text-emerald">
                  {som.label}
                </span>
                <span className="ml-auto text-lg font-heading font-bold text-emerald">
                  {som.value}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed pl-6">
                {som.description}
              </p>
            </motion.div>

            {/* Branch trigger */}
            <motion.div variants={fadeInUp} className="pt-1">
              <BranchTrigger
                label={branchLabel}
                onClick={() => setShowBranch(true)}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Branch modal */}
      <Modal
        isOpen={showBranch}
        onClose={() => setShowBranch(false)}
        title={t.branches.marketSizing.title}
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-verdaxis-blue/30 border-t-verdaxis-blue rounded-full animate-spin" />
            </div>
          }
        >
          <BranchMarketSizing />
        </Suspense>
      </Modal>
    </SlideWrapper>
  );
}
