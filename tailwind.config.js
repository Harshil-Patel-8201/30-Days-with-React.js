/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Bodoni Moda", "serif"],
      },
      colors: {
        colorBackground: "#e9e9e9",
        colorBlack: "#312925",
        colorSubText: "#383838",
        colorRed: "#e02107",
      },
    },
  },
  plugins: [],
};
