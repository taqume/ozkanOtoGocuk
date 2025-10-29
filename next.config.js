/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Vercel deployment optimization
  output: 'standalone',
}

module.exports = nextConfig
