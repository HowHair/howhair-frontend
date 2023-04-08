module.exports = {
  entry: './server.js',
  output: {
    filename: 'compiled.js',
  },
  resolve: {
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
