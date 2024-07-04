/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        graygradient: "linear-gradient(110deg,#79818c,#263242)",
        theme: "linear-gradient(90deg,#10e89c,#0593f7)",
      },
      colors: {
        // theme2:"linear-gradient(90deg,#10e89c,#0593f7)"
        bg1: "#f1f3f6",
      },
    },
  },
  plugins: [],
};
