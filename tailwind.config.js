/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        graygradient: "linear-gradient(110deg,#79818c,#263242)",
        theme: "linear-gradient(90deg,#10e89c,#0593f7)",
        animatingtheme:"linear-gradient(90deg,#10e89c,#0593f7,#10e89c)"
      },
      colors: {
        theme: "#10e89c",
        bg1: "#f1f3f6",
      },
    },
  },
  plugins: [],
};
