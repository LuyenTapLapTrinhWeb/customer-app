const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production", // "production" | "development" | "none"
  resolve: {
    extensions: ["*", ".mjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
};
module.exports = config;
