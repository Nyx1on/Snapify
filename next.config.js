/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require("node:path");

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
    ],
  },
};
