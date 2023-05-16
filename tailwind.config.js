/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleText: ["Cardo", "serif"],
      },
      colors: {
        bgBrown: "#351313",
        bgRed: "#780f1a",
        yelloWhite: "#fff4e6",
        bgLable: "#551e1e",
      },
    },
  },
  plugins: [],
};
