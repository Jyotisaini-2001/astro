/** @format */

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        successGreen: "rgba(53, 186, 128, 1)",
        darkRed: "rgba(239, 88, 98, 1)",
        darkBlue: "rgba(14, 35, 57, 1)",
        darkGrey: 'rgba(14, 35, 57, 0.5)',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
