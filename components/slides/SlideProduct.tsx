"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import BranchTrigger from "@/components/branching/BranchTrigger";
import Modal from "@/components/branching/Modal";
import { useState, lazy, Suspense } from "react";

const BranchComplianceEngine = lazy(
  () => import("./branches/BranchComplianceEngine")
);
const BranchAICopilot = lazy(() => import("./branches/BranchAICopilot"));
const BranchProducerMap = lazy(() => import("./branches/BranchProducerMap"));

interface SlideProductProps {
  branches?: string[];
}

function FeatureIcon({ iconKey }: { iconKey: string }) {
  const iconClass = "w-7 h-7 text-verdaxis-blue";

  switch (iconKey) {
    case "marketplace":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Exchange / orderbook icon */}
          <rect x="3" y="4" width="9" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
          <rect x="16" y="4" width="9" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
          <path d="M7.5 9h0M7.5 12h0M7.5 15h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20.5 9h0M20.5 12h0M20.5 15h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 11l2 1.5L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "compliance":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield with checkmark */}
          <path
            d="M14 3L4 7.5v7c0 6.3 4.3 12.2 10 13.5 5.7-1.3 10-7.2 10-13.5v-7L14 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ai":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sparkles / brain */}
          <path
            d="M14 2l1.5 4.5L20 8l-4.5 1.5L14 14l-1.5-4.5L8 8l4.5-1.5L14 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path
            d="M21 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M7 18l0.7 2.3L10 21l-2.3.7L7 24l-.7-2.3L4 21l2.3-.7L7 18z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>
      );
    case "fleet":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ship with location dot */}
          <path
            d="M4 20l2-8h16l2 8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path d="M2 20c2.5 3 5.5 4 12 4s9.5-1 12-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="11" y="8" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <line x1="14" y1="8" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="22" cy="7" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      );
    case "map":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Globe with pin */}
          <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
          <ellipse cx="14" cy="14" rx="4" ry="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M4 14h20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M6 8.5h16M6 19.5h16" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
          <circle cx="20" cy="9" r="3" fill="currentColor" opacity="0.3" />
          <path d="M20 6c1.66 0 3 1.34 3 3 0 2.5-3 5-3 5s-3-2.5-3-5c0-1.66 1.34-3 3-3z" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="9" r="1" fill="white" />
        </svg>
      );
    case "calculator":
      return (
        <svg className={iconClass} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Calculator */}
          <rect x="5" y="2" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
          <rect x="8" y="5" width="12" height="5" rx="1.5" fill="currentColor" opacity="0.2" />
          <circle cx="10" cy="15" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="14" cy="15" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="18" cy="15" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="10" cy="19.5" r="1.2" fill="currentColor" opacity="0.5" />
          <circle cx="14" cy="19.5" r="1.2" fill="currentColor" opacity="0.5" />
          <rect x="16.5" cy="18" width="3" height="5.5" rx="1.5" y="18" fill="currentColor" opacity="0.4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SlideProduct({ branches }: SlideProductProps) {
  const t = useContent();
  const { heading, subtitle, features, branchLabels } = t.product;

  const [showCompliance, setShowCompliance] = useState(false);
  const [showAICopilot, setShowAICopilot] = useState(false);
  const [showProducerMap, setShowProducerMap] = useState(false);

  const branchLoadingSpinner = (
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 border-2 border-verdaxis-blue/30 border-t-verdaxis-blue rounded-full animate-spin" />
    </div>
  );

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

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.iconKey}
              variants={scaleIn}
              className="group relative rounded-xl border border-slate-200 bg-white shadow-card p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Highlight badge */}
              {feature.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-verdaxis-blue/8 border border-verdaxis-blue/15 text-[10px] font-heading font-semibold text-verdaxis-blue uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 p-2 rounded-lg bg-verdaxis-blue/10 border border-verdaxis-blue/10 w-fit">
                <FeatureIcon iconKey={feature.iconKey} />
              </div>

              {/* Name */}
              <h3 className="text-base font-heading font-semibold text-slate-900 mb-2 pr-16">
                {feature.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Powered by partner tag */}
              {feature.poweredBy === "marinachain" && (
                <div className="mt-auto pt-3">
                  <div className="inline-flex items-center gap-1.5 bg-[#0066CC]/10 border border-[#0066CC]/20 rounded-full px-2 py-0.5">
                    <span className="text-[9px] text-[#0066CC]/60">Powered by</span>
                    <img
                      src="/images/logos/partners/marinachain-white.png"
                      alt="MarinaChain"
                      className="h-[14px] w-auto opacity-70 invert"
                    />
                  </div>
                </div>
              )}
              {feature.poweredBy === "gena" && (
                <div className="mt-auto pt-3">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                    <span className="text-[9px] text-emerald-500/60">Powered by</span>
                    <img
                      src="/images/logos/partners/gena-green.svg"
                      alt="Gena"
                      className="h-[14px] w-auto opacity-80"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Branch triggers */}
        <motion.div
          className="flex flex-wrap items-center gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {branchLabels["compliance-engine"] && (
            <motion.div variants={fadeInUp}>
              <BranchTrigger
                label={branchLabels["compliance-engine"]}
                onClick={() => setShowCompliance(true)}
              />
            </motion.div>
          )}
          {branchLabels["ai-copilot"] && (
            <motion.div variants={fadeInUp}>
              <BranchTrigger
                label={branchLabels["ai-copilot"]}
                onClick={() => setShowAICopilot(true)}
              />
            </motion.div>
          )}
          {branchLabels["producer-map"] && (
            <motion.div variants={fadeInUp}>
              <BranchTrigger
                label={branchLabels["producer-map"]}
                onClick={() => setShowProducerMap(true)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Branch modals */}
      <Modal
        isOpen={showCompliance}
        onClose={() => setShowCompliance(false)}
        title={t.branches.complianceEngine.title}
      >
        <Suspense fallback={branchLoadingSpinner}>
          <BranchComplianceEngine />
        </Suspense>
      </Modal>

      <Modal
        isOpen={showAICopilot}
        onClose={() => setShowAICopilot(false)}
        title={t.branches.aiCopilot.title}
      >
        <Suspense fallback={branchLoadingSpinner}>
          <BranchAICopilot />
        </Suspense>
      </Modal>

      <Modal
        isOpen={showProducerMap}
        onClose={() => setShowProducerMap(false)}
        title={t.branches.producerMap.title}
      >
        <Suspense fallback={branchLoadingSpinner}>
          <BranchProducerMap />
        </Suspense>
      </Modal>
    </SlideWrapper>
  );
}
