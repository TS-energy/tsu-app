const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.config");
const {EnvironmentPlugin} = require("webpack");

const devConfig = {
  mode:"development",
  plugins : [
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      API : "https:// dev.bradgarropy.com"
    })
  ]
};

module.exports = merge(commonConfig, devConfig);