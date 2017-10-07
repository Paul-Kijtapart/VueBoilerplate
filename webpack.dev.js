const path = require('path');
const DIST = path.resolve(__dirname, "dist");

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 9000,
        stats: {colors: true},
        contentBase: DIST,
        historyApiFallback: true,
        hot: true,
        open: true,
        stats: "errors-only"
    },
    performance: {
        hints: false
    },
});