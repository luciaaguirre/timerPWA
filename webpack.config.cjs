const path = require('path')

module.exports = (_, argv) => ({
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  devtool: argv.mode === 'development' ? 'source-map' : false
})
