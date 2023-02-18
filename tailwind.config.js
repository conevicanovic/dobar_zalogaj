/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      pc: "640px",
      // => @media (min-width: 640px) { ... }

      mobile: { max: "640px" },
    },
  },
  plugins: [],
};
