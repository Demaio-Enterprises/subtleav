/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    outputFiles: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.chunkFilename = 'static/chunks/[name].[fullhash].js';
    }
    return config;
  },
  outputDirectory: '/subtleav/dist',
}

module.exports = {
  nextConfig,
  images: {
    domains: ['s3.us-east-2.amazonaws.com'],
  },
  experimental: {
    outputFileTracing: true,
  },
}
