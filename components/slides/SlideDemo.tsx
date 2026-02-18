"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useState, useEffect, useCallback } from "react";

const STEP_COUNT = 4;
const STEP_INTERVAL = 3500;

const stepFade: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

/* ── Buyer step content ─────────────────────────────────── */

function BuyerStep0({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-heading font-semibold text-slate-700 mb-3">
        <span className="text-base">🔍</span> {ui.searchOffers}
      </div>
      {[
        { label: ui.fuelType, value: "Bio-LNG" },
        { label: ui.port, value: "Rotterdam" },
        { label: ui.delivery, value: "Q2 2026" },
      ].map((f) => (
        <div key={f.label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
          <span className="text-[11px] text-slate-500 font-heading">{f.label}</span>
          <span className="text-[11px] font-heading font-semibold text-slate-800">{f.value}</span>
        </div>
      ))}
      <button className="w-full mt-2 rounded-lg bg-verdaxis-blue text-white text-[11px] font-heading font-semibold py-2 hover:bg-verdaxis-dark-blue transition-colors">
        {ui.searchOffers} →
      </button>
    </div>
  );
}

function BuyerStep1({ ui }: { ui: Record<string, string> }) {
  const offers = [
    { name: "GreenFuels B.V.", fuel: "Bio-LNG", port: "Rotterdam", price: "$1,240/MT", qty: "500 MT", ci: "28.3", highlight: true },
    { name: "Nordic Bio AS", fuel: "Bio-LNG", port: "Singapore", price: "$1,180/MT", qty: "800 MT", ci: "24.1" },
    { name: "EcoMarine GmbH", fuel: "Bio-LNG", port: "ARA", price: "$1,310/MT", qty: "300 MT", ci: "31.2" },
  ];
  return (
    <div className="space-y-2">
      <div className="text-[11px] text-slate-500 font-heading mb-2">3 {ui.offersFound}</div>
      {offers.map((o, i) => (
        <motion.div
          key={o.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15, duration: 0.3 }}
          className={`rounded-lg border p-2.5 ${o.highlight ? "border-verdaxis-blue/40 bg-verdaxis-blue/5 ring-1 ring-verdaxis-blue/20" : "border-slate-200 bg-white"}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-heading font-semibold text-slate-800">{o.name}</span>
            <span className="text-[10px] font-heading font-bold text-verdaxis-blue">{o.price}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <span>{o.fuel}</span>
            <span className="text-slate-300">·</span>
            <span>{o.port}</span>
            <span className="text-slate-300">·</span>
            <span>{o.qty}</span>
            <span className="text-slate-300">·</span>
            <span>CI: {o.ci}</span>
          </div>
          <div className="flex gap-1 mt-1.5">
            <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[9px] text-emerald-700 font-heading">FuelEU ✓</span>
            <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[9px] text-emerald-700 font-heading">EU ETS ✓</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BuyerStep2({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-heading font-semibold text-slate-800">GreenFuels B.V.</span>
        <span className="text-[10px] font-heading font-bold text-verdaxis-blue">$1,240/MT</span>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5">
        <div className="text-[10px] font-heading font-semibold text-emerald-700 mb-2">🛡 {ui.complianceCheck}</div>
        {[
          { name: "FuelEU Maritime", ok: true },
          { name: "EU ETS", ok: true },
          { name: `RED III ${ui.certified}`, ok: true },
        ].map((c) => (
          <div key={c.name} className="flex items-center justify-between py-1 border-b border-emerald-100 last:border-0">
            <span className="text-[10px] text-slate-600">{c.name}</span>
            <span className="text-[10px] text-emerald-600 font-semibold">✅</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1.5 mt-1">
          <span className="text-[10px] text-slate-600">{ui.ciScore}</span>
          <span className="text-[10px] font-heading font-semibold text-slate-800">28.3 gCO₂/MJ</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-slate-500">500 MT × $1,240/MT</span>
        <span className="font-heading font-bold text-slate-800">{ui.total}: $620,000</span>
      </div>
      <button className="w-full rounded-lg bg-verdaxis-blue text-white text-[11px] font-heading font-semibold py-2">
        {ui.placeOrder} →
      </button>
    </div>
  );
}

function BuyerStep3({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-emerald-600 font-heading font-semibold text-xs">
        <span className="text-base">✅</span> {ui.orderConfirmed}
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="text-[11px] font-heading font-semibold text-slate-800 mb-1">GreenFuels B.V. → You</div>
        <div className="text-[10px] text-slate-500">Bio-LNG · 500 MT · $1,240/MT</div>
        <div className="text-[10px] text-slate-500">Rotterdam · Q2 2026</div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5">
        <div className="text-[10px] font-heading font-semibold text-slate-700 mb-1.5">📄 {ui.certificates}</div>
        {[ui.certificateOfOrigin, ui.fueleuCompliance, ui.euEtsAllowances].map((c) => (
          <div key={c} className="flex items-center gap-1.5 py-0.5">
            <span className="text-[10px]">📄</span>
            <span className="text-[10px] text-slate-600">{c}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
        <span>💰</span> {ui.paymentSecured}
      </div>
    </div>
  );
}

/* ── Seller step content ────────────────────────────────── */

function SellerStep0({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-heading font-semibold text-slate-700 mb-3">
        <span className="text-base">➕</span> {ui.createListing}
      </div>
      {[
        { label: ui.fuelType, value: "Bio-LNG" },
        { label: ui.quantity, value: "500 MT" },
        { label: ui.price, value: "$1,240/MT" },
        { label: ui.port, value: "Rotterdam" },
        { label: ui.ciScore, value: "28.3 gCO₂/MJ" },
      ].map((f) => (
        <div key={f.label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
          <span className="text-[11px] text-slate-500 font-heading">{f.label}</span>
          <span className="text-[11px] font-heading font-semibold text-slate-800">{f.value}</span>
        </div>
      ))}
      <button className="w-full mt-1 rounded-lg bg-brand-green text-white text-[11px] font-heading font-semibold py-2">
        {ui.publishListing} →
      </button>
    </div>
  );
}

function SellerStep1({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-emerald-600 font-heading font-semibold text-xs">
        <span className="text-base">✅</span> {ui.listingPublished}
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="text-[11px] font-heading font-semibold text-slate-800 mb-0.5">Bio-LNG · 500 MT · $1,240/MT</div>
        <div className="text-[10px] text-slate-500">Rotterdam · CI: 28.3</div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5">
        <div className="text-[10px] font-heading font-semibold text-slate-700 mb-2">📊 {ui.liveStats}</div>
        {[
          { icon: "👁", label: ui.views, value: "12" },
          { icon: "⭐", label: ui.watchlist, value: "3" },
          { icon: "📩", label: ui.inquiries, value: "0" },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
            <span className="text-[10px] text-slate-600">{s.icon} {s.label}</span>
            <span className="text-[10px] font-heading font-semibold text-slate-800">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[10px]">
        <span className="text-slate-500">{ui.status}:</span>
        <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-heading font-semibold text-[9px]">{ui.active}</span>
      </div>
    </div>
  );
}

function SellerStep2({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-amber-600 font-heading font-semibold text-xs">
        <span className="text-base">🔔</span> {ui.newBuyerInquiry}
      </div>
      <div className="rounded-lg border border-verdaxis-blue/30 bg-verdaxis-blue/5 p-2.5">
        <div className="text-[10px] font-heading font-semibold text-slate-700 mb-1.5">{ui.buyerProfile}</div>
        <div className="text-[11px] font-heading font-semibold text-slate-800">Nordic Shipping AS</div>
        <div className="text-[10px] text-slate-500">🚢 45 {ui.fleet}</div>
        <div className="text-[10px] text-verdaxis-blue font-heading font-semibold mt-1">⭐ {ui.verifiedBuyer}</div>
        <div className="text-[10px] text-slate-500 mt-1">{ui.wants}: 500 MT Bio-LNG</div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-500">{ui.yourPrice}:</span>
          <span className="font-heading font-semibold text-slate-800">$1,240/MT</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-500">{ui.buyerBid}:</span>
          <span className="font-heading font-semibold text-emerald-600">$1,240/MT ✓</span>
        </div>
      </div>
      <button className="w-full rounded-lg bg-brand-green text-white text-[11px] font-heading font-semibold py-2">
        {ui.acceptDeal} →
      </button>
    </div>
  );
}

function SellerStep3({ ui }: { ui: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-emerald-600 font-heading font-semibold text-xs">
        <span className="text-base">✅</span> {ui.transactionComplete}
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="text-[11px] font-heading font-semibold text-slate-800 mb-0.5">→ Nordic Shipping AS</div>
        <div className="text-[10px] text-slate-500">Bio-LNG · 500 MT · $1,240/MT</div>
        <div className="text-[10px] font-heading font-bold text-slate-800 mt-1">{ui.total}: $620,000</div>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5">
        <div className="text-[10px] font-heading font-semibold text-emerald-700 mb-1.5">📋 {ui.settlement}</div>
        {[
          { icon: "💰", label: ui.paymentLabel, value: ui.secured },
          { icon: "📄", label: ui.certificatesLabel, value: ui.issued },
          { icon: "✅", label: ui.complianceLabel, value: ui.verified },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between py-1 border-b border-emerald-100 last:border-0">
            <span className="text-[10px] text-slate-600">{s.icon} {s.label}</span>
            <span className="text-[10px] font-heading font-semibold text-emerald-700">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
        <span>💰</span> {ui.revenue}: $620,000
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────── */

export default function SlideDemo() {
  const t = useContent();
  const { heading, subtitle, buyer, seller, ui } = t.demo;
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % STEP_COUNT);
    }, STEP_INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  const goToStep = useCallback((s: number) => {
    setStep(s);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  }, []);

  const buyerSteps = [
    <BuyerStep0 key="b0" ui={ui} />,
    <BuyerStep1 key="b1" ui={ui} />,
    <BuyerStep2 key="b2" ui={ui} />,
    <BuyerStep3 key="b3" ui={ui} />,
  ];

  const sellerSteps = [
    <SellerStep0 key="s0" ui={ui} />,
    <SellerStep1 key="s1" ui={ui} />,
    <SellerStep2 key="s2" ui={ui} />,
    <SellerStep3 key="s3" ui={ui} />,
  ];

  return (
    <SlideWrapper>
      <SlideBackground variant="grid" tint="blue" />
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
            {heading}
          </h2>
        </motion.div>
        <motion.p
          className="text-slate-500 text-base md:text-lg mb-6 ml-[16px] max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        {/* App frame */}
        <motion.div
          className="rounded-xl overflow-hidden border border-slate-200 shadow-card-lg bg-white"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex-1 mx-3">
              <div className="rounded-md bg-slate-700/80 px-3 py-1 text-[10px] text-slate-400 font-mono text-center">
                app.verdaxis.exchange
              </div>
            </div>
          </div>

          {/* App header bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-verdaxis-blue flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">V</span>
              </div>
              <span className="text-[11px] font-heading font-bold text-slate-800">Verdaxis Exchange</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span>🔔</span>
              <span>⚙️</span>
              <div className="w-5 h-5 rounded-full bg-verdaxis-blue/20 flex items-center justify-center">
                <span className="text-[8px] text-verdaxis-blue font-bold">U</span>
              </div>
            </div>
          </div>

          {/* Split panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
            {/* Buyer panel */}
            <div className="border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-2 px-4 py-2 bg-verdaxis-blue/8 border-b border-verdaxis-blue/15">
                <span className="text-sm">🚢</span>
                <span className="text-[11px] font-heading font-bold text-verdaxis-blue">{buyer.label}</span>
                <span className="text-[10px] text-verdaxis-blue/60">— {buyer.sublabel}</span>
                <div className="ml-auto">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-verdaxis-blue/15 text-[9px] font-heading font-semibold text-verdaxis-blue">
                    {buyer.steps[step]}
                  </span>
                </div>
              </div>
              <div className="p-4 h-[340px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={`buyer-${step}`} variants={stepFade} initial="hidden" animate="visible" exit="exit">
                    {buyerSteps[step]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Seller panel */}
            <div>
              <div className="flex items-center gap-2 px-4 py-2 bg-brand-green/8 border-b border-brand-green/15">
                <span className="text-sm">⚡</span>
                <span className="text-[11px] font-heading font-bold text-brand-green">{seller.label}</span>
                <span className="text-[10px] text-brand-green/60">— {seller.sublabel}</span>
                <div className="ml-auto">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-brand-green/15 text-[9px] font-heading font-semibold text-brand-green">
                    {seller.steps[step]}
                  </span>
                </div>
              </div>
              <div className="p-4 h-[340px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={`seller-${step}`} variants={stepFade} initial="hidden" animate="visible" exit="exit">
                    {sellerSteps[step]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 py-3 bg-slate-50 border-t border-slate-200">
            {Array.from({ length: STEP_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToStep(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === step
                    ? "w-6 h-2 bg-verdaxis-blue"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
