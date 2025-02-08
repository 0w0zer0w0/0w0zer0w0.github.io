/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Static export option
  output: "export",

  // If deploying to a subpath (e.g., https://username.github.io/repo-name), set basePath
  basePath: "/Portfolio", // Replace 'your-repo-name' with your actual GitHub repository name

  // Ensure paths have a trailing slash (important for GitHub Pages)
  trailingSlash: true,
};

module.exports = nextConfig;
