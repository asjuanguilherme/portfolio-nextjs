/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',')
  }
}

module.exports = withPWA(nextConfig)
