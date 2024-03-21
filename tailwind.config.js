/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      noto_sans: ["NotoSansJP", "sans-serif"],
    },
    colors: {
      c_white: "#FFFFFF",
      primary: {
        300: "#FFCC21",
        400: "#FF963C",
        500: "#EA6C00",
      },
      dark: {
        500: "#414141",
        600: "#2E2E2E",
      },
      gray: {
        300: "#707070",
        400: "#777777",
      },
    },
  },
  plugins: [],
};
