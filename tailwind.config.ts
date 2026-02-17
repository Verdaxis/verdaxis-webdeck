import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-dark": "#0B1120",
        "dark-card": "#111827",
        "verdaxis-blue": "#5DADE2",
        "verdaxis-dark-blue": "#3B82B6",
        "gold-accent": "#D4A853",
        "gold-light": "#E8C87A",
        emerald: "#10B981",
        "slate-border": "rgba(93,173,226,0.15)",
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
