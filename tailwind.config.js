/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customText: ["Candal", "sans-serif"],
      },
      colors: {
        colorBackGround: "#245274",
        colorGreen: "#69ffb6",
        colorGrediant1: "#6effb8",
        colorGrediant2: "#b5ffb6",
        colorGrediant3: "#e1ffb5",
        colorBlue: "#baf3fb",
        colorGrediantDark1: "#2f6587",
        colorGrediantDark2: "#183f66",
      },
    },
  },
  plugins: [],
};
