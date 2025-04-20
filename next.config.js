/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Add this to ensure paths have a trailing slash
  assetPrefix: '/Next.js-021-Trade-task/', // Set this to match your GitHub repository name
}

module.exports = nextConfig;
