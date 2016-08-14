const path = require('path');
const webpack = require('webpack');

const __dir = path.resolve('.');
const src = path.join(__dir, 'src');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dir, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: src,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!',
            },
            {
                test: /\.(jpg|png|mp3|wav|ogg)$/,
                loader: 'file-loader',
                include: src,
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
        root: src,
    },
};
