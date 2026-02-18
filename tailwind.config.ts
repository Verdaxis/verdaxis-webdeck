import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F8FAFC",
        "bg-card": "#FFFFFF",
        "text-primary": "#0F172A",
        "text-secondary": "#64748B",
        "text-body": "#334155",
        "border-light": "#E2E8F0",
        "verdaxis-blue": "#5DADE2",
        "verdaxis-dark-blue": "#0284C7",
        "brand-green": "#4CAF50",
        "brand-green-light": "#66BB6A",
        emerald: "#10B981",
        "slate-border": "rgba(93,173,226,0.15)",
        // Legacy aliases for incremental migration
        "deep-dark": "#0F172A",
        "dark-card": "#FFFFFF",
        "gold-accent": "#4CAF50",
        "gold-light": "#66BB6A",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Lato", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 25px rgba(0,0,0,0.06), 0 4px 10px rgba(0,0,0,0.04)",
        "card-lg": "0 4px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
