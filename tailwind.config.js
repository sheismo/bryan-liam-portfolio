/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  extend: {
    opacity: {
      '62': '.62',
      '71': '.71'
    }
  },
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      "green-1": "#0A9173",
      "green-2": "#3BA78F",
      "grey-1": "#1E2730",
      "grey-2": "#171A21",
      "blue": "#BAE0D8"
    },
    fontFamily: {
      Dancing: ["'Dancing Script'", "cursive"],
      Montserrat: ["Montserrat", "Arial", "'Sans Serif'"]
    }
  },
  plugins: [],
}
