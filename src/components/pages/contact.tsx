"use client";

import { FormEvent, useState } from "react";
import { SOCIAL_LINKS } from "@/content";
import { ICONS } from "@/content/icon-map";
import { IoMailSharp } from "react-icons/io5";
import Reveal from "../libs/reveal";
import { fadeInFromRight } from "@/configs/motion";

const SOCIAL_KEYS = ["facebook", "github", "linkedin", "twitter", "instagram"];

type Status = "idle" | "submitting" | "succeeded" | "error";

export default function Contact(): React.ReactElement {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Failed to send message.");
      }

      setStatus("succeeded");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8">
        <Reveal>
          <div className="pr-4">
            <p className="font-mono text-accent-500 text-xs tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-50 mb-4">
              Let&lsquo;s connect
            </h2>
            <p className="text-primary-300 text-sm lg:text-base leading-6 lg:leading-7">
              We&lsquo;re just a conversation away over a cup of coffee - my
              treat! Whether you have a proposal, a question, or just want to
              chat, feel free to drop me a line or email me directly.
            </p>
            <p className="flex items-center gap-2 my-5">
              <IoMailSharp className="text-xl text-accent-500" />
              <a
                href="mailto:aliraza.r10@gmail.com"
                className="font-mono text-sm text-primary-100 hover:text-accent-500 transition-colors duration-300"
              >
                aliraza.r10@gmail.com
              </a>
            </p>

            <div className="mt-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-primary-300 mb-4">
                Stay connected
              </h3>
              <ul className="flex items-center gap-4 text-xl text-primary-200">
                {SOCIAL_KEYS.map((key) => {
                  const social = SOCIAL_LINKS[key];
                  const Icon = ICONS[social.icon];
                  return (
                    <li key={key}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ali Reza's ${social.label} account`}
                        className="hover:text-accent-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal variants={fadeInFromRight} delay={150}>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="bg-secondary-500 border border-secondary-700 rounded-xl p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs tracking-widest uppercase text-primary-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Wick"
                  autoComplete="given-name"
                  suppressHydrationWarning
                  className="mt-2 p-2 block w-full rounded-md h-12 bg-primary-500 border border-secondary-600 text-primary-50 placeholder:text-primary-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs tracking-widest uppercase text-primary-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="given-email"
                  placeholder="you@example.com"
                  suppressHydrationWarning
                  className="mt-2 p-2 block w-full rounded-md h-12 bg-primary-500 border border-secondary-600 text-primary-50 placeholder:text-primary-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 sm:text-sm"
                />
              </div>
              <div className="lg:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-mono text-xs tracking-widest uppercase text-primary-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 p-2 block w-full rounded-md bg-primary-500 border border-secondary-600 text-primary-50 placeholder:text-primary-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 sm:text-sm"
                  placeholder="Hey, Ali..."
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col items-end">
              <button
                disabled={status === "submitting"}
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent bg-accent-500 py-3 px-5 font-mono text-xs tracking-widest uppercase text-primary-900 font-semibold hover:bg-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:ring-offset-1 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
              {status === "succeeded" && (
                <p className="text-primary-300 text-xs leading-6 py-3">
                  Thank you for reaching out! Your message has been
                  successfully sent and I&lsquo;ll get back to you as soon as
                  possible. In the meantime, why don&lsquo;t we plan to meet
                  over a cup of coffee? My treat!
                </p>
              )}
              {status === "error" && (
                <p className="text-accent-400 text-xs leading-6 py-3">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
