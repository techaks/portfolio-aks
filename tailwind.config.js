/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // 👈 force class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
