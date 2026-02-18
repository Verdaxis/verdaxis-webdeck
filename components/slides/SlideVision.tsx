"use client";

import { useState, useEffect, useMemo } from "react";
import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Ticker — infinite-scrolling price strip
   ──────────────────────────────────────────── */

function PriceTicker({
  items,
}: {
  items: { fuel: string; region: string; price: string; change: string; ci: string }[];
}) {
  // Duplicate items enough times to fill the scroll seamlessly
  const doubled = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-900">
      <div className="ticker-track flex whitespace-nowrap py-2.5">
        {doubled.map((item, i) => {
          const isPositive = item.change.startsWith("+");
          return (
            <span
              key={`${item.fuel}-${i}`}
              className="inline-flex items-center gap-3 px-5 text-xs tracking-wide"
            >
              <span className="font-heading font-semibold text-white/80">
                {item.fuel}
              </span>
              <span className="text-white/40">{item.region}</span>
              <span className="font-mono font-semibold text-brand-green">
                {item.price}
              </span>
              <span
                className={`font-mono font-medium ${
                  isPositive ? "text-emerald" : "text-red-400"
                }`}
              >
                {item.change}
              </span>
              <span className="text-verdaxis-blue/60 font-mono text-[10px]">
                {item.ci}
              </span>
              <span className="text-white/10">|</span>
            </span>
          );
        })}
      </div>

      {/* CSS-driven infinite scroll */}
      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
        }
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ────────────────────────────────────────────
   Floating particles (subtle background dots)
   ──────────────────────────────────────────── */

function Particles() {
  const prefersReduced = useReducedMotion();
  const COUNT = 20;

  const dots = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        duration: 20 + Math.random() * 30,
        delay: Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.2,
      })),
    [],
  );

  if (prefersReduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <div
          key={d.id}
          className="absolute rounded-full bg-verdaxis-blue"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `particle-drift-${d.id % 4} ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes particle-drift-0 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, -40px); }
        }
        @keyframes particle-drift-1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-25px, 35px); }
        }
        @keyframes particle-drift-2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 20px); }
        }
        @keyframes particle-drift-3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-35px, -25px); }
        }
        @media (prefers-reduced-motion: reduce) {
          div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ────────────────────────────────────────────
   Typing animation for subtitle
   ──────────────────────────────────────────── */

function TypingText({ text, className }: { text: string; className?: string }) {
  const prefersReduced = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    setDisplayed("");
    setDone(false);

    const timer = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [text, prefersReduced]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-blink-cursor ml-0.5 text-verdaxis-blue">|</span>}
    </span>
  );
}

/* ────────────────────────────────────────────
   Main slide component
   ──────────────────────────────────────────── */

export default function SlideVision() {
  const t = useContent();
  const { headline, subtitle, tagline, tickerItems } = t.vision;

  const pills = useMemo(() => tagline.split(" | "), [tagline]);

  return (
    <SlideWrapper className="relative overflow-hidden bg-white p-0">
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Large blue radial orb */}
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 animate-breathing"
          style={{
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(93,173,226,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Green accent orb */}
        <div
          className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 animate-breathing"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 65%)",
            animationDirection: "reverse",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* ── Price ticker (top edge) ── */}
      <div className="relative z-10 w-full flex-shrink-0">
        <PriceTicker items={tickerItems} />
      </div>

      {/* ── Main content (centred vertically) ── */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 py-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Logo with pulsing glow */}
        <motion.div variants={scaleIn} className="relative mb-2">
          {/* Glow layer */}
          <div
            className="animate-pulse-glow absolute inset-0 -m-6 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(93,173,226,0.25) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <img
            src="/images/logos/verdaxis-icon.png"
            alt="Verdaxis"
            className="relative h-16 w-16 object-contain md:h-20 md:w-20"
          />
        </motion.div>

        {/* Company name */}
        <motion.span
          variants={fadeInUp}
          className="font-heading text-xl font-semibold uppercase tracking-[0.2em] text-slate-900 md:text-2xl"
        >
          Verdaxis
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl font-normal leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          style={{ maxWidth: "56rem" }}
        >
          {headline}
        </motion.h1>

        {/* Subtitle (typing effect) */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-base text-verdaxis-blue md:text-lg lg:text-xl"
        >
          <TypingText text={subtitle} />
        </motion.p>

        {/* Tagline pills */}
        <motion.div
          variants={staggerContainer}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          {pills.map((pill) => (
            <motion.span
              key={pill}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 backdrop-blur-md md:text-sm"
            >
              {/* Glowing dot */}
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-verdaxis-blue" />
              {pill.trim()}
            </motion.span>
          ))}
        </motion.div>

        {/* Year badge */}
        <motion.span
          variants={fadeInUp}
          className="mt-6 inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-1 text-xs tracking-[0.2em] text-brand-green"
        >
          2026
        </motion.span>
      </motion.div>
    </SlideWrapper>
  );
}
