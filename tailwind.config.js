/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "/styles/**/*.{css,module.css,scss,sass}",
  ],
  content: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "/styles/**/*.{css,module.css,scss,sass}",
  ],
  theme: {
    fontFamily: {
      sharp: ["Sharp Grotesk"],
      serif: ["ui-serif", "Georgia"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      theme: {
        fontFamily: {
          sharp: ["Sharp Grotesk"],
          serif: ["ui-serif", "Georgia"],
          lato: ["Lato", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
