/**
 * 本地预览
 */

'use strict'
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseWebpackConfig, {

  // 入口
  entry: {
    main: './example/main',
    vendors: ['vue']
  },
  // 输出
  output: {
    path: path.join(__dirname, '../example/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    }
  },
  mode:'development',
  // cheap-module-eval-source-map is faster for development
  //devtool: config.dev.devtool,
  devtool: "false",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../example/dist/index.html'),
      template: path.join(__dirname, '../example/index.html'),
      inject: true
    }),
    //new FriendlyErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../example/assets'),
        to:path.resolve(__dirname, '../example/dist/assets'),
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, '../src/assets'),
        to:path.resolve(__dirname, '../example/dist/assets'),
        ignore: ['.*']
      },
      {
        from: 'node_modules/desp-library/dist',
        to:path.resolve(__dirname, '../example/dist/assets'),
        ignore: ['.*']
      }
    ])
  ]
})

