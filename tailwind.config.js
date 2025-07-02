/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#1e1f20",
        bl: "#0E0E0E", // 원하는 이름으로 등록
        ap: "#A8C7FA",
        c4: "#c4c7c5",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
