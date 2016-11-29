module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'latest',
            'stage-3'
          ]
        }
      }
    ]
  }
}
