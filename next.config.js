/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bookslibrary.net',
      'images.unsplash.com',
      's.yimg.com',
    ],
  },
}

module.exports = nextConfig
