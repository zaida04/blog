import type { ProjectProps } from "../../components/project/ProjectCard";

export const projects_data = {
	sites: [
		{
			title: "UB Trace Tool",
			statistics: {
				students: "2,000+",
				submissions: "50,000+",
			},
			description: "A tool for helping students understand what their code is doing in memory. Built for the UB CS department for use in labs and lectures.",
			tags: ["TypeScript", "Next.JS", "React", "Tailwind", "Mantine"],
			links: {
				website: "https://tracing.cse.buffalo.edu"
			}
		},
		{
			title: "nico.engineer",
			statistics: "This site!",
			description:
				"My personal website. Allows you to learn more my projects and see what I'm all about. I apply whatever I learn about frontend to this site.",
			tags: ["TypeScript", "Astro", "React", "Tailwind"],
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
			title: "Y.com",
			statistics: "Class Project",
			description: "Built for CSE 312, this X.com alternative gives you a place to post your ramblings to no one. Also provides a global drawing board.",
			tags: ["TypeScript", "Next.JS", "React", "TRPC.io", "Tailwind"],
			links: {
				github: "https://github.com/zaida04/ycom",
				website: "https://y.nico.engineer",
			},
		},
		{
			title: "Evalx",
			statistics: "In Progress",
			description: "Run arbitrary code from any supported language with just a POST request. Focus on building features your users need, leave the code running to us.",
			tags: ["TypeScript", "Node.JS", "Next.JS", "React"],
			links: {
				github: "https://github.com/zaida04/evalx.sh",
				website: "https://evalx.nico.engineer",
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


export const project_sections: Record<
	string,
	{ slug: keyof typeof projects_data; description: string }
> = {
	"Websites & Fullstack": {
		slug: "sites",
		description:
			"These are full-stack or frontend-only projects that I've created.",
	},
	"Backend & Bots": {
		slug: "backends",
		description:
			"These are backend-only projects that I've created. Some are chat-bots, APIs, proxies, or other.",
	},
	Libraries: {
		slug: "libraries",
		description:
			"These are open-source libraries that I've created. These are used by myself and others to make it easier to build their projects.",
	},
};
