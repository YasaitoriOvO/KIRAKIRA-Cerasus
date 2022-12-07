// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { resolve } from "path";
import styleResources from "./modules/style-resources";

export default defineNuxtConfig({
	plugins: [
		"@/plugins/ripple.ts",
	],
	alias: {
		styles: resolve(__dirname, "./assets/styles"),
	},
	css: [
		"styles/global.scss",
		"styles/colors.scss",
	],
	vite: {
		css: styleResources({
			scss: {
				use: [
					"sass:color",
					"sass:list",
					"sass:map",
					"sass:math",
					"sass:meta",
					"sass:selector",
					"sass:string",
				],
				"import": [
					"styles/theme.scss",
				],
			},
		}),
	},
});
