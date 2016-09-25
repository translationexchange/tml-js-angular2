var path = require('path');
var webpack = require('webpack');

const isDevServer = process.argv.find(function (v) {
    return v.includes('webpack-‌​dev-server');
});

module.exports = {
    entry: "./tml-angular2.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "tml-angular2.js",
        library: 'ng2',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    externals: {
        '@angular/core': {
            root: ['ng', 'core'],
            commonjs: '@angular/core',
            commonjs2: '@angular/core',
            amd: '@angular/core'
        },
        'rxjs/Rx': {root: 'Rx', commonjs: 'rxjs/Rx', commonjs2: 'rxjs/Rx', amd: 'rxjs/Rx'},
        'rxjs/add/operator/let': {
            root: ['Rx', 'Observable', 'prototype'],
            commonjs: 'rxjs/add/operator/let',
            commonjs2: 'rxjs/add/operator/let',
            amd: 'rxjs/add/operator/let'
        }
    }
};

if (!isDevServer) {
    module.exports.plugins = [new webpack.optimize.UglifyJsPlugin()];
}