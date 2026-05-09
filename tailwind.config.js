/** @type {import('tailwindcss').Config} */
module.exports= {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    }

    ,
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
          display: ["Clash Display", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
      }

      ,
      colors: {
        background: "#050505",
          surface: "#0a0a0a",
          accent: "#10b981", // Emerald
      }

      ,
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.32,0.72,0,1)',
      }

      ,
      letterSpacing: {
        'tighter': '-0.04em',
      }
    }

    ,
  }

  ,
  plugins: [],
}

;