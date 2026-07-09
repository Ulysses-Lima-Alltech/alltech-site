import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#111111",
          800: "#262626",
        },
        brand: {
          blue: "#2563EB",
          blueDark: "#1E40AF",
          blueSoft: "#DBEAFE",
          cyan: "#06B6D4",
          black: "#050505",
          graphite: "#111827",
          softBlack: "#111827",
          white: "#FFFFFF",
          offwhite: "#F8FAFC",
          soft: "#F1F5F9",
          surface: "#F8FAFC",
          border: "#E5E7EB",
          muted: "#4B5563",
        },
      },
      boxShadow: {
        glow: "0 14px 34px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
