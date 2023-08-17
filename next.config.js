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
};

module.exports = nextConfig;
