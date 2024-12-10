/** @type {import('tailwindcss').Config} */
export default {
  // Which files do you want to watch for tailwind classes?
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Setting font family
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      // Adding custom class for tailwind to make development easier
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
