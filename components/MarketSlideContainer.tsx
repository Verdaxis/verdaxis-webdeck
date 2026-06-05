"use client";

import { useState, useCallback, useEffect, useRef, useMemo, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { slideTransition } from "@/lib/animations";
import SlideNavigation from "@/components/SlideNavigation";
import MobileGate from "@/components/MobileGate";
import { preloadSlideById, slideRegistry } from "@/lib/slideRegistry";
import { MarketI18nProvider, useMarketContent } from "@/lib/marketI18n";
import type { DeckAudience, DeckConfig } from "@/lib/decks/types";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function MarketSlideContainerInner({
  deck,
}: {
  deck: DeckConfig;
}) {
  const marketContent = useMarketContent();
  const slides = deck.slides;

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

  if (isMobile) {
    return <MobileGate />;
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#F8FAFC]"
      style={{ height: "100dvh" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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

      <motion.div
        className="absolute top-5 right-6 md:top-6 md:right-8 z-30"
        animate={{ opacity: showLogo ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden={!showLogo}
      >
        <Image
          src="/images/logos/verdaxis-logo-words-right.png"
          alt="Verdaxis"
          width={120}
          height={36}
          priority
          style={{ height: "auto" }}
        />
      </motion.div>

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
        labels={marketContent.nav}
        showLanguageSelector={false}
      />
    </div>
  );
}

export default function MarketSlideContainer({
  deck,
}: {
  deck: DeckConfig;
}) {
  const audience = (deck.audience ?? "sales") as DeckAudience;

  return (
    <MarketI18nProvider audience={audience}>
      <MarketSlideContainerInner deck={deck} />
    </MarketI18nProvider>
  );
}
