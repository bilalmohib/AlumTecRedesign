/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  purge: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./app/Components/**/*.{js,ts,jsx,tsx}",
    "./app/pageComponents/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sharp: ["Sharp Grotesk"],
        serif: ["ui-serif", "Georgia"],
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        mlg: "970px",
        ssm: "400px",
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        bgCareerForm: "#FAFCFF",
        blogTitle: "#666666",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
