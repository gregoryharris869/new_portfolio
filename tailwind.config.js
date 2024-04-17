/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2B6381",
        brandAccent: "#F5F5F5",
        text1: "#D2DBDE",
        text2: "#A1A7AA",
        surface1: "#1C2123",
        surface2: "#252A2C",
        surface3: "#303436",
        surface4: "#3F4244",
        surfaceShadow: "#363A3C",
        shadowStrength: 0.8,
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
