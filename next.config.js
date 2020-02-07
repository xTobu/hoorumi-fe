const path = require("path");
const webpack = require("webpack");

module.exports = {
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/index" },
      // "/dashboard": { page: "/dashboard" },
      // "/pen": { page: "/pen/index" },
      // "/pen/hook": { page: "/pen/hook" },
      // "/pen/redux": { page: "/pen/redux" },
    };
  },
  exportTrailingSlash: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
