/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#332E54',
        inactive: '#8e8e8e',
        error: "#721c24"
      },
    },
  },
  plugins: [],
};
