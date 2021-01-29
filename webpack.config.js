const { join, resolve } = require('path');

module.exports = {
  entry: './src',
  mode: 'development',
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            } 
          }
        ],
        // include: __dirname + '/src'
      }
    ]
  }
};