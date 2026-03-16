import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			noExternal: ["@docutopia/react"],
		},
	},
	integrations: [react()],
});
