import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          canvas: "#090d16",
        },
        accent: {
          cyan: "#38bdf8",
          emerald: "#10b981",
          purple: "#a855f7",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-hover": "0 14px 40px 0 rgba(99, 102, 241, 0.15)",
        "glow-indigo": "0 0 30px -5px rgba(99, 102, 241, 0.3)",
        "glow-cyan": "0 0 30px -5px rgba(56, 189, 248, 0.3)",
        "glow-emerald": "0 0 30px -5px rgba(16, 185, 129, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-delayed": "floatSlow 6s ease-in-out 3s infinite",
        "beam-scan": "beamScan 8s linear infinite",
        "shimmer-slide": "shimmerSlide 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.88", transform: "scale(1.02)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        beamScan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        shimmerSlide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
