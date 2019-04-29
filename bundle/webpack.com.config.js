const path = require('path');
const getCommonPlugins = require('./getCommonPlugins');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src', 'index'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      components: path.resolve(__dirname, '../src', 'components'),
      layouts: path.resolve(__dirname, '../src', 'layouts'),
      utils: path.resolve(__dirname, '../src', 'utils'),
      settings: path.resolve(__dirname, '../src', 'settings'),
    },
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom',
    PropTypes: 'prop-types',
    ReactRouterDOM: 'react-router-dom',
    MobxReact: 'mobx-react',
  },
  optimization: {
    usedExports: true,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'common',
        },
      },
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
            limit: '1024',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|mp4)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: getCommonPlugins(),
};
