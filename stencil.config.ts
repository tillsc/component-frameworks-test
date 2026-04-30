import { Config } from '@stencil/core';

export const config: Config = {
  srcDir: 'src',
  hashFileNames: false,
  namespace: 'stencil-empty',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist/stencil',
      minify: true,
      externalRuntime: false
    }
  ]
};
