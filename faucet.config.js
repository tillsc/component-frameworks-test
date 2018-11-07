module.exports = {
  js: [{
    source: "./src/vanilla.js",
    target: "./dist/vanilla.js"
  },
  {
    source: "./src/polymer3.js",
    target: "./dist/polymer3.js"
  },
  {
    source: "./src/lit-element.js",
    target: "./dist/lit-element.js"
  },
  {
    source: "./src/react_shim.js",
    target: "./dist/react_shim.js",
  },
  {
    source: "./src/react.jsx",
    target: "./dist/react.js",
    jsx: true,
    externals: { react: "React" }
  },
  ]
};
