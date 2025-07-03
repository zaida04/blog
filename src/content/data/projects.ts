import type { ProjectProps } from "../../components/project/ProjectCard";

export const projects_data = {
	sites: [
		{
			title: "Yoki",
			statistics: {
				servers: "5,000+",
				members: "300,000+",
			},
			description:
				"The first moderation bot on guilded.gg. Comes with auto-moderation, user verification, logging, and more.",
			tags: ["JavaScript", "TypeScript", "Next.JS", "React"],
			links: {
				github: "https://github.com/yoki-labs/yoki-monorepo",
				website: "https://yoki.gg",
			},
		},
		{
			title: "UB Trace Tool",
			statistics: {
				students: "2,000+",
				submissions: "50,000+",
			},
			description: "A tool for helping students understand what their code is doing in memory. Built for the UB CS department for use in labs and lectures.",
			tags: ["JavaScript", "TypeScript", "Next.JS", "React", "Tailwind", "Mantine"],
			links: {
				website: "https://tracing.cse.buffalo.edu"
			}
		},
		{
			title: "Evalx",
			statistics: "In Progress",
			description: "Run arbitrary code from any supported language with just a POST request. Focus on building features your users need, leave the code running to us.",
			tags: ["JavaScript", "TypeScript", "Node.JS", "Next.JS", "React"],
			links: {
				github: "https://github.com/zaida04/evalx.sh",
				website: "https://evalx.nico.engineer",
			},
		},
		{
			title: "UB Hacking 2024",
			statistics: {
				hackers: "600+"
			},
			description: "The landing page and registration platform for UB Hacking's 2024 Fall Hackathon – a hacker's winter wonderland.",
			tags: ["JavaScript", "TypeScript", "Svelte", "SvelteKit", "Tailwind"],
			links: {
				website: "https://ubhacking.com",
				github: "https://github.com/zaida04/ubhacking-fa24"
			}
		},
		{
			title: "Loggregator",
			statistics: "In Progress",
			description: "Store, view, & search your logs online from your serverless functions. That's it. Nothing complicated, only what you need.",
			tags: ["JavaScript", "TypeScript", "SvelteKit", "Svelte"],
			links: {
				github: "https://github.com/zaida04/loggregator",
				website: "https://loggregator.nico.engineer",
			},
		},
		{
			title: "nico.engineer",
			statistics: "This site!",
			description:
				"My personal website. Allows you to learn more my projects and see what I'm all about. I apply whatever I learn about frontend to this site.",
			tags: ["JavaScript", "TypeScript", "Astro", "React", "Tailwind"],
			links: {
				github: "https://github.com/zaida04/blog",
				website: "https://nico.engineer",
			},
		},
		{
			title: "Y.com",
			statistics: "Class Project",
			description: "Built for CSE 312, this X.com alternative gives you a place to post your ramblings to no one. Also provides a global drawing board.",
			tags: ["JavaScript", "TypeScript", "Next.JS", "React", "TRPC.io", "Tailwind"],
			links: {
				github: "https://github.com/zaida04/ycom",
				website: "https://y.nico.engineer",
			},
		}
	],
	backends: [
		{
			title: "Guilded Shields",
			statistics: {
				servers: "50+",
			},
			description: "A service for generating SVG shields for your guilded.gg server. Built for GitHub READMEs.",
			tags: ["JavaScript", "TypeScript", "Bun", "HTTP"],
			links: {
				github: "https://github.com/yoki-labs/guilded-shields",
				website: "https://shields.yoki-labs.xyz/",
			},
		},
		{
			title: "Events Proxy",
			description:
				"A service for proxying guilded WS events to HTTP servers. Allows you to build your bots in a serverless environment, while we handle the scaling.",
			tags: ["JavaScript", "TypeScript", "Node.JS", "WebSocket", "HTTP"],
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
			tags: ["JavaScript", "TypeScript", "Node.JS", "WebSocket", "HTTP"],
			links: {
				github: "https://github.com/zaida04/guilded.js",
				website: "https://guilded.js.org",
			},
		},
		{
			title: "Quizziz.js",
			description:
				"A simple wrapper for the Quizziz API. Relies on the unofficial client API, allowing you to fetch information about quizzes.",
			tags: ["JavaScript", "TypeScript", "Node.JS"],
			links: {
				github: "https://github.com/zaida04/quizizz.js",
			},
		},
		{
			title: "Tomlenv",
			description:
				"Read and inject environment variables from a .toml file in Node.JS. Supports overrides, multiple environments, and more. Inspired by dotenv.",
			tags: ["JavaScript", "TypeScript", "Node.JS"],
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
