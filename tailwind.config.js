/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {fontFamily:{'Oxanium':['Oxanium']},
    extend: {},
  },
  plugins: [require("daisyui")],
}

