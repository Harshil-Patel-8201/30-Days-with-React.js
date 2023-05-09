/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headText: ["Konkhmer Sleokchher", "cursive"],
      },
      colors: {
        bgColor: "#2a3029",
      },
    },
  },
  plugins: [],
};
