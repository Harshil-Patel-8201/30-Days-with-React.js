/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Abel", "sans-serif"],
      },
      colors: {
        colorGradient1: "#97989f",
        colorGradient2: "#d1d3d7",
        colorDark: "#0f1322",
      },
    },
  },
  plugins: [],
};
