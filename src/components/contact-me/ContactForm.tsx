import { useState } from "react";
import { useForm } from "react-hook-form"

export default function ContactForm() {
    const form = useForm<{
        name: string,
        email: string,
        message: string
    }>({
        "defaultValues": {
            "name": "",
            "email": "",
            "message": ""
        }
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    return <form
        className="md:w-2/5 flex flex-col gap-2 p-8 h-fit rounded-xl border-4 border-slate-800/75"
        onSubmit={form.handleSubmit(async (data) => {
            try {
                const response = await fetch("/api/contactme", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    if (response.status === 429) {
                        throw new Error("You are sending too many requests. Please try again later.");
                    }

                    throw new Error("Failed to submit form. Please try again later, or email me.");
                }

                form.reset();
                setSuccess(true);
                setError(null);

                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            } catch (e) {
                setError((e as Error).message);
                setSuccess(false);

                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
        })}>
        <h3 className="text-3xl">Contact Me</h3>

        {error && <div className="px-4 py-2 bg-red-400 rounded-lg">
            <p className="text-white text-base">{error}</p>
        </div>}

        {success && <div className="px-4 py-2 bg-green-600 rounded-lg">
            <p className="text-white text-base">Your message was submitted successfully! I'll get back to you in a few days.</p>
        </div>}

        <InputWithLabel
            label="Your Name"
            type="text"
            error={form.formState.errors.name?.message}
            formRegister={form.register("name", {
                "required": "Your name is required",
                "max": { "value": 100, "message": "Your name is too long. Please use a nickname." }
            })} />
        <InputWithLabel
            label="Your Email"
            type="email"
            error={form.formState.errors.email?.message}
            formRegister={form.register("email", {
                "required": "Your email is required",
                "pattern": {
                    "value": /\S+@\S+\.\S+/,
                    "message": "Invalid email address, please format like name@domain.xyz"
                }
            })} />

        <div className="flex flex-col">
            <label className="text-base pb-1" htmlFor="your-message">Your Message</label>
            <textarea
                id="your-message"
                placeholder="Message"
                className="rounded-sm text-base px-2"
                rows={4}
                {...form.register("message", {
                    "required": "Your message is required",
                    "minLength": { "value": 3, "message": "Your message is too short." },
                    "max": { "value": 1000, "message": "Your message is too long." }
                })}></textarea>
            <p className="text-red-300 text-base">{form.formState.errors.message?.message}</p>
        </div>

        <button type="submit" className="rounded-xl bg-slate-800 text-white p-2 mt-4">Send</button>
    </form>
}

function InputWithLabel(props: { label: string, type: string; formRegister: any; error?: string }) {
    return <div className="flex flex-col">
        <label className="text-base pb-1" htmlFor={props.label}>{props.label}</label>
        <input id={props.label} type={props.type} className="px-2 rounded-sm text-base py-1" {...props.formRegister} />
        <p className="text-red-300 text-base">{props.error}</p>
    </div>
}