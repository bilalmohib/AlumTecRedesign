/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "bookslibrary.net",
      "images.unsplash.com",
      "s.yimg.com",
      "generation-sessions.s3.amazonaws.com",
      "alumtec.ca",
      "example.com",
      "img.freepik.com",
      "wpassets.graana.com",
      "flagcdn.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com"
    ],
  },

  // // TailwindCSS
  // // https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss-manually
  // // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

  // tailwindcss: {
  //   config: "./tailwind.config.js",
  //   styled: "styled-components",
  //   format: "auto",
  // },

  // Add modular CSS support

  // modules: true,
};

module.exports = nextConfig;
