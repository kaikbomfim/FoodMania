const path = require("path");

module.exports = {
  entry: {
    index: "./src/scripts/index.ts", // Entrada principal
    icons: "./src/scripts/icons.ts", // Entrada para os ícones
    feedbacks: "./src/scripts/feedbacks.ts", // Entrada para os feedbacks
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js", // Gera arquivos javascript baseados no nome das entradas
    path: path.resolve(__dirname, "dist"),
  },
};
