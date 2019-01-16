const path = require( 'path' );
const CompressionPlugin = require( 'compression-webpack-plugin' );
const UnminifiedWebpackPlugin = require( 'unminified-webpack-plugin' );
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve( __dirname, 'lib' ),
        library: 'ES6Boilerplate',
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new CompressionPlugin(), 
        new UnminifiedWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            filename: path.resolve( __dirname, 'sandbox/index.html' ),
        })
    ],
    externals: {
        jquery: 'jQuery',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
};
