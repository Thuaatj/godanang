// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
  ignoreBuildErrors: true,
  },
  images: {
  unoptimized: true,
  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // cho phép tất cả domain (tạm thời cho dev)
        
      },
    ],
  },
};

module.exports = nextConfig;