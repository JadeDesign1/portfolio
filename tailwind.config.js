/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', 'san-serif']
      },
      colors: {
        primary: ['#2e866c'],
        secondary: ["#d3e0dd"],
        tertiary: ["#e4eb88"]
      },
      backgroundImage: {
        pageImage1: "url('/src/assets/1.jpg)",
        'pageImage2': "url('/src/assets/2.jpg)",
        'pageImage3': "url('/src/assets/3.jpg)",
        'pageImage4': "url('/src/assets/4.jpeg)",
        'pageImage5': "url('/src/assets/5.jpg)"
      }
    },
  },
  plugins: [],
}

