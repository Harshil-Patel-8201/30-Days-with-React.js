/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["Ephesis", "cursive"],
      },
      colors: {
        colorBlack: "#1d1e1b",
      },
    },
  },
  plugins: [],
};
