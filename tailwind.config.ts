import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        concrete: "#070707",
        steel: "#0E0E0E",
        iron: "#161616",
        line: "#1F1F1F",
        ash: "#7A7A7A",
        bone: "#EDEDED",
        electric: {
          DEFAULT: "#00E5FF",
          deep: "#0055FF",
          dim: "#0B7C8C",
          ghost: "rgba(0, 229, 255, 0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        brutal: "-0.06em",
        wide2: "0.35em",
      },
      transitionTimingFunction: {
        brutal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        scanline: "scanline 7s linear infinite",
        blink: "blink 1.05s step-end infinite",
        marquee: "marquee 28s linear infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
