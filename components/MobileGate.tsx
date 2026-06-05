import Image from "next/image";

export default function MobileGate() {
  return (
    <div className="mobile-gate">
      <div className="mobile-gate-orb mobile-gate-orb--1" />
      <div className="mobile-gate-orb mobile-gate-orb--2" />

      <svg className="mobile-gate-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
          fill="rgba(93,173,226,0.06)"
        />
        <path
          d="M0,80 C320,30 640,110 960,60 C1200,20 1360,90 1440,70 L1440,120 L0,120 Z"
          fill="rgba(93,173,226,0.04)"
        />
      </svg>

      <div className="mobile-gate-content">
        <Image
          src="/images/logos/verdaxis-logo-words-right.png"
          alt="Verdaxis"
          width={180}
          height={54}
          priority
          style={{ height: "auto", opacity: 0.85 }}
        />

        <div className="mobile-gate-divider" />

        <svg
          className="mobile-gate-icon"
          width="56"
          height="56"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="6"
            width="40"
            height="28"
            rx="3"
            stroke="rgba(93,173,226,0.4)"
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="24" y1="34" x2="24" y2="40" stroke="rgba(93,173,226,0.25)" strokeWidth="1.5" />
          <line
            x1="16"
            y1="40"
            x2="32"
            y2="40"
            stroke="rgba(93,173,226,0.25)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="10" y="12" width="18" height="1.5" rx="0.75" fill="rgba(93,173,226,0.15)" />
          <rect x="10" y="16" width="12" height="1.5" rx="0.75" fill="rgba(93,173,226,0.12)" />
          <rect x="10" y="20" width="22" height="1.5" rx="0.75" fill="rgba(93,173,226,0.10)" />
          <polygon points="34,17 34,25 40,21" fill="rgba(93,173,226,0.2)" />
        </svg>

        <h1 className="mobile-gate-heading">Best viewed on desktop</h1>

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
