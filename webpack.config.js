const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
  entry: './src/pages/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images',
            },
        },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.next)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
