"use client";

import { createContext, useContext, useRef, useCallback, type ReactNode } from "react";

interface BranchContextValue {
  isBranchOpen: React.RefObject<boolean>;
  setBranchOpen: (open: boolean) => void;
}

const BranchContext = createContext<BranchContextValue>({
  isBranchOpen: { current: false },
  setBranchOpen: () => {},
});

export function BranchProvider({ children }: { children: ReactNode }) {
  const isBranchOpen = useRef(false);

  const setBranchOpen = useCallback((open: boolean) => {
    isBranchOpen.current = open;
  }, []);

  return (
    <BranchContext.Provider value={{ isBranchOpen, setBranchOpen }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  return useContext(BranchContext);
}
