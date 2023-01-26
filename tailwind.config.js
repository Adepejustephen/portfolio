/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", " sans-serif"],
      },
      colors: {
        dark: "#333333",
        lightbl: "#4CCFF9",
        orange: "#FFBE00",
      },
      maxWidth: {
        "6.5xl": "1200px",
        "xbs": "1600px",
      },
    },
  },
  plugins: [],
};
