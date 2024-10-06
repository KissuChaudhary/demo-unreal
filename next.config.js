/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  images: {
    domains: ['blog.unrealshot.com'],
  }
};

module.exports = nextConfig;
