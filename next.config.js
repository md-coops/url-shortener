/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: 'http://localhost:3000/api/',
  },
};

module.exports = nextConfig
