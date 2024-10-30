/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
    },

    extend: {
      colors: {
        "primary-yellow": "#FFAB1F",
      },
    },
  },
  plugins: [],
};
