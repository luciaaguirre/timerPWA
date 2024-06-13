import CopyPlugin from 'copy-webpack-plugin'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, argv) => ({
  entry: './main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      },

      {
        test: /\.css|s[ac]ss$/,
        exclude: /node-modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jp?g|gif|svg|eot|ttf|woff|woff2|mp3|wav|mp4|webm)$/i,
        exclude: /node-modules/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      {
        test: /\.html$/,
        exclude: /node-modules/,

        use: ['html-loader']
      },
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: './[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'module'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new CopyPlugin({
      patterns: [
        { from: './src/images/screenshots', to: 'assets' },
        { from: './sw.js', to: './' }
      ]
    })
  ]
})
