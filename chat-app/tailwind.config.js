/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boreal: "'Borel', cursive",
        monse: "'Montserrat', sans-serif",
        raj: "'Rajdhani', sans-serif",
      }
    },
  },
  plugins: [],
}

