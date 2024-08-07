/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Kalam", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        colorChange: {
          "0%": { color: "red" },
          "50%": { color: "purple" },
          "100%": { color: "green" },
        },
      },
      animation: {
        colorChange: "colorChange 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
