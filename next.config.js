const { redirect } = require("next/dist/server/api-utils");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        permanent: true
      },
      {
        source: "/home",
        destination: "/events",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
