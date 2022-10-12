/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['blush.design', 'lh3.googleusercontent.com'],
  }
 
}

module.exports = nextConfig
