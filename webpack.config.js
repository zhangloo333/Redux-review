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
            loader: 'babel',
            query: {
                presets: ['react', 'es2015','stage-2']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public/',
        port:8080
    }
};
