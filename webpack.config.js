module.exports = {
    entry: './public/src/index.js',
    output: {
        path: './public/',
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public/',
        port:9000
    }
};