"use client";

import { useState, useCallback, useEffect, useRef, useMemo, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { slideTransition } from "@/lib/animations";
import { useContent } from "@/lib/i18n";
import SlideNavigation from "./SlideNavigation";
import { BranchProvider } from "@/lib/branchContext";
import { preloadSlideById, slideRegistry } from "@/lib/slideRegistry";
import type { DeckConfig } from "@/lib/decks/types";

/**
 * UserSlideContainer — like SlideContainer but without the mobile gate.
 * Used exclusively for the user-facing onboarding deck, which is responsive.
 */

function UserSlideContainerInner({
  deck,
  slideMetadata,
}: {
  deck: DeckConfig;
  slideMetadata?: Record<string, { title: string; section: string }>;
}) {
  const t = useContent();
  const slides = useMemo(
    () =>
      deck.slides.map((entry, index) => ({
        index,
        id: entry.id,
        title:
          slideMetadata?.[entry.id]?.title ??
          t.slides[entry.id as keyof typeof t.slides]?.title ??
          entry.id,
        section:
          slideMetadata?.[entry.id]?.section ??
          t.slides[entry.id as keyof typeof t.slides]?.section ??
          "",
      })),
    [deck.slides, t, slideMetadata]
  );
  const totalSlides = deck.slides.length;
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window === "undefined") return 0;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = deck.slides.findIndex((s) => s.id === hash);
      if (idx >= 0) return idx;
    }
    return 0;
  });
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const isAnimating = useRef(false);
  const animationUnlockTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingDigits = useRef("");
  const digitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();
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
    [currentSlide, slides, transitionLockMs, totalSlides]
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Preload adjacent slides
  useEffect(() => {
    const ids = [
      slides[currentSlide]?.id,
      slides[currentSlide + 1]?.id,
      slides[currentSlide - 1]?.id,
    ];
    for (const id of ids) {
      if (id) preloadSlideById(id);
    }
  }, [currentSlide, slides]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (digitTimeout.current) clearTimeout(digitTimeout.current);
      if (animationUnlockTimeout.current) clearTimeout(animationUnlockTimeout.current);
    };
  }, []);

  // Touch / swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) nextSlide();
        else prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  const renderSlide = (index: number) => {
    const entry = deck.slides[index];
    if (!entry) return null;
    const reg = slideRegistry[entry.id];
    if (!reg) return null;
    const SlideComponent = reg.component;
    return (
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-7 w-7 rounded-full border-2 border-slate-200 border-t-verdaxis-blue animate-spin" />
          </div>
        }
      >
        <SlideComponent />
      </Suspense>
    );
  };

  const showLogo = currentSlide > 0;

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#F8FAFC]"
      style={{ height: "100dvh" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #5DADE2 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-3%] w-[450px] h-[450px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #4CAF50 0%, transparent 65%)" }}
        />
      </div>

      {/* Persistent logo */}
      <motion.div
        className="absolute top-5 right-6 md:top-6 md:right-8 z-30"
        animate={{ opacity: showLogo ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden={!showLogo}
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

      {/* Slide transitions */}
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

export default function UserSlideContainer({
  deck,
  slideMetadata,
}: {
  deck: DeckConfig;
  slideMetadata?: Record<string, { title: string; section: string }>;
}) {
  return (
    <BranchProvider>
      <UserSlideContainerInner deck={deck} slideMetadata={slideMetadata} />
    </BranchProvider>
  );
}
