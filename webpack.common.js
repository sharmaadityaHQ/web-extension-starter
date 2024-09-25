const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        backgroundScript: path.join(__dirname, "src/backgroundScript.ts"),
        contentScript: path.join(__dirname, "src/contentScript.tsx"),
        customApp: path.join(__dirname, "src/pages/index.tsx"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new Dotenv(),
        new CopyPlugin({
            patterns: [
                'src/manifest.json',
                'src/rules.json'
            ]
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        },
    },
};
