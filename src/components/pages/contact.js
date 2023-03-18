"use client";

import ResumeIcon from "@/assets/icons/resume-icon";
import { SOCIAL_LINKS } from "@/content/constants";
import { AiFillInstagram } from "react-icons/ai";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
import { MdMail } from "react-icons/md";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqzwabz");

  return (
    <div className="flex flex-col justify-center w-full h-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5">
        <ScrollRevealWrapper>
          <div className="pr-4 ">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary-50 py-2 lg:p-0 lg:leading-[2.8]">
              Let&lsquo;s connect
            </h2>
            <p className="text-primary-100 text-justify text-sm lg:text-base leading-6 lg:leading-7">
              We&lsquo;re just a conversation away over a cup of coffee - my
              treat! Whether you have a proposal, a question, or just want to
              chat, feel free to drop me a line or email me directly.
            </p>
            <p className="flex items-center gap-2 my-5">
              <MdMail className="text-xl text-primary-50" />
              <a
                href="mailto:aliraza.r10@gmail.com"
                className="text-sm text-primary-50 font-bold hover:text-accent-500 transition-all duration-100"
              >
                aliraza.r10@gmail.com
              </a>
            </p>
          </div>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper options={{ delay: 600 }}>
          <div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="mt-1.5 p-2 block w-full rounded-md h-12 bg-secondary-100 border-secondary-300 shadow-primary focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="given-email"
                    placeholder="you@example.com"
                    className="mt-1.5 p-2 block w-full rounded-md h-12 bg-secondary-100 border-secondary-300 shadow-primary focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="lg:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-50"
                  >
                    Message
                  </label>
                  <div className="mt-1.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 p-2 block w-full rounded-md bg-secondary-100 border-secondary-300 shadow-primary focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                      placeholder=""
                      defaultValue={""}
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-col justify-end items-end">
                <button
                  disabled={state.submitting}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-accent-500 py-2 px-4 text-sm font-medium text-primary-50 shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:ring-offset-1"
                >
                  Send
                </button>
                {state.succeeded && (
                  <p className="text-primary-50 text-justify text-xs leading-6 py-3">
                    Thank you for reaching out! Your message has been
                    successfully sent and I&lsquo;ll get back to you as soon as
                    possible. In the meantime, why don&lsquo;t we plan to meet
                    over a cup of coffee? My treat!
                  </p>
                )}
              </div>
            </form>
          </div>
        </ScrollRevealWrapper>
      </div>
      <div className="mt-10">
        <ScrollRevealWrapper>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-50 py-5">
            {/* Let&lsquo;s stay connected  */}
            Stay connected
          </h3>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper options={{ delay: 600 }}>
          <div>
            <ul className="flex items-center gap-3 text-2xl text-primary-100">
              <li className="text-primary-100 hover:text-accent-400 transition-all duration-100">
                <a
                  href={SOCIAL_LINKS.facebook.link}
                  aria-label={"My Facebook Account Link"}
                >
                  <IoLogoFacebook className="text-2xl lg:text-3xl" />
                </a>
              </li>
              <li className="text-primary-100 hover:text-accent-400 transition-all duration-100">
                <a
                  href={SOCIAL_LINKS.github.link}
                  aria-label={"My GitHub Account Link"}
                >
                  <IoLogoGithub className="text-2xl lg:text-3xl" />
                </a>
              </li>
              <li className="text-primary-100 hover:text-accent-400 transition-all duration-100">
                <a
                  href={SOCIAL_LINKS.linkedin.link}
                  aria-label={"My LinkedIn Account Link"}
                >
                  <IoLogoLinkedin className="text-2xl lg:text-3xl" />
                </a>
              </li>
              <li className="text-primary-100 hover:text-accent-400 transition-all duration-100">
                <a
                  href={SOCIAL_LINKS.twitter.link}
                  aria-label={"My Twitter Account Link"}
                >
                  <IoLogoTwitter className="text-3xl lg:text-4xl" />
                </a>
              </li>
              <li className="text-primary-100 hover:text-accent-400 transition-all duration-100">
                <a
                  href={SOCIAL_LINKS.instagram.link}
                  aria-label={"My Instagram Account Link"}
                >
                  <AiFillInstagram className="text-3xl lg:text-4xl" />
                </a>
              </li>
            </ul>
          </div>
        </ScrollRevealWrapper>
      </div>
    </div>
  );
}
