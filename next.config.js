/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript :{
    ignoreBuildErros : true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['blush.design', 'lh3.googleusercontent.com'],
  }
 
}


module.exports = nextConfig
