/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#372D95",
        accent: "hsl(21, 83%, 55%)",
        background: "#fdfdfd",
        Neutral: "hsl(278, 100%, 97%)",
        primaryLight: "hsla(246, 54%, 38%)",
        dark: "hsl(0, 0%, 15%)",
        lightBlue: "#EEECFF",
      },
      screens: {
        desktop: "705px",
      },
      spacing: {
        gs: "5.625rem",
        grid: "4.68rem",
        space: "15px",
      },
    },
  },
  plugins: [],
};
