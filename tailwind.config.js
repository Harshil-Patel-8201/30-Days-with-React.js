/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        subText: ["Jost", "sans-serif"],
      },
      colors: {
        colorBackground: "#143d48",
        colorRed: "#8f282c",
        colorRedGredient1: "#822127",
        colorRedGredient2: "#69181d",
        colorRedGredient3: "#490b0e",
        colorGold: "#e9d2b8",
        colorBorder: "#6a7875",
        colorBackgroundDark: "#12282e",
        colorLightWhite: "#fff9f2",
      },
    },
  },
  plugins: [],
};
