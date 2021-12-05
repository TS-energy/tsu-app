const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  // create a nice object from the env variable
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  console.log(envKeys);

  return {
    entry: {
      staticInfo: './src/staticInfo/index.tsx',
      calculator: './src/calculator/index.tsx'
    },
    output: {
      path: path.resolve(__dirname, "./static/scripts"),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['', '.css', '.ts', '.tsx', '.js']
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
          // ,
          // query :{
          //   presets: ['env']
          // }
        },
  
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        },

        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'file-loader',
          exclude: /node_modules/
        },
      ],
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new webpack.DefinePlugin(//{
        // "process.env": {
        //   // This has effect on the react lib size
        //   NODE_ENV: JSON.stringify("production"),
        // },
        //'process.env': JSON.stringify('development'),

      //  'process.env.NODE_ENV' : JSON.stringify('development')
      //}
      envKeys
      ),
    ]
  };

};
