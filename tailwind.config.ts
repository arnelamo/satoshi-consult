import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem", // <---- Not working
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      lineHeight: {
        "115": "1.15",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sectionBackground: "var(--section-background)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: "var(--primary)",
        green: "var(--green)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
