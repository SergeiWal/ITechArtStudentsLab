const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

module.exports = function (env, argv) {
  let distPath;
  const srcPath = path.resolve(__dirname, "./src/");
  const mode = argv.mode === "production" ? "production" : "development";

  if (mode === "production") {
    distPath = path.resolve(__dirname, "./dist/prod/");
  } else {
    distPath = path.resolve(__dirname, "./dist/dev/");
  }

  return {
    mode: mode,
    entry: path.resolve(srcPath, "index.js"),
    output: {
      path: distPath,
      filename: "[name].[contenthash].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            sources: true,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(srcPath, "index.html") }),
      new CleanWebpackPlugin(),
    ],
  };
};
