/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Static export option
  output: "export",

  // Conditionally set basePath depending on the environment
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",

  // Ensure paths have a trailing slash (important for GitHub Pages)
  trailingSlash: true,
  // Disable Image Optimization for static export
  images: {},
};

module.exports = nextConfig;
