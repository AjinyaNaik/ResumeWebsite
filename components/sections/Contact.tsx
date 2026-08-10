"use client";

import { useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const [error, setError] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setStatus("loading");
        setError("");

        const formData = new FormData(event.currentTarget);

        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus("success");
            formRef.current?.reset();
        } else {
            setStatus("error");
            setError(result.error);
        }
    }

    return (
        <section id="contact" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Contact
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Let's work together
                        </h2>

                        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                            Have a project, opportunity, or just want to
                            say hello? Send me a message and I'll get back
                            to you.
                        </p>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full rounded-lg border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full rounded-lg border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm font-medium"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                className="w-full rounded-lg border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                placeholder="Your message..."
                            />
                        </div>

                        {status === "success" && (
                            <p className="text-sm text-green-600">
                                Thanks! Your message has been sent.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {status === "loading"
                                ? "Sending..."
                                : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}