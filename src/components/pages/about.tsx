"use client";
import { ABOUT, skills } from "@/content";
import { Skills } from "../libs";
import Reveal from "../libs/reveal";
import { fadeInFromRight } from "@/configs/motion";

export default function About(): React.ReactElement {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <p className="font-mono text-accent-500 text-xs tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-50 mb-6">
            {ABOUT.heading}
          </h2>
          <div className="space-y-4">
            {ABOUT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-primary-300 text-sm lg:text-base leading-6 lg:leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <a
            className="inline-block mt-6 px-8 py-3 font-mono text-sm tracking-widest uppercase border border-primary-50 text-primary-50 hover:border-accent-500 hover:text-accent-500 rounded-md transition-all duration-300"
            href={ABOUT.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </Reveal>

        <Reveal variants={fadeInFromRight} delay={150} className="lg:col-span-2">
          <div className="bg-secondary-500 border border-secondary-700 rounded-xl p-6 lg:p-8">
            <h3 className="font-display text-lg lg:text-xl font-semibold text-primary-50 mb-5">
              Skills &amp; Expertise
            </h3>
            <Skills skills={skills} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
