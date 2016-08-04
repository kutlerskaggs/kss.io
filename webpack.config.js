var path = require("path");
var theme = require("./src/styles/theme");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        host: "192.168.0.4",
        contentBase: "./dist"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    plugins: [["css-in-js", {
                        "vendorPrefixes": true,
                        "bundleFile": "dist/components.css",
                        "minify": true,
                        "context": theme
                    }]],
                    presets: ["es2015", "react"]
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css", "sass")
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            }, {
                // font awesome
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                // font awesome
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            }, {
                // body background image
                test: /\.jpg$/,
                loader: "url?limit=10000&mimetype=image/jpg"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};
