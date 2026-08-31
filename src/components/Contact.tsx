"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website") || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Unable to send message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-amber-500/10 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm font-semibold text-amber-400">
            $ ./contact
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-stone-400">
            Have an opportunity, project, or just want to say hello?
            Send me a message.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col border border-amber-500/10 bg-[#0e0d0a]/90 p-7 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 md:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-amber-400">
                // Available for
              </p>

              <div className="mt-6 space-y-4">
                <div className="border border-amber-500/10 bg-[#0b0a08] p-4 transition-all duration-200 hover:border-amber-400/40 hover:bg-amber-400/[0.02]">
                  <p className="font-mono text-sm font-semibold text-stone-200">
                    Software Engineering
                  </p>
                  <p className="mt-1 font-mono text-xs text-stone-500">
                    Full-stack · Backend · AI
                  </p>
                </div>

                <div className="border border-amber-500/10 bg-[#0b0a08] p-4 transition-all duration-200 hover:border-amber-400/40 hover:bg-amber-400/[0.02]">
                  <p className="font-mono text-sm font-semibold text-stone-200">
                    Collaboration
                  </p>
                  <p className="mt-1 font-mono text-xs text-stone-500">
                    Projects · Open source · Startups
                  </p>
                </div>

                <div className="border border-amber-500/10 bg-[#0b0a08] p-4 transition-all duration-200 hover:border-amber-400/40 hover:bg-amber-400/[0.02]">
                  <p className="font-mono text-sm font-semibold text-stone-200">
                    Research
                  </p>
                  <p className="mt-1 font-mono text-xs text-stone-500">
                    AI · Bioinformatics · LLMs
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-auto pt-10">
              <p className="mb-4 font-mono text-xs text-stone-500">
                $ find ./socials
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/AjinyaNaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center border border-amber-500/15 bg-[#0b0a08] text-stone-400 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:text-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                >
                  <FaGithub className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ajinkyanaik02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center border border-amber-500/15 bg-[#0b0a08] text-stone-400 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:text-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-amber-500/10 bg-[#0e0d0a]/90 p-7 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 md:p-8"
          >
            <div className="mb-8">
              <p className="font-mono text-xs text-stone-500">
                $ ./send-message
              </p>

              <p className="mt-2 font-mono text-sm text-stone-400">
                Looking forward to connect!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs text-stone-500"
                >
                  name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="John Doe"
                  className="w-full border border-amber-500/15 bg-[#0b0a08] px-4 py-3 font-mono text-sm text-stone-200 outline-none transition placeholder:text-stone-700 focus:border-amber-400/60 focus:shadow-[0_0_12px_rgba(245,158,11,0.1)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs text-stone-500"
                >
                  email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  placeholder="john@example.com"
                  className="w-full border border-amber-500/15 bg-[#0b0a08] px-4 py-3 font-mono text-sm text-stone-200 outline-none transition placeholder:text-stone-700 focus:border-amber-400/60 focus:shadow-[0_0_12px_rgba(245,158,11,0.1)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-stone-500"
                >
                  message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={7}
                  placeholder="Tell me what you're working on..."
                  className="w-full resize-none border border-amber-500/15 bg-[#0b0a08] px-4 py-3 font-mono text-sm text-stone-200 outline-none transition placeholder:text-stone-700 focus:border-amber-400/60 focus:shadow-[0_0_12px_rgba(245,158,11,0.1)]"
                />
              </div>

              {/* Status alerts */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 font-mono text-xs text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                >
                  ✓ Message sent successfully.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-xs text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                >
                  ✕ {error}
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-3 border border-amber-400/40 bg-amber-400/[0.04] px-5 py-3.5 font-mono text-sm font-bold text-amber-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane className={`h-4 w-4 transition-transform duration-200 ${status === "sending" ? "animate-bounce" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} />

                {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 border border-amber-500/10 bg-[#0b0a08]/80 px-5 py-4 font-mono text-xs text-stone-500 backdrop-blur-sm"
        >
          <span className="text-amber-400">$</span>{" "}
          echo &quot;looking forward to hearing from you&quot;
          <span className="ml-2 inline-block h-3.5 w-1.5 animate-pulse bg-amber-400 align-middle shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}