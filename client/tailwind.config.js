/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          secondary: "#06B6D4",
          accent: "#3B82F6",
          bg: "#050816",
          surface: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
