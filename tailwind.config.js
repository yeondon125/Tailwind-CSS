/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: ["./index.html"], // 혹은 ./src/**/*.html 등
  theme: {
    extend: {
      colors: {
        darkgray: "#1e1f20", // 원하는 이름으로 등록
      },
    },
  },
  plugins: [],
};
