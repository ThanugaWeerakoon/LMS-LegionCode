/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #2b1c46, #4b2f6f, #663c8b)',
      },
    },
  },
  plugins: [],
};
