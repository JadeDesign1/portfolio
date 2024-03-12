/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora", "san-serif"],
      },
      colors: {
        primary: ["#2e866c"],
        text4: "#64c6f3",
        text1: "#7f9bb3",
        text2: "#a9bccc",
        text3: "#d4dee6",
        bg1: "#295880",
        bg2: "#547999",
        bg3: "#d4dee6",
      },
      backgroundImage: {
        pageImage1: "url('/src/assets/1.jpg)",
        pageImage2: "url('/src/assets/2.jpg)",
        pageImage3: "url('/src/assets/3.jpg)",
        pageImage4: "url('/src/assets/4.jpeg)",
        pageImage5: "url('/src/assets/5.jpg)",
      },
    },
  },
  plugins: [],
};
