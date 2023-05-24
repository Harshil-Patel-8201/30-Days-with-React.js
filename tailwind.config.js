/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        numberText: ["Jost", "sans-serif"],
      },
      colors: {
        colorBlack: "#141414",
        colorYello: "#ffd400",
        colorGray: "#9e9e9e",
      },
    },
  },
  plugins: [],
};
