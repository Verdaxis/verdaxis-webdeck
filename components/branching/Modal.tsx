"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { modalOverlay, modalContent } from "@/lib/animations";
import { useBranch } from "@/lib/branchContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const { setBranchOpen } = useBranch();

  useEffect(() => {
    setBranchOpen(isOpen);
    return () => setBranchOpen(false);
  }, [isOpen, setBranchOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown, true);
      return () => window.removeEventListener("keydown", handleKeyDown, true);
    }
  }, [isOpen, handleKeyDown]);

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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-deep-dark/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl md:mx-4 md:rounded-2xl bg-gradient-to-br from-[#0D1B2A] to-[#0B1120] border border-white/10 overflow-y-auto"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0D1B2A]/90 backdrop-blur-sm border-b border-white/5">
              {title && (
                <h3 className="text-lg font-bold text-white">{title}</h3>
              )}
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

            {/* Body */}
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
