/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "query",
            key: "path",
            value: "(.+[^/])$",  // This ensures non-slash URLs are redirected
          },
        ],
        destination: "/:path*/", // Redirect to the version with the slash
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
