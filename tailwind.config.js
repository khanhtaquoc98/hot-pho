/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxl: '1440px', // 👈 defines xxl: as min-width 1440px
      },
      fontFamily: {
        copy: ['Platform Web', 'Geneva', 'Helvetica', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        title: ['roc-grotesk-compressed', 'sans-serif'],
      },
      colors: {
        red: '#e21837',
      },
      backgroundColor: {
        red: '#e21837',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
