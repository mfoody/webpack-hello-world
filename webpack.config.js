"use-strict";

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
