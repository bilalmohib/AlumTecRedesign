/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "bookslibrary.net",
      "images.unsplash.com",
      "s.yimg.com",
      "generation-sessions.s3.amazonaws.com",
      "alumtec.ca",
    ],
  },

  // TailwindCSS
  // https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss-manually
  // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

  tailwindcss: {
    config: "./tailwind.config.js",
    styled: "styled-components",
    format: "auto",
  },

  // Add modular CSS support

  modules: true,
};

module.exports = nextConfig;
