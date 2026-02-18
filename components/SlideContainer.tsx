"use client";

import { useState, useCallback, useEffect, useRef, useMemo, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { slideTransition } from "@/lib/animations";
import { useContent } from "@/lib/i18n";
import SlideNavigation from "./SlideNavigation";
import { BranchProvider, useBranch } from "@/lib/branchContext";
import { preloadSlideById, slideRegistry } from "@/lib/slideRegistry";
import type { DeckConfig } from "@/lib/decks/types";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function SlideContainerInner({ deck, slideMetadata }: { deck: DeckConfig; slideMetadata?: Record<string, { title: string; section: string }> }) {
  const t = useContent();
  const { isBranchOpen } = useBranch();
  const slides = useMemo(
    () => deck.slides.map((entry, index) => ({
      index,
      id: entry.id,
      title: slideMetadata?.[entry.id]?.title ?? t.slides[entry.id as keyof typeof t.slides]?.title ?? entry.id,
      section: slideMetadata?.[entry.id]?.section ?? t.slides[entry.id as keyof typeof t.slides]?.section ?? "",
    })),
    [deck.slides, t, slideMetadata]
  );
  const totalSlides = deck.slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const isAnimating = useRef(false);
  const animationUnlockTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingDigits = useRef("");
  const digitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const transitionLockMs = prefersReducedMotion ? 120 : 450;
  const contentTransition = useMemo(
    () =>
      prefersReducedMotion
        ? {
            enter: { opacity: 0 },
            center: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
          }
        : slideTransition,
    [prefersReducedMotion]
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (isMobile) {
        // On mobile, scroll to the section
        const el = document.getElementById(`slide-${slides[index]?.id}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (isAnimating.current) return;
      if (index < 0 || index >= totalSlides || index === currentSlide) return;
      isAnimating.current = true;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${slides[index].id}`);
      }
      if (animationUnlockTimeout.current) clearTimeout(animationUnlockTimeout.current);
      animationUnlockTimeout.current = setTimeout(() => {
        isAnimating.current = false;
      }, transitionLockMs);
    },
    [currentSlide, slides, isMobile, transitionLockMs]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isBranchOpen.current) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        pendingDigits.current += e.key;
        if (digitTimeout.current) clearTimeout(digitTimeout.current);
        digitTimeout.current = setTimeout(() => {
          pendingDigits.current = "";
        }, 1500);
      } else if (e.key === "Enter" && pendingDigits.current) {
        e.preventDefault();
        const target = parseInt(pendingDigits.current, 10) - 1;
        pendingDigits.current = "";
        if (digitTimeout.current) clearTimeout(digitTimeout.current);
        if (target >= 0 && target < totalSlides) {
          goToSlide(target);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = slides.findIndex((s) => s.id === hash);
      if (idx >= 0) setCurrentSlide(idx);
    }
  }, [slides, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const ids = [
      slides[currentSlide]?.id,
      slides[currentSlide + 1]?.id,
      slides[currentSlide - 1]?.id,
    ];
    for (const id of ids) {
      if (id) preloadSlideById(id);
    }
  }, [currentSlide, isMobile, slides]);

  useEffect(() => {
    return () => {
      if (digitTimeout.current) clearTimeout(digitTimeout.current);
      if (animationUnlockTimeout.current) clearTimeout(animationUnlockTimeout.current);
    };
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (isBranchOpen.current || isMobile) return;
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) nextSlide();
        else prevSlide();
      }
    },
    [nextSlide, prevSlide, isMobile]
  );

  const renderSlide = (index: number) => {
    const entry = deck.slides[index];
    if (!entry) return null;
    const reg = slideRegistry[entry.id];
    if (!reg) return null;
    const SlideComponent = reg.component;

    const props: Record<string, unknown> = {};
    if (entry.id === "toc" || entry.id.endsWith("-toc")) {
      props.onGoTo = goToSlide;
      props.deck = deck;
    }
    if (entry.branches) {
      props.branches = entry.branches;
    } else if (entry.noBranches) {
      props.branches = [];
    }

    return (
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-7 w-7 rounded-full border-2 border-slate-200 border-t-verdaxis-blue animate-spin" />
          </div>
        }
      >
        <SlideComponent {...props} />
      </Suspense>
    );
  };

  // Hide logo on cover slide (0)
  const showLogo = currentSlide > 0;

  /* ══════════ MOBILE: Desktop-only gate ══════════ */
  if (isMobile) {
    return (
      <div className="mobile-gate">
        {/* Ambient orbs */}
        <div className="mobile-gate-orb mobile-gate-orb--1" />
        <div className="mobile-gate-orb mobile-gate-orb--2" />

        {/* Wave decoration at bottom */}
        <svg
          className="mobile-gate-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
            fill="rgba(93,173,226,0.06)"
          />
          <path
            d="M0,80 C320,30 640,110 960,60 C1200,20 1360,90 1440,70 L1440,120 L0,120 Z"
            fill="rgba(93,173,226,0.04)"
          />
        </svg>

        {/* Content */}
        <div className="mobile-gate-content">
          <Image
            src="/images/logos/verdaxis-icon.png"
            alt="Verdaxis"
            width={140}
            height={35}
            priority
            style={{ height: "auto", opacity: 0.85 }}
          />

          <div className="mobile-gate-divider" />

          {/* Monitor icon */}
          <svg
            className="mobile-gate-icon"
            width="56"
            height="56"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4" y="6" width="40" height="28" rx="3"
              stroke="rgba(93,173,226,0.4)" strokeWidth="1.5" fill="none"
            />
            <line
              x1="24" y1="34" x2="24" y2="40"
              stroke="rgba(93,173,226,0.25)" strokeWidth="1.5"
            />
            <line
              x1="16" y1="40" x2="32" y2="40"
              stroke="rgba(93,173,226,0.25)" strokeWidth="1.5" strokeLinecap="round"
            />
            <rect x="10" y="12" width="18" height="1.5" rx="0.75" fill="rgba(93,173,226,0.15)" />
            <rect x="10" y="16" width="12" height="1.5" rx="0.75" fill="rgba(93,173,226,0.12)" />
            <rect x="10" y="20" width="22" height="1.5" rx="0.75" fill="rgba(93,173,226,0.10)" />
            <polygon points="34,17 34,25 40,21" fill="rgba(93,173,226,0.2)" />
          </svg>

          <h1 className="mobile-gate-heading">
            Best viewed on desktop
          </h1>

          <p className="mobile-gate-body">
            This presentation is optimized for larger screens.
            <br />
            Please revisit on a laptop or desktop for the full experience.
          </p>

          <div className="mobile-gate-pill">
            <span className="mobile-gate-pill-dot" />
            Interactive Deck
          </div>
        </div>
      </div>
    );
  }

  /* ══════════ DESKTOP: Slide-by-slide with transitions ══════════ */
  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#F8FAFC]"
      style={{ height: "100dvh" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle ambient orbs — matching landing page */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #5DADE2 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-3%] w-[450px] h-[450px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #4CAF50 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Persistent logo — fades in/out based on slide */}
      <motion.div
        className="absolute top-5 right-6 md:top-6 md:right-8 z-30"
        animate={{ opacity: showLogo ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/logos/verdaxis-icon.png"
          alt="Verdaxis"
          width={80}
          height={20}
          priority
          style={{ height: "auto" }}
        />
      </motion.div>

      {/* Content transitions only */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={contentTransition}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {renderSlide(currentSlide)}
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
      />
    </div>
  );
}

export default function SlideContainer({ deck, slideMetadata }: { deck: DeckConfig; slideMetadata?: Record<string, { title: string; section: string }> }) {
  return (
    <BranchProvider>
      <SlideContainerInner deck={deck} slideMetadata={slideMetadata} />
    </BranchProvider>
  );
}
