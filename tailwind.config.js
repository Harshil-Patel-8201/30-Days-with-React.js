/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["Merriweather", "serif"],
      },
      colors: {
        colorBlack: "#222429",
        colorBlue: "#3481EF",
        colorRed: "#FF4E00",
        colorYello: "#F7DF1E",
        colorgray: "#979797",
        colorWhite: "#F5F6F6",
      },
    },
  },
  plugins: [],
};
