"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import BranchTrigger from "@/components/branching/BranchTrigger";
import Modal from "@/components/branching/Modal";
import { useState, lazy, Suspense } from "react";

const BranchBusinessModel = lazy(
  () => import("./branches/BranchBusinessModel")
);

/* ────────────────────────────────────────────
   Tag color helper
   ──────────────────────────────────────────── */

function tagColors(tag: string) {
  switch (tag) {
    case "Primary":
      return "bg-brand-green/10 text-brand-green border-brand-green/20";
    case "Recurring":
      return "bg-verdaxis-blue/15 text-verdaxis-blue border-verdaxis-blue/30";
    default:
      return "bg-slate-100 text-slate-500 border-slate-200";
  }
}

/* ────────────────────────────────────────────
   Main component
   ──────────────────────────────────────────── */

interface SlideRevenueProps {
  branches?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SlideRevenue({ branches }: SlideRevenueProps) {
  const t = useContent();
  const { heading, subtitle, streams, projectedLabel, growthStatement } =
    t.revenue;
  const [showBranch, setShowBranch] = useState(false);

  return (
    <SlideWrapper>
      <SlideBackground variant="mesh" tint="green" />
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
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
              {heading}
            </h2>
          </motion.div>
          <motion.p
            className="text-slate-500 text-base md:text-lg ml-[16px] max-w-2xl"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── Revenue stream cards ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
        >
          {streams.map((stream) => (
            <motion.div
              key={stream.title}
              variants={fadeInUp}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-card
                px-6 py-6 transition-all duration-300
                hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-verdaxis-blue to-brand-green" />

              {/* Tag pill */}
              {stream.tag && (
                <span
                  className={`self-start mb-4 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider ${tagColors(stream.tag)}`}
                >
                  {stream.tag}
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                {stream.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                {stream.description}
              </p>

              {/* Pricing */}
              <div className="mt-auto pt-3 border-t border-slate-100">
                <span className="text-sm font-heading font-bold text-brand-green">
                  {stream.pricing}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Growth projection section ── */}
        <motion.div
          variants={fadeInUp}
          className="relative rounded-2xl border border-slate-200 bg-white shadow-card px-6 py-6 flex items-center gap-5 overflow-hidden"
        >
          {/* Subtle upward glow */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(76,175,80,0.08) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          {/* Upward arrow/chart icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-brand-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 20l5.5-5.5M7.5 14.5L12 10l3 3 7-7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 6h5v5"
              />
            </svg>
          </div>

          <div className="relative flex-1">
            <span className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-green/60 mb-1">
              {projectedLabel}
            </span>
            <span className="text-lg md:text-xl font-heading font-bold text-slate-900">
              {growthStatement}
            </span>
          </div>
        </motion.div>

        {/* ── Branch trigger ── */}
        <motion.div variants={fadeInUp} className="pt-1">
          <BranchTrigger
            label={t.branches.businessModel.title}
            onClick={() => setShowBranch(true)}
          />
        </motion.div>
      </motion.div>

      {/* Branch modal */}
      <Modal
        isOpen={showBranch}
        onClose={() => setShowBranch(false)}
        title={t.branches.businessModel.title}
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-verdaxis-blue/30 border-t-verdaxis-blue rounded-full animate-spin" />
            </div>
          }
        >
          <BranchBusinessModel />
        </Suspense>
      </Modal>
    </SlideWrapper>
  );
}
