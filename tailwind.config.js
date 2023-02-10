/** @type {import('tailwindcss').Config} */

const tailwindStripes = require("./stripes-plugin.cjs");

module.exports = {
  content: ["./src/**/*.{html,js}", './*.html'],
  theme: {
    extend: {},
  },
  plugins: [tailwindStripes],
}
