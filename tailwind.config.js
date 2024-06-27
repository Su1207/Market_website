/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite AU TAS"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
