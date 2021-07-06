const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "glowCookies.min.js",
    library: "glowCookies",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  mode: "development",
}