import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#06448E",
        "sky-blue": "#00CCFF",
        seafoam: "#09DBA9",
        "spring-green": "#6BFCA6",
        "pale-mint": "#CFFFA6",
        "soft-cream": "#FDFFE1",
        "amber-warning": "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
