/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E06F2",
        secondary: "#24262F",
      }
    },
  },
  plugins: [],
};
