#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const packages = {
  'preact': 'src/preact-version.js',
  'lit-element': 'src/lit-element-version.js',
};

for (const [pkg, outFile] of Object.entries(packages)) {
  const pkgJson = JSON.parse(readFileSync(resolve(`node_modules/${pkg}/package.json`), 'utf8'));
  writeFileSync(outFile, `export const version = ${JSON.stringify(pkgJson.version)};\n`);
  console.log(`${pkg} ${pkgJson.version} → ${outFile}`);
}
