var path = require("path"),
    _ = require("lodash"),
    config = require("./webpack.config.js");

// config overrides for test environment
var environment = {
    entry: "mocha!./tests/index.js",
    devServer: {
        contentBase: "./tests",
        port: 8888
    },
    output: {
        path: path.resolve(__dirname, "tests"),
        filename: "test.build.js"
    }
};

module.exports = _.defaults(environment, config);
