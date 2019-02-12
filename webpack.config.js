const path = require('path');

module.exports = {
    entry: {
        app: "./app.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist"
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitError: true
                }
            }
        ]
    }
};