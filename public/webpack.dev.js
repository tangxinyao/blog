const path = require("path");

module.exports = {
    entry: {
        main: "./src/homepage/index.tsx",
        dashboard: "./src/dashboard/index.tsx"
    },
    output: {
        path: __dirname,
        filename: "dist/[name].bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 32768 } }] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    devServer: {
        contentBase: __dirname,
        compress: true
    }
};