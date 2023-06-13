/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: [],
      },
      colors: {
        colorGray: "#5c6a78",
        colorGreen: "#6cb573",
        colorBlack: "#20261d",
        colorOrange: "#ef846a",
        colorBorder: "#e9e9e9",
        colorGredientEnd: "#f8f5f3",
        colorGredientStart: "#edeff1",
        colorWhiteBackground: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
