const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");
const resolve = require("path");
const yaml = require('yamljs');
const json5 = require('json5');

/** @type {import('webpack').Configuration}*/

const path = require('path');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/,
            },
            {
                type: 'asset/resource',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
              },
              {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                  parse: yaml.parse,
                },
              },
              {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                  parse: json5.parse,
                },
              },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json "]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ],
};