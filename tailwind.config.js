/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Cormorant Garamond", "serif"],
      },
      colors: {
        colorGredientStart: "#3c414f",
        colorGredientVia: "#6a667e",
        colorGredientEnd: "#57536e",
        colorOrange: "#fd8b00",
        colorDarkGray: "#2b2a3e",
      },
    },
  },
  plugins: [],
};
