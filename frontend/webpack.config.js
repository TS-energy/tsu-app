const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // how does webpack know specifically this rule applies
        exclude: /node_modules/, // exclude the node_modules
        use: {
          loader: "babel-loader",
        },
        // query :{
        //   presets: ['env']
        // }
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      // "process.env": {
      //   // This has effect on the react lib size
      //   NODE_ENV: JSON.stringify("production"),
        
      // },
      'process.env.NODE_ENV' : JSON.stringify('production')
    }),
  ],
};
