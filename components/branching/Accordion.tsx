"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionContent } from "@/lib/animations";

interface AccordionProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ trigger, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        {trigger}
        <motion.svg
          className="w-4 h-4 text-white/40 shrink-0 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={accordionContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
