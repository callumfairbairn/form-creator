/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        "fade-out": "opacity-fade 2s forwards",
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        "opacity-fade": {
          "0%": {opacity: 1},
          "25%": {opacity: 0.75},
          "100%": {opacity: 0},
        }
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
}
