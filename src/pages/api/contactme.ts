import type { APIRoute } from "astro"
import { z } from "astro/zod"
import { rateLimit } from "../../utils/ratelimit";

const contactFormSchema = z.object({
    name: z.string().min(3, "Your name is too short").max(100, "Your name is too long"),
    email: z.string().email().min(3, "Your email is too short").max(100, "Your email is too long"),
    message: z.string().min(3, "Your message is too short").max(1000, "Your message is too long")
})

export const POST: APIRoute = async ({ request, clientAddress }) => {
    const body = await request.json();

    const contactData = contactFormSchema.safeParse(body);
    if (!contactData.success) {
        return new Response(JSON.stringify(contactData.error), { status: 400 })
    }

    if (process.env.NODE_ENV === "production") {
        const identifier = clientAddress ?? body.email;
        const { success, remaining } = await rateLimit(identifier);
        console.log("Remaining left for this ratelimit: ", remaining);

        if (!success) {
            return new Response("You are sending too many requests. Please try again later.", { status: 429 })
        }
    }

    await fetch(import.meta.env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": `**New Contact Form Submission**\n\nName: \`${contactData.data.name}\`\nEmail: \`${contactData.data.email}\`\nMessage: \`\`\`${contactData.data.message}\`\`\``
        })
    })

    return new Response()
}