/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Rancho", "cursive"],
      },
      colors: {
        colorDarkGray: "#34333c",
        colorSceen: "#e9d4b2",
        colorYello: "#ffac32",
        colorWhiteShade: "#fffbf3",
        colorLightViolien: "#c2b6c6",
      },
    },
  },
  plugins: [],
};
