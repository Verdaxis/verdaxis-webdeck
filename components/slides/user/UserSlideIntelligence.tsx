"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "Daily Reference Prices",
    description: "Volume-weighted average prices (VWAP) computed daily across all closed trades. Know the true market rate before you negotiate.",
    tier: "Standard",
    tierColor: "bg-verdaxis-blue/10 text-verdaxis-blue border-verdaxis-blue/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Supply & Demand Analytics",
    description: "Visualize bid/ask depth, trade volume trends, and regional supply imbalances. Spot market shifts before they move prices.",
    tier: "Standard",
    tierColor: "bg-verdaxis-blue/10 text-verdaxis-blue border-verdaxis-blue/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Port Fuel Availability",
    description: "Track which sustainable fuels are available at which ports — with lead times and available volumes updated from live listings.",
    tier: "Standard",
    tierColor: "bg-verdaxis-blue/10 text-verdaxis-blue border-verdaxis-blue/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Predictive Pricing",
    description: "ML-powered forward price signals and GENA supply data integration. Anticipate market movements with 7-day and 30-day outlooks.",
    tier: "Premium",
    tierColor: "bg-brand-green/10 text-brand-green border-brand-green/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

// Fake sparkline data points for visual chart
const sparklinePoints = [30, 38, 34, 42, 40, 48, 44, 52, 50, 58, 55, 62, 60, 65];

export default function UserSlideIntelligence() {
  const maxVal = Math.max(...sparklinePoints);
  const minVal = Math.min(...sparklinePoints);
  const range = maxVal - minVal;
  const w = 300;
  const h = 80;
  const points = sparklinePoints
    .map((v, i) => {
      const x = (i / (sparklinePoints.length - 1)) * w;
      const y = h - ((v - minVal) / range) * h * 0.8 - h * 0.1;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <SlideWrapper>
      <SlideBackground variant="waves" tint="blue" />
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
            Data-Driven Decisions
          </h2>
        </motion.div>
        <motion.p className="text-slate-500 text-sm md:text-base mb-8 ml-[20px]" variants={fadeInUp}>
          Reference prices, supply analytics, and predictive signals — all in one dashboard
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature cards */}
          <motion.div className="grid grid-cols-1 gap-4" variants={staggerContainer}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } },
                }}
                className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-verdaxis-blue/10 border border-verdaxis-blue/15 flex items-center justify-center text-verdaxis-blue group-hover:bg-verdaxis-blue group-hover:text-white transition-colors duration-200">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-sm font-semibold text-slate-900">{f.title}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${f.tierColor}`}>
                      {f.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual panel */}
          <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
            {/* Fake price chart */}
            <div className="rounded-xl bg-white border border-slate-200 shadow-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-slate-900">Bio Methanol Reference Price</h3>
                  <span className="text-[11px] text-slate-400">NW Europe · Daily VWAP</span>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-xl font-bold text-slate-900">$680</span>
                  <span className="text-[11px] text-brand-green font-semibold">+2.3% today</span>
                </div>
              </div>

              {/* Sparkline */}
              <div className="w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100 p-3">
                <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16" aria-label="Price trend chart" role="img">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5DADE2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#5DADE2" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  {/* Fill area */}
                  <polyline
                    points={`0,${h} ${points} ${w},${h}`}
                    fill="url(#sparkGrad)"
                    stroke="none"
                  />
                  {/* Line */}
                  <polyline
                    points={points}
                    fill="none"
                    stroke="#5DADE2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Last point dot */}
                  {(() => {
                    const lastIdx = sparklinePoints.length - 1;
                    const lx = (lastIdx / (sparklinePoints.length - 1)) * w;
                    const lv = sparklinePoints[lastIdx];
                    const ly = h - ((lv - minVal) / range) * h * 0.8 - h * 0.1;
                    return <circle cx={lx} cy={ly} r="4" fill="#5DADE2" stroke="white" strokeWidth="2" />;
                  })()}
                </svg>
              </div>

              <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>

            {/* Premium tier callout */}
            <div className="rounded-xl border border-brand-green/20 bg-gradient-to-r from-brand-green/5 to-verdaxis-blue/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-brand-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="font-heading text-xs font-semibold text-brand-green">Premium Data Products</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Predictive pricing signals and GENA supply data available as a premium add-on. Starting from <strong className="text-slate-800">$1,000/seat/month</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
