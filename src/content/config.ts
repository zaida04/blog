import { z, defineCollection } from "astro:content";

const schema = z.object({
	title: z.string(),
	publishedAt: z.number(),
	description: z.string(),
	tags: z.array(z.string()),
});

const postsCollection = defineCollection({
	type: "content",
	schema,
});

export type BlogPost = z.infer<typeof schema>;

export const collections = {
	posts: postsCollection,
};
