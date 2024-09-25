const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        backgroundScript: path.join(__dirname, "src/backgroundScript.ts"),
        contentScript: path.join(__dirname, "src/contentScript.tsx"),
        customApp: path.join(__dirname, "src/custom-app/index.tsx"),
        popup: path.join(__dirname, "src/popup/index.tsx"),
        sidebar: path.join(__dirname, "src/sidebar/index.tsx")
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
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views', 'popup.html'),
            inject: 'body',
            chunks: ['popup'],
            hash: true,
            filename: 'popup.html'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views', 'sidebar.html'),
            inject: 'body',
            chunks: ['sidebar'],
            hash: true,
            filename: 'sidebar.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        },
    },
};
