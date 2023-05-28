/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["DM Serif Display", "serif"],
      },
      colors: {
        colorBlack: "#131313",
        colorTitle: "#fafafa",
        colorText: "#f9f9f9",
        colorDarkGreen: "#1d574d",
        colorYello: "#daa638",
      },
    },
  },
  plugins: [],
};
