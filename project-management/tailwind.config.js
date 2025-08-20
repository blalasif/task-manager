/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // app dir under src
    "./src/components/**/*.{js,ts,jsx,tsx}", // components under src
    "./src/**/*.{js,ts,jsx,tsx}", // catch-all fallback
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
