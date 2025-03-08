/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        'accent': '#8284FF',
      },
    },
  },
  plugins: [],
}
