"use client";

interface SubSlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubSlideWrapper({ children, className = "" }: SubSlideWrapperProps) {
  return (
    <div className={`w-full min-h-0 flex flex-col gap-6 ${className}`}>
      {children}
    </div>
  );
}
