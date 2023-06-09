/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#FF6C00",
        accent_1: "#FFD700",
        accent_2: "#77DD77",
      },
      fontFamily: {
        crimson: ["'Crimson Pro'", "sans-serif"],
        signika: ["'Signika Negative'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
