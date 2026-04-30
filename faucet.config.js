module.exports = {
  js: [{
    source: "./src/vanilla.js",
    target: "./dist/vanilla.js"
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
    source: "./src/preact-custom-element-cdn.jsx",
    target: "./dist/preact-custom-element-cdn.js",
    jsx: { pragma: "h" },
    externals: { preact: "preact" }
  },
  {
    source: "./src/util/size-elem.js",
    target: "./dist/util/size-elem.js"
  }]
};
