import type { Config } from "tailwindcss";

export default ({
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				wotfard: ["Wotfard", "sans-serif"],
				cascadia: ["CascadiaCode", "sans-serif"],
			},
			colors: {
				"dark-base": "#0f1117",
			},
		},
	},
	plugins: [
		// @ts-ignore
		require("tailwindcss-animate")
	],
} satisfies Config);
