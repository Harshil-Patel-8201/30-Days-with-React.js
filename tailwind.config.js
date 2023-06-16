/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Big Shoulders Display", "cursive"],
      },
      colors: {
        colorOrange: "#f45836",
        colorBackground: "#1d181a",
        colorWhite: "#f0ede2",
        colorSmallText: "#cfcbc7",
        colorBorder: "#797476",
      },
    },
  },
  plugins: [],
};
