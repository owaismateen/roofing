import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2A43",
          hover: "#091D30",
          light: "#173B5E",
          dark: "#081726",
        },
        accent: {
          DEFAULT: "#F26B21",
          hover: "#D95610",
          dark: "#BD4607",
          light: "#F58747",
        },
        slate: {
          dark: "#1E2A35",
          DEFAULT: "#1E2A35",
          charcoal: "#162029",
        },
        surface: {
          light: "#F5F7FA",
          DEFAULT: "#F5F7FA",
          muted: "#EBF0F5",
        },
        trust: {
          green: "#2E9E6B",
          DEFAULT: "#2E9E6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-barlow-condensed)", "Impact", "Arial Black", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "10px",
        md: "10px",
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 42, 67, 0.08)",
        "soft-lg": "0 10px 30px -4px rgba(15, 42, 67, 0.12)",
        "card-hover": "0 14px 34px -4px rgba(242, 107, 33, 0.15)",
        "hero-glow": "0 20px 60px -15px rgba(242, 107, 33, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
