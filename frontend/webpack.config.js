const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "app.bundle.js",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/, // how does webpack know specifically this rule applies
        exclude: /node_modules/, // exclude the node_modules
        
        loader: "babel-loader",
        options: {
          presets: [
              '@babel/preset-env',
              '@babel/react',{
                  'plugins': ['@babel/plugin-proposal-class-properties']
              },
              '@babel/preset-typescript'
          ],
        }
        // query :{
        //   presets: ['env']
        // }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // exclude: /node_modules/
      }
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
