/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Candal", "sans-serif"],
      },
      colors: {
        colorBackground: "#fcfcfc",
        colorBigText: "#302315",
        colorSmallText: "#342a23",
        colorBorder: "#8b8785",
        colorGreen: "#34c186",
        coloLightGray: "#e8e8e8",
        colorYello: "#f5df23",
      },
    },
  },
  plugins: [],
};
