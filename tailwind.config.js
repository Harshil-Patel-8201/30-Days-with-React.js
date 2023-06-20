/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        colorBackground: "#dddddd",
        colorOrange: "#fe8b10",
        colorWhite: "#f9f9f9",
        colorTextShade: "#494949",
        colorBorder: "#999999",
      },
    },
  },
  plugins: [],
};
