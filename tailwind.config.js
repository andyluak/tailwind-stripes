/** @type {import('tailwindcss').Config} */

const tailwindStripes = require("./src");

module.exports = {
  content: ["./src/**/*.{html,js}", './*.html'],
  theme: {
    extend: {},
  },
  plugins: [tailwindStripes],
}
