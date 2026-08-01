import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#DC2626",
          light: "#EF4444",
          dark: "#991B1B",
        },
        graylight: "#F8FAFC",
        medblue: {
          DEFAULT: "#2563EB",
          glow: "#60A5FA",
        },
        ink: "#0B0F14",
      },
      fontFamily: {
        display: ["'Clash Display'", "Poppins", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(220, 38, 38, 0.15)",
        glow: "0 0 40px rgba(220, 38, 38, 0.35)",
        blueglow: "0 0 40px rgba(37, 99, 235, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(8deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.08)" },
          "20%": { transform: "scale(0.98)" },
          "30%": { transform: "scale(1.12)" },
          "40%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.8s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        spinSlow: "spinSlow 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
