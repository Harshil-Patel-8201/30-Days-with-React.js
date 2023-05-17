/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleText: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        bgBlack: "#1b1b1b",
        bgGrayDark: "#434343",
        bgGrayLight: "#515151",
        bgLightGreen: "#cae943",
        smallText: "#828282",
        blurGray: "#2c2c2c",
        blurLightGrar: "#484848",
      },
    },
  },
  plugins: [],
};
