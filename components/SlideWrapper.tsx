"use client";

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideWrapper({
  children,
  className = "",
}: SlideWrapperProps) {
  return (
    <div
      className={`
        w-full flex flex-col items-center px-4 sm:px-6 overflow-x-hidden
        min-h-screen py-8
        md:absolute md:inset-0 md:w-screen md:h-screen md:justify-center md:px-12 lg:px-20 md:py-8 md:overflow-y-auto md:overflow-x-hidden
        ${className}
      `}
      style={{ minHeight: "100dvh" }}
    >
      {children}
    </div>
  );
}
