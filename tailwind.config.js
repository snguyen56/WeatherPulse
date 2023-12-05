/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#180202",
        background: "#CDF5FD",
        primary: "#A0E9FF",
      },
      screens: {
        "3xl": "1750px",
      },
    },
  },
  plugins: [],
};
