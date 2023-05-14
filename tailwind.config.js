/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headText: ['Play', "sans-serif"],
      },
      colors: {
        greenBg: "#c9e501",
      },
    },
  },
  plugins: [],
};
