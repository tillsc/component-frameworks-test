import path from 'path';
import { fileURLToPath } from 'url';
import alias from '@rollup/plugin-alias';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: '../../dist/svelte.js'
	},
	plugins: [
		alias({
			entries: [
				{ find: 'svelte/src/version.js', replacement: path.resolve(__dirname, 'node_modules/svelte/src/version.js') }
			]
		}),
		svelte({
			compilerOptions: {
				customElement: true
			}
		}),
		resolve({ browser: true }),
		commonjs(),
		terser()
	]
};
