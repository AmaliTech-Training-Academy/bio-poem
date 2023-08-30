/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {

      },
      colors: {
        customOrange: '#F06A30',
        customGrey1: '#D1D5DB',
        customGrey2: '#9CA3AF',
      },
    },
  },
  plugins: [],
}

