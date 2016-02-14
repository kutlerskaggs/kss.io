var path = require("path");
    theme = require("./src/styles/theme");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        contentBase: "./dist"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "app.js"
    },
    module: {
        preLoaders: [
            {
                test: /.jsx?$/,
                loaders: ["eslint"],
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    plugins: [["css-in-js", {
                        "vendorPrefixes": true,
                        "bundleFile": "dist/bundle.css",
                        "minify": true,
                        "context": theme
                    }]],
                    presets: ["es2015", "react"]
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                // font awesome
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                // font awesome
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                // body background image
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            }
        ]
    }
};
