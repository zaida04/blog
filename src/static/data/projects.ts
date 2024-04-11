import type { ProjectProps } from "../../components/project/ProjectCard";

export const projects_data = {
	sites: [
		{
			title: "nico.engineer",
			statistics: "This site!",
			description:
				"My personal website. Allows you to learn more my projects and see what I'm all about. I apply whatever I learn about frontend to this site.",
			tags: ["TypeScript", "Astro", "React"],
			links: {
				github: "https://github.com/zaida04/blog",
				website: "https://nico.engineer",
			},
		},
		{
			title: "Yoki",
			statistics: {
				servers: "1,800+",
				members: "100,000+",
			},
			description:
				"The first moderation bot on guilded.gg. Comes with auto-moderation, user verification, logging, and more.",
			tags: ["TypeScript", "Next.JS", "React"],
			links: {
				github: "https://github.com/yoki-labs",
				website: "https://yoki.gg",
			},
		},
		{
			title: "Loggregator",
			statistics: "In Progress",
			description: "Store, view, & search your logs online from your serverless functions. That's it. Nothing complicated, only what you need.",
			tags: ["TypeScript", "SvelteKit", "Svelte"],
			links: {
				github: "https://github.com/zaida04/loggregator",
				website: "https://loggregator.co",
			},
		},
		{
			title: "Evalx",
			statistics: "In Progress",
			description: "Run arbitrary code from any supported language with just a POST request. Focus on building features your users need, leave the code running to us.",
			tags: ["TypeScript", "Node.JS", "Next.JS", "React"],
			links: {
				github: "https://github.com/zaida04/evalx.sh",
				website: "https://evalx.sh",
			},
		},
	],
	backends: [
		{
			title: "Guilded Shields",
			statistics: {
				servers: "50+",
			},
			description: "A service for generating SVG shields for your guilded.gg server. Built for GitHub READMEs.",
			tags: ["TypeScript", "Bun", "HTTP"],
			links: {
				github: "https://github.com/yoki-labs/guilded-shields",
				website: "https://shields.yoki-labs.xyz/",
			},
		},
		{
			title: "Events Proxy",
			description:
				"A service for proxying guilded WS events to HTTP servers. Allows you to build your bots in a serverless environment, while we handle the scaling.",
			tags: ["TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/events-proxy",
			},
		}
	],
	libraries: [
		{
			title: "Guilded.JS",
			statistics: {
				downloads: "13,000+",
				stars: "67",
			},
			description:
				"A library for creating bots with the guilded.gg bot API. Usable in either JavaScript or TypeScript projects.",
			tags: ["TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/guilded.js",
				website: "https://guilded.js.org",
			},
		},
		{
			title: "Quizziz.js",
			statistics: {
				stars: "9",
			},
			description:
				"A simple wrapper for the Quizziz API. Relies on the unofficial client API, allowing you to fetch information about quizzes.",
			tags: ["Node.JS"],
			links: {
				github: "https://github.com/zaida04/quizizz.js",
			},
		},
		{
			title: "Tomlenv",
			description:
				"Read and inject environment variables from a .toml file in Node.JS. Supports overrides, multiple environments, and more. Inspired by dotenv.",
			tags: ["Node.JS"],
			links: {
				github: "https://github.com/zaida04/tomlenv",
			},
		}
	],
} as {
	sites: ProjectProps[];
	backends: ProjectProps[];
	libraries: ProjectProps[];
};
