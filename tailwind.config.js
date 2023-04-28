/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#F24A4E",
        white: "#FFFFFF",
        bcolor: "#ccc",
        lblack: "#777",
        black: "#111",
        input: "#efefef",
        blue: "#3F00FF",
      },
    },
  },
  plugins: [],
};
