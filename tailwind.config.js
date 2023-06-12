/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["Rubik", "sans-serif"],
      },
      colors: {
        colorBlack: "#212222",
        colorMaroon: "#6B3054",
        colorViolen: "#5e5caa",
        colorGray: "#95A9AE",
        colorOrange: "#DE6220",
        colorSceen: "#F4C993",
        colorShadeWhite: "#F9FCFB",
        colorWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
