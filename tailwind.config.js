/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
