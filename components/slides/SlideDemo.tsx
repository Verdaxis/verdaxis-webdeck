"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useState, useEffect } from "react";
import type { DeckContent } from "@/lib/content/types";

const PHASE_MS = 3500;
const NUM_PHASES = 5;

/* ─── animation variants ──────────────────────────────── */

const fade: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.25 } },
};

const popIn: import("framer-motion").Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const staggerChild: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const slideDown: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: -14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
};

/* ─── content helper ──────────────────────────────────── */

function u(t: DeckContent, key: string, fallback = ""): string {
  return t.demo.ui[key] ?? fallback;
}

/* ═══════════════════════════════════════════════════════════
   CHROME — Browser Window + Mini App Shell
   ═══════════════════════════════════════════════════════════ */

function BrowserWindow({
  url,
  label,
  labelColor,
  children,
}: {
  url: string;
  label: string;
  labelColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 min-w-0 rounded-xl border border-slate-200/80 shadow-card-lg overflow-hidden bg-white">
      <div className="h-7 bg-slate-800 flex items-center px-3 gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/80" />
          <div className="w-2 h-2 rounded-full bg-amber-400/80" />
          <div className="w-2 h-2 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="px-3 py-0.5 bg-slate-700/50 rounded text-[11px] text-slate-400 font-mono truncate">
            {url}
          </span>
        </div>
        <span className={`text-[11px] font-heading font-bold uppercase tracking-wider ${labelColor}`}>
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function AppShell({
  mode,
  active,
  badge,
  children,
}: {
  mode: "buyer" | "seller";
  active: number;
  badge?: number;
  children: React.ReactNode;
}) {
  const seller = mode === "seller";
  const accent = seller ? "bg-green-500" : "bg-sky-500";
  const accentDot = seller ? "bg-green-400" : "bg-sky-400";

  return (
    <div className="flex" style={{ height: 320 }}>
      {/* ── sidebar ── */}
      <div className="w-10 bg-[#343E50] flex flex-col items-center pt-2 pb-2 shrink-0">
        <div className="w-5 h-5 rounded bg-white/15 flex items-center justify-center text-[11px] font-bold text-white/70 mb-1">
          V
        </div>
        <div className="flex items-center gap-1 mb-2">
          <div className={`w-1.5 h-1.5 rounded-full ${accentDot}`} />
          <span className="text-[5px] text-slate-400 uppercase tracking-widest font-bold">
            {seller ? "SUP" : "BUY"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded flex items-center justify-center transition-colors duration-300 ${
                i === active ? `${accent} shadow-sm` : ""
              }`}
            >
              <div className={`w-2.5 h-[3px] rounded-full ${i === active ? "bg-white" : "bg-white/20"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ── main area ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* header */}
        <div className="h-7 bg-white border-b border-slate-100 flex items-center px-2 gap-1.5 shrink-0">
          <div className="flex-1 h-4 bg-slate-50 border border-slate-100 rounded px-1.5 flex items-center">
            <span className="text-[11px] text-slate-300 font-heading">Search…</span>
          </div>
          <div className="relative">
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            {badge != null && badge > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full flex items-center justify-center text-[5px] text-white font-bold"
              >
                {badge}
              </motion.span>
            )}
          </div>
          <div className="w-4 h-4 rounded-full bg-slate-100" />
        </div>
        {/* content — scaled down proportionally so full layout is visible */}
        <div className="flex-1 bg-slate-50 overflow-hidden relative">
          <div
            className="absolute inset-0 p-2.5"
            style={{ transform: "scale(0.82)", transformOrigin: "top left", width: "122%", height: "122%" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── tiny UI atoms ───────────────────────────────────── */

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 px-2 bg-white rounded border border-slate-200">
      <span className="text-[11px] text-slate-400 font-heading">{label}</span>
      <span className="text-[11px] font-heading font-semibold text-slate-700">{value}</span>
    </div>
  );
}

function SmallBadge({ children, color = "emerald" }: { children: React.ReactNode; color?: string }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-sky-50 border-sky-200 text-sky-700",
    amber: "bg-amber-50 border-amber-200 text-amber-700",
  };
  return (
    <span className={`inline-flex px-1.5 py-0.5 rounded border text-[11px] font-heading font-semibold ${map[color] ?? map.emerald}`}>
      {children}
    </span>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[11px] font-heading font-bold text-slate-800 mb-2">{children}</h3>;
}

function ActionBtn({
  children,
  color = "blue",
  pulse,
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "outline";
  pulse?: boolean;
}) {
  const base =
    color === "blue"
      ? "bg-sky-500 text-white"
      : color === "green"
        ? "bg-green-500 text-white"
        : "border border-slate-300 text-slate-500 bg-white";
  return (
    <motion.div
      animate={pulse ? { scale: [1, 1.04, 1] } : undefined}
      transition={pulse ? { duration: 0.7, delay: 2.2, ease: "easeInOut" as const } : undefined}
      className={`w-full text-center py-1.5 rounded-lg text-[11px] font-heading font-bold ${base} cursor-default select-none`}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PHASE 0 — MARKET TERMINAL (ORDERBOOK + CHART)
   ═══════════════════════════════════════════════════════════ */

const terminalRows = [
  { period: "SPOT", bid: 538.5, bidQty: 250, ask: 541.75, askQty: 200, last: 540.12, chg: +1.25 },
  { period: "Q1 26", bid: 540.75, bidQty: 300, ask: 544.0, askQty: 250, last: 542.38, chg: -0.8 },
  { period: "Q2 26", bid: 543.0, bidQty: 350, ask: 546.25, askQty: 300, last: 544.63, chg: +0.5 },
  { period: "Q3 26", bid: 545.25, bidQty: 400, ask: 548.5, askQty: 350, last: 546.88, chg: -0.3 },
  { period: "CAL 27", bid: 549.75, bidQty: 500, ask: 553.0, askQty: 450, last: 551.38, chg: +0.25 },
];

const trades = [
  { time: "14:25", side: "BUY" as const, qty: 450, price: 541.25, period: "Q2" },
  { time: "14:22", side: "SELL" as const, qty: 300, price: 540.88, period: "SPOT" },
  { time: "14:18", side: "BUY" as const, qty: 200, price: 542.5, period: "CAL" },
];

/** SVG polyline points for the forward curve */
const chartPoints = terminalRows.map((r, i) => {
  const x = 8 + i * ((100 - 16) / (terminalRows.length - 1));
  const minP = 536, maxP = 554;
  const y = 95 - ((r.last - minP) / (maxP - minP)) * 80;
  return `${x},${y}`;
}).join(" ");

function MiniChart() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      {/* grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2 2" />
      ))}
      {/* area fill */}
      <polygon
        points={`8,95 ${chartPoints} 92,95`}
        fill="url(#chartGrad)"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* line */}
      <polyline points={chartPoints} fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
      {/* dots */}
      {chartPoints.split(" ").map((pt, i) => {
        const [cx, cy] = pt.split(",");
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#10b981" stroke="white" strokeWidth="0.5" />;
      })}
    </svg>
  );
}

function MarketTerminal({ highlight }: { highlight: "bid" | "ask" }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
      {/* Header: fuel selector + best price */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <div className="text-[6px] text-slate-400 font-heading uppercase tracking-widest">Market Terminal</div>
          <div className="text-[11px] font-heading font-bold text-slate-800 -mt-0.5">METHANOL</div>
        </div>
        <div className="text-right">
          <div className="text-[6px] text-slate-400 font-heading uppercase">Best Offer</div>
          <div className="text-[11px] font-heading font-bold text-emerald-600 -mt-0.5">$540.12</div>
        </div>
      </div>

      {/* Mini forward curve chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="h-12 bg-white rounded border border-slate-100 mb-1 p-0.5"
      >
        <MiniChart />
      </motion.div>

      {/* Orderbook grid */}
      <div className="flex-1 overflow-hidden">
        {/* header row */}
        <div className="flex text-[5px] font-heading font-bold text-slate-400 uppercase tracking-wider px-1 py-0.5 bg-slate-100/80 rounded-t">
          <span className="w-[18%]">Period</span>
          <span className="w-[16%] text-right">Bid</span>
          <span className="w-[16%] text-right">Ask</span>
          <span className="w-[16%] text-right">Last</span>
          <span className="w-[16%] text-right">Chg</span>
          <span className="w-[18%] text-right">#</span>
        </div>
        {/* data rows */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          {terminalRows.map((row, i) => (
            <motion.div
              key={row.period}
              variants={staggerChild}
              className="flex text-[11px] font-mono px-1 py-[3px] border-b border-slate-50 items-center"
            >
              <span className="w-[18%] font-heading font-bold text-slate-700 flex items-center gap-0.5">
                {i === 0 && <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />}
                {row.period}
              </span>
              <span className={`w-[16%] text-right font-bold ${highlight === "bid" ? "text-emerald-600" : "text-emerald-500/70"}`}>
                {row.bid.toFixed(1)}
              </span>
              <span className={`w-[16%] text-right font-bold ${highlight === "ask" ? "text-rose-600" : "text-rose-500/70"}`}>
                {row.ask.toFixed(1)}
              </span>
              <span className="w-[16%] text-right text-slate-600 font-bold">{row.last.toFixed(1)}</span>
              <span className={`w-[16%] text-right font-bold ${row.chg >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                {row.chg >= 0 ? "↑" : "↓"}{Math.abs(row.chg).toFixed(1)}
              </span>
              <span className="w-[18%] text-right">
                <span className="inline-block px-1 py-0 bg-emerald-500/10 text-emerald-600 text-[5px] font-bold rounded">
                  {row.bidQty + row.askQty}
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trade activity feed */}
      <div className="mt-auto pt-0.5 border-t border-slate-100">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[5px] font-heading font-bold text-slate-400 uppercase tracking-wider">Trade Activity</span>
        </div>
        {trades.map((tr, i) => (
          <div key={i} className="flex text-[6px] font-mono text-slate-400 leading-tight">
            <span className="w-[20%]">{tr.time}</span>
            <span className={`w-[16%] font-bold ${tr.side === "BUY" ? "text-emerald-600" : "text-rose-500"}`}>{tr.side}</span>
            <span className="w-[24%] text-slate-600 font-bold">{tr.qty} MT</span>
            <span className="w-[24%] text-slate-700 font-bold">@ ${tr.price.toFixed(2)}</span>
            <span className="w-[16%] text-right">{tr.period}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SellerTerminal() {
  return <MarketTerminal highlight="ask" />;
}

function BuyerTerminal() {
  return <MarketTerminal highlight="bid" />;
}

/* ═══════════════════════════════════════════════════════════
   SELLER PHASES (1-4)
   ═══════════════════════════════════════════════════════════ */

function SellerPhase1({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
      <PageTitle>{u(t, "createListing", "Create New Listing")}</PageTitle>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-1.5 flex-1">
        {(
          [
            [u(t, "fuelType", "Fuel Type"), "Bio Methanol"],
            [u(t, "quantity", "Quantity"), "500 MT"],
            [u(t, "price", "Price"), "$1,240/MT"],
            [u(t, "port", "Port"), "Rotterdam"],
            [u(t, "ciScore", "CI Score"), "30.5 gCO\u2082/MJ"],
          ] as const
        ).map(([label, value]) => (
          <motion.div key={label} variants={staggerChild}>
            <FieldRow label={label} value={value} />
          </motion.div>
        ))}
      </motion.div>
      <ActionBtn color="green" pulse>
        {u(t, "publishListing", "Publish Listing")} →
      </ActionBtn>
    </motion.div>
  );
}

function SellerPhase2({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <motion.div variants={popIn} initial="hidden" animate="show" className="flex items-center gap-1.5 text-emerald-600">
        <span className="text-sm">✓</span>
        <span className="text-[11px] font-heading font-bold">{u(t, "listingPublished", "Listing Published")}</span>
      </motion.div>

      <div className="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
        <div className="flex justify-between">
          <span className="text-[11px] font-heading font-bold text-slate-700">Bio Methanol</span>
          <span className="text-[11px] font-heading font-bold text-emerald-600">$1,240/MT</span>
        </div>
        <div className="text-[11px] text-slate-400">500 MT · Rotterdam · CI 30.5</div>
        <div className="flex gap-1 mt-0.5">
          <SmallBadge>FuelEU ✓</SmallBadge>
          <SmallBadge>EU ETS ✓</SmallBadge>
        </div>
      </div>

      <div className="p-2 bg-slate-100/80 rounded-lg space-y-1.5">
        <span className="text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wider">
          {u(t, "liveStats", "Live Stats")}
        </span>
        <div className="grid grid-cols-3 gap-1">
          {(
            [
              ["eye", u(t, "views", "Views"), "12"],
              ["star", u(t, "watchlist", "Watchlist"), "3"],
              ["inbox", u(t, "inquiries", "Inquiries"), "0"],
            ] as const
          ).map(([icon, label, val]) => (
            <div key={label} className="text-center">
              <div className="flex justify-center text-slate-400">
                {icon === "eye" && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                {icon === "star" && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                {icon === "inbox" && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>}
              </div>
              <div className="text-[11px] font-heading font-bold text-slate-700">{val}</div>
              <div className="text-[11px] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-heading font-semibold text-emerald-600">{u(t, "active", "Active")}</span>
      </div>
    </motion.div>
  );
}

function SellerPhase3({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <motion.div variants={popIn} initial="hidden" animate="show" className="flex items-center gap-1.5 text-amber-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="text-[11px] font-heading font-bold">{u(t, "newBuyerInquiry", "New Buyer Inquiry!")}</span>
      </motion.div>

      <motion.div
        variants={popIn}
        initial="hidden"
        animate="show"
        className="p-2 bg-sky-50/60 rounded-lg border border-sky-200/60 space-y-1.5"
      >
        <span className="text-[11px] font-heading font-bold text-sky-600 uppercase tracking-wider">
          {u(t, "buyerProfile", "Buyer Profile")}
        </span>
        <div className="text-[11px] font-heading font-bold text-slate-700">Nordic Shipping AS</div>
        <div className="flex gap-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-0.5"><svg className="w-3 h-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> 45 {u(t, "fleet", "vessel fleet")}</span>
          <span className="flex items-center gap-0.5"><svg className="w-3 h-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> {u(t, "verifiedBuyer", "Verified")}</span>
        </div>
        <div className="text-[11px] text-slate-500">{u(t, "wants", "Wants")}: 500 MT Bio Methanol</div>
      </motion.div>

      <div className="flex justify-between px-2 py-1.5 bg-white rounded border border-slate-200">
        <div className="text-[11px]">
          <div className="text-slate-400">{u(t, "yourPrice", "Your Price")}</div>
          <div className="font-heading font-bold text-slate-700">$1,240/MT</div>
        </div>
        <div className="text-[11px] text-right">
          <div className="text-slate-400">{u(t, "buyerBid", "Buyer Bid")}</div>
          <div className="font-heading font-bold text-emerald-600">$1,240/MT ✓</div>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <div className="flex-1">
          <ActionBtn color="outline">{u(t, "decline", "Decline")}</ActionBtn>
        </div>
        <div className="flex-1">
          <ActionBtn color="green" pulse>
            {u(t, "acceptDeal", "Accept")}
          </ActionBtn>
        </div>
      </div>
    </motion.div>
  );
}

function SellerPhase4({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <motion.div variants={popIn} initial="hidden" animate="show" className="flex items-center gap-1.5 text-emerald-600">
        <span className="text-sm">✓</span>
        <span className="text-[11px] font-heading font-bold">{u(t, "transactionComplete", "Transaction Complete")}</span>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" animate="show" className="p-2.5 bg-emerald-50/80 rounded-lg border border-emerald-200/60 space-y-1.5">
        <span className="text-[11px] font-heading font-bold text-emerald-700 uppercase tracking-wider">
          {u(t, "settlement", "Settlement")}
        </span>
        {(
          [
            ["payment", u(t, "paymentLabel", "Payment"), u(t, "secured", "Secured")],
            ["doc", u(t, "certificatesLabel", "Certificates"), u(t, "issued", "Issued")],
            ["check", u(t, "complianceLabel", "Compliance"), u(t, "verified", "Verified")],
          ] as const
        ).map(([icon, label, status]) => (
          <motion.div
            key={label}
            variants={staggerChild}
            className="flex items-center justify-between py-1 border-b border-emerald-100 last:border-0"
          >
            <span className="text-[11px] text-emerald-700 flex items-center gap-1">
              {icon === "payment" && <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              {icon === "doc" && <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
              {icon === "check" && <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              {label}
            </span>
            <span className="text-[11px] font-heading font-bold text-emerald-600">{status}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
        <span className="text-[11px] text-slate-500 flex items-center gap-1"><svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {u(t, "revenue", "Revenue")}</span>
        <span className="text-[13px] font-heading font-bold text-emerald-600">$620,000</span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BUYER PHASES (1-4)
   ═══════════════════════════════════════════════════════════ */

function BuyerPhase1({ t }: { t: DeckContent }) {
  const listings = [
    { company: "EcoMarine GmbH", fuel: "e-Methanol", port: "Busan", qty: "200 MT", price: "$980/MT" },
    { company: "Nordic Bio AS", fuel: "Synthetic Ethanol", port: "Houston", qty: "300 MT", price: "$1,150/MT" },
  ];

  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <PageTitle>{u(t, "marketplace", "Marketplace")}</PageTitle>
      <div className="flex gap-1.5">
        <div className="flex-1 h-5 bg-white border border-slate-200 rounded px-1.5 flex items-center">
          <span className="text-[11px] text-slate-300 font-heading">{u(t, "allFuels", "All Fuels")}</span>
        </div>
        <div className="flex-1 h-5 bg-white border border-slate-200 rounded px-1.5 flex items-center">
          <span className="text-[11px] text-slate-300 font-heading">{u(t, "allPorts", "All Ports")}</span>
        </div>
      </div>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-1.5 flex-1">
        {listings.map((l, i) => (
          <motion.div key={i} variants={staggerChild} className="p-2 bg-white rounded-lg border border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-heading font-bold text-slate-700">{l.company}</span>
              <span className="text-[11px] font-heading font-bold text-emerald-600">{l.price}</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {l.fuel} · {l.port} · {l.qty}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function BuyerPhase2({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <PageTitle>{u(t, "marketplace", "Marketplace")}</PageTitle>

      {/* New listing — highlighted */}
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="show"
        className="p-2 bg-sky-50/60 rounded-lg border border-sky-300/50 ring-1 ring-sky-200/30 shadow-sm"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <SmallBadge color="blue">{u(t, "newListing", "NEW")}</SmallBadge>
            <span className="text-[11px] font-heading font-bold text-slate-700">GreenFuels B.V.</span>
          </div>
          <span className="text-[11px] font-heading font-bold text-emerald-600">$1,240/MT</span>
        </div>
        <div className="text-[11px] text-slate-400 mt-0.5">Bio Methanol · Rotterdam · 500 MT · CI 30.5</div>
        <div className="flex gap-1 mt-1">
          <SmallBadge>FuelEU ✓</SmallBadge>
          <SmallBadge>EU ETS ✓</SmallBadge>
        </div>
      </motion.div>

      {/* Existing listings pushed down, dimmed */}
      {[
        { company: "EcoMarine GmbH", fuel: "e-Methanol", port: "Busan", qty: "200 MT", price: "$980/MT" },
        { company: "Nordic Bio AS", fuel: "Synthetic Ethanol", port: "Houston", qty: "300 MT", price: "$1,150/MT" },
      ].map((l, i) => (
        <div key={i} className="p-2 bg-white rounded-lg border border-slate-200 opacity-50">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-heading font-bold text-slate-700">{l.company}</span>
            <span className="text-[11px] font-heading font-bold text-emerald-600">{l.price}</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            {l.fuel} · {l.port} · {l.qty}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function BuyerPhase3({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-heading font-bold text-slate-700">GreenFuels B.V.</span>
        <span className="text-[11px] font-heading font-bold text-emerald-600">$1,240/MT</span>
      </div>

      {/* Compliance card */}
      <motion.div variants={popIn} initial="hidden" animate="show" className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200/60 space-y-1">
        <span className="text-[11px] font-heading font-bold text-emerald-700 flex items-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          {u(t, "complianceCheck", "Compliance Check")}
        </span>
        {["FuelEU Maritime", "EU ETS", "RED III"].map((fw) => (
          <div key={fw} className="flex items-center gap-1 text-[11px] text-emerald-700">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> {fw}
          </div>
        ))}
        <div className="text-[11px] text-slate-500 mt-0.5">
          CI: 28.3 gCO₂/MJ · {u(t, "certified", "Certified")}
        </div>
      </motion.div>

      {/* Total */}
      <div className="px-2 py-1.5 bg-white rounded border border-slate-200 flex justify-between items-center">
        <span className="text-[11px] text-slate-400">500 MT × $1,240/MT</span>
        <span className="text-[11px] font-heading font-bold text-slate-800">
          {u(t, "total", "Total")}: $620,000
        </span>
      </div>

      <div className="mt-auto">
        <ActionBtn color="blue" pulse>
          {u(t, "buyNow", "Buy Now")} →
        </ActionBtn>
      </div>
    </motion.div>
  );
}

function BuyerPhase4({ t }: { t: DeckContent }) {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col gap-2">
      <motion.div variants={popIn} initial="hidden" animate="show" className="flex items-center gap-1.5 text-emerald-600">
        <span className="text-sm">✓</span>
        <span className="text-[11px] font-heading font-bold">{u(t, "orderConfirmed", "Order Confirmed")}</span>
      </motion.div>

      <div className="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
        <div className="text-[11px] font-heading font-semibold text-slate-700">GreenFuels B.V. → You</div>
        <div className="text-[11px] text-slate-400">Bio Methanol · 500 MT · $1,240/MT</div>
        <div className="text-[11px] text-slate-400">Rotterdam · Q2 2026</div>
      </div>

      <div className="p-2 bg-slate-100/80 rounded-lg space-y-1">
        <span className="text-[11px] font-heading font-bold text-slate-500 flex items-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          {u(t, "certificates", "Certificates")}
        </span>
        {[
          u(t, "certificateOfOrigin", "Certificate of Origin"),
          u(t, "fueleuCompliance", "FuelEU Compliance"),
          u(t, "euEtsAllowances", "EU ETS Allowances"),
        ].map((cert) => (
          <div key={cert} className="text-[11px] text-slate-600 flex items-center gap-1">
            <span className="text-emerald-500">✓</span> {cert}
          </div>
        ))}
      </div>

      <div className="p-2 bg-emerald-50/80 rounded border border-emerald-200/60 text-center">
        <span className="text-[11px] text-emerald-700 font-heading font-semibold flex items-center justify-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {u(t, "paymentSecured", "Payment secured via escrow")}
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function SlideDemo() {
  const t = useContent();
  const prefersReduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReduced || paused) return;
    const id = setInterval(() => setPhase((p) => (p + 1) % NUM_PHASES), PHASE_MS);
    return () => clearInterval(id);
  }, [prefersReduced, paused]);

  const sellerNav = [0, 3, 3, 1, 1]; // dashboard → create → inventory → orders → orders
  const buyerNav = [0, 1, 1, 1, 1]; // dashboard → marketplace throughout
  const sellerBadge = phase >= 3 ? 1 : 0;

  return (
    <SlideWrapper>
      <SlideBackground variant="grid" tint="blue" />

      {/* heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-2"
      >
        <h2 className="text-xl md:text-2xl font-display text-text-primary mb-0.5">{t.demo.heading}</h2>
        <p className="text-xs text-text-secondary font-body max-w-lg mx-auto">{t.demo.subtitle}</p>
      </motion.div>

      {/* two browser windows — Buyer left, Seller right (per design spec) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex gap-4 max-w-6xl mx-auto w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* BUYER (left panel — blue-tinted) */}
        <BrowserWindow
          url="app.verdaxis.exchange/buyer"
          label={`${t.demo.buyer.label} — ${t.demo.buyer.sublabel}`}
          labelColor="text-sky-400"
        >
          <AppShell mode="buyer" active={buyerNav[phase]}>
            <AnimatePresence mode="wait">
              {phase === 0 && <BuyerTerminal key="b0" />}
              {phase === 1 && <BuyerPhase1 key="b1" t={t} />}
              {phase === 2 && <BuyerPhase2 key="b2" t={t} />}
              {phase === 3 && <BuyerPhase3 key="b3" t={t} />}
              {phase === 4 && <BuyerPhase4 key="b4" t={t} />}
            </AnimatePresence>
          </AppShell>
        </BrowserWindow>

        {/* SELLER (right panel — green-tinted) */}
        <BrowserWindow
          url="app.verdaxis.exchange/supplier"
          label={`${t.demo.seller.label} — ${t.demo.seller.sublabel}`}
          labelColor="text-green-400"
        >
          <AppShell mode="seller" active={sellerNav[phase]} badge={sellerBadge}>
            <AnimatePresence mode="wait">
              {phase === 0 && <SellerTerminal key="s0" />}
              {phase === 1 && <SellerPhase1 key="s1" t={t} />}
              {phase === 2 && <SellerPhase2 key="s2" t={t} />}
              {phase === 3 && <SellerPhase3 key="s3" t={t} />}
              {phase === 4 && <SellerPhase4 key="s4" t={t} />}
            </AnimatePresence>
          </AppShell>
        </BrowserWindow>
      </motion.div>

      {/* progress dots + live indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-2 mt-3"
      >
        {/* step progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: NUM_PHASES }).map((_, i) => {
            const stepLabels = [
              u(t, "commandCenter", "Terminal"),
              ...t.demo.buyer.steps,
            ];
            return (
              <button
                key={i}
                onClick={() => setPhase(i)}
                className="group flex items-center gap-1.5 cursor-pointer"
                aria-label={`Step ${i + 1}: ${stepLabels[i]}`}
              >
                <motion.div
                  animate={{
                    width: phase === i ? 24 : 8,
                    backgroundColor: phase === i ? "#5DADE2" : "#CBD5E1",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-2 rounded-full"
                />
                {phase === i && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[8px] font-heading font-semibold text-verdaxis-blue uppercase tracking-wider"
                  >
                    {stepLabels[i]}
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>

        {/* live demo toggle */}
        <button
          onClick={() => setPaused((p) => !p)}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/5 hover:bg-slate-800/10 rounded-full transition-colors cursor-pointer"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${paused ? "bg-slate-400" : "bg-red-500 animate-pulse"}`} />
          <span className="text-[11px] font-heading font-semibold text-slate-400 uppercase tracking-wider">
            {paused ? "Paused" : "Live Demo"}
          </span>
        </button>
      </motion.div>
    </SlideWrapper>
  );
}
