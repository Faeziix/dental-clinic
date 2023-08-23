/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        desktop: "705px",
      },
      colors: {
        primary: "#372D95",
        accent: "hsl(21, 83%, 55%)",
        background: "#fdfdfd",
        Neutral: "hsl(278, 100%, 97%)",
        primaryLight: "hsla(246, 54%, 38%)",
        dark: "hsl(0, 0%, 15%)",
        lightBlue: "#EEECFF",
      },
      spacing: {
        gs: "5.625rem",
        grid: "4.68rem",
        space: "15px",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
