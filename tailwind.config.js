/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF3F9",
          100: "#D9E3EF",
          200: "#B3C5DC",
          300: "#7F9BBF",
          400: "#4D6F99",
          500: "#2C4D78",
          600: "#1D3A5E",
          700: "#152C48",
          800: "#0E2238",
          900: "#0A1828",
          950: "#060F1A",
        },
        gold: {
          50: "#FDF8EC",
          100: "#FAEDCB",
          200: "#F4DB97",
          300: "#EDC66A",
          400: "#E3B04B",
          500: "#D39A2E",
          600: "#B07A22",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-25px, 20px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
    },
  },
  plugins: [],
};
