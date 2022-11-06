/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['react-web-portfolio-sigma.vercel.app']
  }
}

module.exports = nextConfig
