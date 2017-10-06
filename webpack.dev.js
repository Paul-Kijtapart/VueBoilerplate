const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        open: true
    },
    performance: {
        hints: false
    },
});