'use strict';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: false,
    devtool: 'source-map',
    devServer: {
        noInfo: true,
        inline: true,
        stats: {
            chunks:false
        }
    },
    entry: [
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            //{test: /\.js$/, loader: 'eslint-loader'}
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        /*
        new webpack.optimize.UglifyJsPlugin({
        compressor: {
        screw_ie8: true,
        warnings: false
            }
        }),
        */
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("production")
           }
       }),
       new HtmlWebpackPlugin({
           inject: 'body',
           title: 'react-es6-jest-enzyme',
           templateContent: '<form class="main-page"></form>'
       })
    ]
};
