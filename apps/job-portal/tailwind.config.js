/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Look for classes in the `app` directory
    './components/**/*.{js,ts,jsx,tsx}', // Look for classes in the `components` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
