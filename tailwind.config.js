/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  purge: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/_app.tsx",
    "./pages/_document.tsx",
    "/styles/**/*.{css,module.css,scss,sass}",
    "./styles/globals.css",
  ],
  content: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/_app.tsx",
    "./pages/_document.tsx",
    "./styles/**/*.{css,module.css,scss,sass}",
    "./styles/globals.css",
  ],
  theme: {
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
