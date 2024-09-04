import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from "@rspack/cli";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commonConfig = {
	entry: {
		index: "./src/index.ts",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
};

const esmConfig = defineConfig({
	...commonConfig,
	output: {
		path: "./dist",
		filename: "index.esm.js",
		libraryTarget: "module",
	},
	experiments: {
		outputModule: true,
	},
});

const cjsConfig = defineConfig({
	...commonConfig,
	output: {
		path: "./dist",
		filename: "index.cjs.js",
		libraryTarget: "commonjs2",
	},
});

export default [esmConfig, cjsConfig];
