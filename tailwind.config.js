/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        presicav: ["presicav", "sans-serif"],
        poppinsMedium: ["poppinsMedium", "sans-serif"],
        poppinsSemiBold: ["poppinsSemiBold", "sans-serif"],
        poppinsLight: ["poppinsLight", "sans-serif"],
        poppinsExtraLight: ["poppinsExtraLight", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
