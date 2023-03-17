const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const { EnvironmentPlugin } = require("webpack");

const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      API: "https://bradgarropy.com",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);   