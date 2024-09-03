import { sveltePreprocess } from "svelte-preprocess";
import { defineConfig } from "@rspack/cli";

export default defineConfig({
	entry: {
		docutopia: "./src/index.ts",
	},
	output: {
		path: "./dist",
		filename: "[name].js",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: [
					{
						loader: "svelte-loader",
						options: {
							preprocess: sveltePreprocess(),
						},
					},
				],
			},
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".svelte"],
		alias: {
			"@": "./src",
		},
		mainFields: ["svelte", "browser", "module", "main"],
	},
});
