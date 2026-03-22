/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.cyan,
          DEFAULT: colors.cyan[400],
        },
      },
      perspective: {
        1000: "1000px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out 0.2s both",
        "fade-in": "fadeIn 1s ease-out 0.4s both",
        "underline-expand": "underlineExpand 1s ease-out 0.5s both",
        "bounce-slow": "bounce 2s infinite",
        scroll: "scroll 1.5s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        underlineExpand: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        scroll: {
          "0%": { opacity: "1", top: "8px" },
          "100%": { opacity: "0", top: "24px" },
        },
      },
    },
  },
  plugins: [],
};
