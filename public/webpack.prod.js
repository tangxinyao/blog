const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "dist/[name].bundle.css"
});

module.exports = {
    entry: {
        main: "./src/homepage/index.tsx",
        dashboard: "./src/dashboard/index.tsx",
    },
    output: {
        path: __dirname,
        filename: "dist/[name].bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            {
                test: /\.less$/, use: extractLess.extract({
                    use: [{ loader: "css-loader" }, { loader: "less-loader" }],
                    fallback: "style-loader"
                })
            },

            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 32768 } }] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [extractLess]
};