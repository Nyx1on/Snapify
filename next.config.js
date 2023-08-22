/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require("node:path");

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
