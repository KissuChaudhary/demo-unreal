/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  async redirects() {
    return [
      {
        source: "/:path*/",
        destination: "/:path*", // Redirect to the non-slash version
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
