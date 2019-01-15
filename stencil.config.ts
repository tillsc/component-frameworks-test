import { Config } from '@stencil/core';

export const config: Config = {
  srcDir: 'src',
  hashFileNames: false,
  namespace: 'stencil-empty',
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist/stencil',
      empty: false
    }
  ]
};
