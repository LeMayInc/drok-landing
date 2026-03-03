import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A87C",
          light: "#D4B896",
          dark: "#B8956A",
        },
        surface: {
          DEFAULT: "#141414",
          raised: "#1A1A1A",
          overlay: "#1E1E1E",
        },
        border: {
          DEFAULT: "#262626",
          light: "#333333",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "SF Mono",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
