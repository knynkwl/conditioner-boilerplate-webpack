var path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: [
        './src/app.js',
        "webpack-dev-server/client?http://localhost:3000/",
        "webpack/hot/only-dev-server"
    ],
    
    mode: "development",
    devtool: 'inline-source-map',
    watch: true,
    
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: true,
        port: 3000,
        disableHostCheck: true,
        contentBase: [
            path.join(__dirname, "./src"),
            path.join(__dirname, "./dist")
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://localhost:3000/",
        filename: "app.js"
    }
};
