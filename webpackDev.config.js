var path = require('path');

var dist = path.resolve(__dirname, 'dist/scripts');
var src = path.resolve(__dirname, 'src');

module.exports = {
    entry: src + '/main.jsx',
    output: {
        path: dist,
        publicPath: '/scripts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: src,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            include: src,
            exclude: /node_modules/,
            loader: "style!css!less"
        }]
    }
}