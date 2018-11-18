const path = require('path');
const HelloCompilationPlugin = require('./plugins/index');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  plugins: [
    new HelloCompilationPlugin({
      name: 'ngnice',
      output: path.resolve(__dirname, 'compile.json')
    })
  ]
};