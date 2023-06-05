/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["Cabin", "sans-serif"],
      },
      colors: {
        colorBlue: "#135ce7",
        colorGray: "#f3f5f7",
        colorOrange: "#ff6803",
        colorGreen: "#5bb47a",
        colorSmallText: "#6a7579",
        colorBlack: "#010103",
        colorPink: "#f26874",
      },
    },
  },
  plugins: [],
};
