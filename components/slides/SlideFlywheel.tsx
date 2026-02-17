"use client";

import { useMemo } from "react";
import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Geometry helpers
   ──────────────────────────────────────────── */

const NODE_COUNT = 5;
const ANGLE_STEP = (2 * Math.PI) / NODE_COUNT;
const START_ANGLE = -Math.PI / 2; // 12 o'clock position

/** Returns centre point (cx, cy) for node at given index on circle of given radius */
function nodePosition(index: number, radius: number, cx: number, cy: number) {
  const angle = START_ANGLE + index * ANGLE_STEP;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

/** Builds a curved SVG path (arc) between two adjacent nodes */
function arcPath(
  fromIdx: number,
  toIdx: number,
  radius: number,
  cx: number,
  cy: number,
): string {
  const from = nodePosition(fromIdx, radius, cx, cy);
  const to = nodePosition(toIdx, radius, cx, cy);

  // Use a quadratic bezier that bows outward from center
  const midAngle = START_ANGLE + ((fromIdx + 0.5) * ANGLE_STEP);
  const bowRadius = radius * 1.12;
  const ctrl = {
    x: cx + bowRadius * Math.cos(midAngle),
    y: cy + bowRadius * Math.sin(midAngle),
  };

  return `M ${from.x} ${from.y} Q ${ctrl.x} ${ctrl.y} ${to.x} ${to.y}`;
}

/* ────────────────────────────────────────────
   Arrow animation variants
   ──────────────────────────────────────────── */

const arrowDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.6, delay: 1.0 + i * 0.2, ease: "easeInOut" as const },
      opacity: { duration: 0.3, delay: 1.0 + i * 0.2 },
    },
  }),
};

const nodeAppear = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ────────────────────────────────────────────
   Flywheel SVG component
   ──────────────────────────────────────────── */

function FlywheelDiagram({
  nodes,
  centerLabel,
}: {
  nodes: { label: string; description: string }[];
  centerLabel: string;
}) {
  // SVG viewport dimensions
  const size = 600;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 210;
  const nodeCardW = 140;
  const nodeCardH = 72;

  const positions = useMemo(
    () => nodes.map((_, i) => nodePosition(i, radius, cx, cy)),
    [nodes.length],
  );

  return (
    <div className="relative w-full max-w-[600px] mx-auto aspect-square">
      {/* Subtle slow rotation container */}
      <div
        className="absolute inset-0 flywheel-rotate"
        aria-hidden
      >
        {/* Very faint orbit ring */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            stroke="rgba(93,173,226,0.08)"
            strokeWidth={1}
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Main SVG — arrows */}
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        fill="none"
        initial="hidden"
        animate="visible"
      >
        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="rgba(212,168,83,0.6)" />
          </marker>
        </defs>

        {/* Curved arrows between nodes */}
        {nodes.map((_, i) => {
          const nextIdx = (i + 1) % NODE_COUNT;
          const d = arcPath(i, nextIdx, radius, cx, cy);
          return (
            <motion.path
              key={`arrow-${i}`}
              d={d}
              stroke="rgba(212,168,83,0.35)"
              strokeWidth={2}
              fill="none"
              markerEnd="url(#arrowhead)"
              custom={i}
              variants={arrowDraw}
            />
          );
        })}
      </motion.svg>

      {/* Center label with radial glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col items-center justify-center text-center z-10"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 -m-10 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(93,173,226,0.15) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <span className="relative font-heading font-bold text-sm sm:text-base text-verdaxis-blue tracking-wide">
          {centerLabel}
        </span>
      </motion.div>

      {/* Node cards — positioned absolutely over SVG */}
      {nodes.map((node, i) => {
        const pos = positions[i];
        const isFirst = i === 0; // MarinaChain — gold accent

        return (
          <motion.div
            key={node.label}
            className={`absolute z-20 flex flex-col items-center text-center
              rounded-xl backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3
              ${isFirst
                ? "bg-gold-accent/[0.08] border border-gold-accent/30"
                : "bg-white/[0.04] border border-white/10"
              }`}
            style={{
              width: nodeCardW,
              left: `calc(${(pos.x / size) * 100}% - ${nodeCardW / 2}px)`,
              top: `calc(${(pos.y / size) * 100}% - ${nodeCardH / 2}px)`,
            }}
            custom={i}
            variants={nodeAppear}
            initial="hidden"
            animate="visible"
          >
            <span
              className={`font-heading font-semibold text-[11px] sm:text-xs leading-tight ${
                isFirst ? "text-gold-accent" : "text-white/90"
              }`}
            >
              {node.label}
            </span>
            <span className="text-white/40 text-[9px] sm:text-[10px] leading-tight mt-1 line-clamp-2">
              {node.description}
            </span>
          </motion.div>
        );
      })}

      {/* CSS for slow rotation */}
      <style jsx>{`
        .flywheel-rotate {
          animation: flywheel-spin 60s linear infinite;
        }
        @keyframes flywheel-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flywheel-rotate {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main slide
   ──────────────────────────────────────────── */

export default function SlideFlywheel() {
  const t = useContent();
  const { heading, subtitle, nodes, centerLabel } = t.flywheel;

  return (
    <SlideWrapper className="bg-deep-dark">
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Heading ── */}
        <motion.div className="flex items-center gap-4 self-start" variants={fadeInUp}>
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">
            {heading}
          </h2>
        </motion.div>

        <motion.p
          className="text-white/50 text-sm md:text-base self-start ml-6 -mt-2"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>

        {/* ── Flywheel diagram ── */}
        <FlywheelDiagram nodes={nodes} centerLabel={centerLabel} />
      </motion.div>
    </SlideWrapper>
  );
}
