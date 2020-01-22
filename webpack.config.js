const path = require("path");
const entryPath = "07_skladnia-jsx.wyrazenia.task03";
const entryFile = "app.js";

module.exports = {
  entry:  `./${entryPath}/js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
            {
              "plugins": [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          ]
        }
      }
    ]
  }
};