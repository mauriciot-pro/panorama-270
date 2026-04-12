import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Panorama 270 brand colors
        navy: {
          DEFAULT: "#091235",   // Main nav / header background
          light: "#0d1a4a",
        },
        silver: {
          DEFAULT: "#C8C8C8",   // Nav links & accent text
          light: "#E0E0E0",
        },
        divider: "#D7D7D8",     // Section dividers
      },
      fontFamily: {
        sans: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Lato'", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        wider: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
