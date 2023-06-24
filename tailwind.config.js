/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Bellefair", "serif"],
      },
      colors: {
        colorBackground: "#f6f6f6",
        colorBlack: "#211f1f",
        colorOlive: "#566058",
        colorOrnage: "#d88344",
        colorGreen: "#566058",
        colorBorder: "#e7e6ea",
      },
    },
  },
  plugins: [],
};
