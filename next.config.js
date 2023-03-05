/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    standalone: true,
    outputFiles: true,
  },
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['s3.us-east-2.amazonaws.com'],
  },
  webpack(config) {
    // Modify the existing webpack config here
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
