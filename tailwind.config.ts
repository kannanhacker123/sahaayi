import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        border: "var(--color-border)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",

        text: {
          strong: "var(--color-text-strong)",
          subtle: "var(--color-text-subtle)",
          disabled: "var(--color-disabled)",
        },

        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-base)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
