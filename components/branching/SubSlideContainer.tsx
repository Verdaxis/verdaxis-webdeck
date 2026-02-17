"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { modalOverlay, modalContent, slideTransition } from "@/lib/animations";
import { useBranch } from "@/lib/branchContext";
import SubSlideNavigation from "./SubSlideNavigation";

interface SubSlideContainerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: React.ReactNode[];
  title?: string;
}

export default function SubSlideContainer({
  isOpen,
  onClose,
  slides,
  title,
}: SubSlideContainerProps) {
  const { setBranchOpen } = useBranch();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    setBranchOpen(isOpen);
    if (!isOpen) setCurrent(0);
    return () => setBranchOpen(false);
  }, [isOpen, setBranchOpen]);

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current, slides.length]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        goPrev();
      }
    },
    [onClose, goNext, goPrev]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown, true);
      return () => window.removeEventListener("keydown", handleKeyDown, true);
    }
  }, [isOpen, handleKeyDown]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-navy/90 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl md:mx-4 md:rounded-2xl bg-gradient-to-br from-[#0a2a4a] to-[#061e3a] border border-white/10 flex flex-col overflow-hidden"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              {title && <h3 className="text-lg font-bold text-white">{title}</h3>}
              <button
                onClick={onClose}
                className="ml-auto p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sub-slide content */}
            <div className="flex-1 overflow-y-auto relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideTransition}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="px-6 py-6"
                >
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-20">
                        <div className="w-6 h-6 border-2 border-seafoam/30 border-t-seafoam rounded-full animate-spin" />
                      </div>
                    }
                  >
                    {slides[current]}
                  </Suspense>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <SubSlideNavigation
              current={current}
              total={slides.length}
              onPrev={goPrev}
              onNext={goNext}
              onBack={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
