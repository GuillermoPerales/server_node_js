const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'index.html')
    })]
};