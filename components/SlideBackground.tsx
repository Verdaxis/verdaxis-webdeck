"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ────────────────────────────────────────────
   SlideBackground — atmospheric animated backgrounds
   for slides that need more visual depth than plain white

   Variants:
   - "mesh"     → Animated gradient mesh (soft color blobs)
   - "grid"     → Subtle dot grid with floating lines
   - "waves"    → Flowing SVG wave lines
   - "orbs"     → Large breathing radial orbs (default)
   ──────────────────────────────────────────── */

type Variant = "mesh" | "grid" | "waves" | "orbs";

interface SlideBackgroundProps {
  variant?: Variant;
  /** Tint color: "blue" | "green" | "mixed" */
  tint?: "blue" | "green" | "mixed";
}

/* ── Animated gradient mesh ── */
function MeshBg({ tint }: { tint: string }) {
  const colors = tint === "green"
    ? { a: "rgba(76,175,80,0.06)", b: "rgba(93,173,226,0.04)", c: "rgba(76,175,80,0.03)" }
    : tint === "blue"
    ? { a: "rgba(93,173,226,0.06)", b: "rgba(76,175,80,0.04)", c: "rgba(93,173,226,0.03)" }
    : { a: "rgba(93,173,226,0.05)", b: "rgba(76,175,80,0.05)", c: "rgba(93,173,226,0.04)" };

  return (
    <>
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          top: "-10%", left: "-5%",
          background: `radial-gradient(circle, ${colors.a} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          bottom: "-8%", right: "-3%",
          background: `radial-gradient(circle, ${colors.b} 0%, transparent 65%)`,
        }}
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -35, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350, height: 350,
          top: "30%", right: "20%",
          background: `radial-gradient(circle, ${colors.c} 0%, transparent 60%)`,
        }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ── Dot grid with subtle connecting lines ── */
function GridBg() {
  const dots = useMemo(() => {
    const result: { x: number; y: number; delay: number }[] = [];
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 16; col++) {
        if (Math.random() > 0.4) continue; // sparse
        result.push({
          x: (col / 15) * 100,
          y: (row / 11) * 100,
          delay: Math.random() * 3,
        });
      }
    }
    return result;
  }, []);

  return (
    <>
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-verdaxis-blue/15"
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* ── Flowing SVG waves ── */
function WavesBg({ tint }: { tint: string }) {
  const color1 = tint === "green" ? "rgba(76,175,80,0.06)" : "rgba(93,173,226,0.06)";
  const color2 = tint === "green" ? "rgba(76,175,80,0.04)" : "rgba(93,173,226,0.04)";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,90 1440,80 L1440,200 L0,200 Z"
          fill={color1}
        />
        <path
          d="M0,120 C320,50 640,150 960,80 C1200,30 1360,120 1440,90 L1440,200 L0,200 Z"
          fill={color2}
        />
      </motion.svg>
      <motion.svg
        className="absolute top-0 right-0 w-full rotate-180"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ height: "30%", opacity: 0.5 }}
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,100 C400,20 800,160 1200,60 C1340,30 1400,70 1440,60 L1440,200 L0,200 Z"
          fill={color1}
        />
      </motion.svg>
    </div>
  );
}

/* ── Large breathing orbs ── */
function OrbsBg({ tint }: { tint: string }) {
  const blueAlpha = tint === "green" ? 0.04 : 0.07;
  const greenAlpha = tint === "blue" ? 0.03 : 0.06;

  return (
    <>
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 animate-breathing"
        style={{
          width: 600,
          height: 600,
          background: `radial-gradient(circle, rgba(93,173,226,${blueAlpha}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 animate-breathing"
        style={{
          width: 450,
          height: 450,
          background: `radial-gradient(circle, rgba(76,175,80,${greenAlpha}) 0%, transparent 65%)`,
          animationDirection: "reverse",
          animationDuration: "12s",
        }}
      />
    </>
  );
}

export default function SlideBackground({
  variant = "orbs",
  tint = "mixed",
}: SlideBackgroundProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    // Just show static subtle orbs for reduced motion
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <OrbsBg tint={tint} />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {variant === "mesh" && <MeshBg tint={tint} />}
      {variant === "grid" && <GridBg />}
      {variant === "waves" && <WavesBg tint={tint} />}
      {variant === "orbs" && <OrbsBg tint={tint} />}
    </div>
  );
}
