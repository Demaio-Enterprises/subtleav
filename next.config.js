/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = {
  nextConfig,
  images: {
    domains: ['s3.us-east-2.amazonaws.com'],
  },
}
