import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        "ink-soft": "#3A3733",
        paper: "#FFFFFF",
        sand: "#F5F2EE",
        "sand-deep": "#EAE4DB",
        brass: "#8B7355",
        "brass-light": "#A89178",
        line: "#E5E0D8",
      },
      fontFamily: {
        mincho: ["var(--font-mincho)", "serif"],
        gothic: ["var(--font-gothic)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.3em",
      },
      maxWidth: {
        content: "1120px",
        narrow: "720px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 1.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
