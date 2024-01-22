import type { ProjectProps } from "../../components/project/ProjectCard";

export const projects_data = {
	sites: [
		{
			title: "Yoki (site)",
			statistics: {
				servers: "1,800+",
				members: "100,000+",
			},
			description:
				"Site for Yoki, a multipurpose bot for guilded.gg. Allows you to configure the bot, view the commands, invite it to your server, and more.",
			tags: ["TypeScript", "Next.JS", "React"],
			links: {
				github: "https://github.com/yoki-labs",
				website: "https://yoki.gg",
			},
		},
		{
			title: "nico.engineer",
			statistics: "This site!",
			description:
				"My personal website. Allows you to learn more about me, my projects, and more. I apply whatever I learn about frontend to this site.",
			tags: ["TypeScript", "Astro", "React"],
			links: {
				github: "https://github.com/zaida04/blog",
				website: "https://nico.engineer",
			},
		},
		{
			title: "Loggregator",
			statistics: "In Progress",
			description: "Store, view, & search your logs online. That's it. Nothing complicated, only what you need.",
			tags: ["TypeScript", "SvelteKit", "Svelte"],
			links: {
				github: "https://github.com/zaida04/loggregator",
				website: "https://loggregator.co",
			},
		},
		{
			title: "Evalx.sh",
			statistics: "In Progress",
			description:
				"Code. Post. Done. You give us your code, we take care of running it. You focus on what matters, building great applications.",
			tags: ["TypeScript", "Next.JS", "Node.JS", "Docker", "React"],
			links: {
				github: "https://github.com/zaida04/evalx.sh",
				website: "https://evalx.sh",
			},
		},
		{
			title: "Guilded.JS Docs",
			statistics: {
				downloads: "13,000+",
			},
			description: "Docs site for Guilded.JS. Allows you to learn how to use the library and get started with it.",
			tags: ["TypeScript", "Next.JS", "React"],
			links: {
				github: "https://github.com/zaida04/guilded.js",
				website: "https://guilded.js.org",
			},
		},
	],
	backends: [
		{
			title: "Yoki (bot)",
			statistics: {
				servers: "1,800+",
				members: "100,000+",
			},
			description:
				"Yoki is Guilded's first and biggest moderation bot on the platform. Helping protect your community from bad actors, automagically.",
			tags: ["TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				website: "https://yoki.gg",
			},
		},
		{
			title: "Guilded Shields",
			statistics: {
				servers: "50+",
			},
			description: "A service for generating SVG shields for your guilded.gg server.",
			tags: ["TypeScript", "Bun", "HTTP"],
			links: {
				github: "https://github.com/yoki-labs/guilded-shields",
				website: "https://shields.yoki-labs.xyz/",
			},
		},
		{
			title: "Events Proxy",
			description:
				"A service for proxying guilded WS events to HTTP servers. Allows you to build your bots in a serverless environment.",
			tags: ["TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/events-proxy",
			},
		},
		{
			title: "Voicechat Moderator",
			statistics: "Retired",
			description:
				"A Discord bot that gives you piece of mind knowing you are free from obnoxious intrusions in your Discord voice channel.",
			tags: ["TypeScript", "Node.JS", "Discord.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/voicechat-moderator",
			},
		},
		{
			title: "Webhook Runner",
			description: "A simple webhook runner. Supports running webhooks on your server from a github action.",
			tags: ["TypeScript", "Bun", "HTTP"],
			links: {
				github: "https://github.com/zaida04/webhook-runer",
			},
		},
	],
	libraries: [
		{
			title: "Guilded.JS",
			statistics: {
				downloads: "13,000+",
				stars: "67",
			},
			description:
				"Tools for creating bots with the guilded.gg bot API. Usable in either JavaScript or TypeScript projects.",
			tags: ["TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/guilded.js",
				website: "https://guilded.js.org",
			},
		},
		{
			title: "Loggregator Adapters",
			description:
				"Adapters for the Loggregator API. Allows you to send logs to Loggregator from your application. Comes with adapters for your favorite logging plugins.",
			tags: ["TypeScript", "Node.JS", "HTTP"],
			links: {
				github: "https://github.com/zaida04/loggregator-adapters",
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
		},
		{
			title: "Config Converter",
			description:
				"Convert your config files from JS to JSON or vice-versa. Useful for migrating configs like ESLint and more with a simple command.",
			tags: ["Node.JS"],
			links: {
				github: "https://github.com/zaida04/config-convert",
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
	],
} as {
	sites: ProjectProps[];
	backends: ProjectProps[];
	libraries: ProjectProps[];
};
