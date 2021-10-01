module.exports = {
  entry: "./code/main.js",
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
};
