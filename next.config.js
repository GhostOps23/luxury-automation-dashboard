/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placeholder.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig