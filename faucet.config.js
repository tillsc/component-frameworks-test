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
    source: "./src/preact-vanilla.jsx",
    target: "./dist/preact-vanilla.js",
    jsx: { pragma: "h" }
  },
  {
    source: "./src/preact-custom-element.jsx",
    target: "./dist/preact-custom-element.js",
    jsx: { pragma: "h" }
  },
  {
    source: "./src/util/size-elem.js",
    target: "./dist/util/size-elem.js"
  }]
};
