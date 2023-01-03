const { runtime } = require("webpack");

module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "^@(.+)": "./src/\\1",
        },
      },
    ],
  ],
};
