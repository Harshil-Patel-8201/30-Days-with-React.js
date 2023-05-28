/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["DM Serif Display", "serif"],
      },
      colors: {
        colorBackground: "#2b4241",
        colorDark: "#131c1c",
        colorYello: "#f7b941",
      },
    },
  },
  plugins: [],
};
