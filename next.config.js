/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

const CMS_URL = new URL(process.env.NEXT_PUBLIC_CMS_URL)

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [CMS_URL.hostname]
  }
}

module.exports = withPWA(nextConfig)
