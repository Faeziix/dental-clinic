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
        primary: "hsla(246, 54%, 38%, 1)",
        accent: "hsla(21, 83%, 55%, 1)",
        Neutral: "hsla(278, 100%, 97%, 1)",
        primaryLight: "hsla(246, 54%, 38%, 0.8)",
        dark: "hsla(0, 0%, 15%, 1)",
        lightBlue: "#EEECFF",
      },
    },
  },
  plugins: [],
};
