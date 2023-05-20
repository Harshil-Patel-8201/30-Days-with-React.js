/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        styleText: ["Merriweather", "serif"],
      },
      colors: {
        colorGreen: "#61785d",
        colorBrown: "#a88867",
        colorPurple: "#e5d5ff",
        colorLightYello: "#fdf8ec",
        colorSmallText: "#d9e7d7",
        colorTitleText: "#fdfffd",
      },
    },
  },
  plugins: [],
};
