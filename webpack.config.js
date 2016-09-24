var path = require('path');
module.exports = {
    entry: "./tml-angular2.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "tml-angular2.js"
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
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular\/core\/bundles\/.+/ ]
}