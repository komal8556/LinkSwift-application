/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#63CAFD",
        secondary : "#CAFCE6",
        background : "#EBF8FF",
        accent : "#EF0B72",
        textColor : "#012232"
      },
      fontFamily : {
        Poppins : ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

