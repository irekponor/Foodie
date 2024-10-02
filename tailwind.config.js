/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#179957",
        color2: "#184d47",
      },
      container: {
        center: true,
        padding: "45px",
      },
    },
  },
  plugins: [],
};
