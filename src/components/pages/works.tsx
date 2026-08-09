"use client";
import { projects } from "@/content";
import { useState } from "react";
import { motion } from "motion/react";
import { IoLogoGithub, IoLogoGooglePlaystore, IoArrowForward } from "react-icons/io5";
import Reveal from "../libs/reveal";
import { fadeUp } from "@/configs/motion";

const COL_LIMIT = 3;
export default function Works(): React.ReactElement {
  const [displayedProjects, setDisplayedProjects] = useState(
    projects.slice(0, COL_LIMIT)
  );

  const loadMore = () => {
    const currentLength = displayedProjects.length;
    const nextProjects = projects.slice(currentLength, currentLength + COL_LIMIT);
    setDisplayedProjects([...displayedProjects, ...nextProjects]);
  };

  const showLess = () => {
    setDisplayedProjects(projects.slice(0, COL_LIMIT));
  };

  return (
    <div className="h-full flex flex-col justify-start items-start w-full">
      <Reveal>
        <p className="font-mono text-accent-500 text-xs tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-50 mb-8">
          Work Showcase
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {displayedProjects.map((item, index) => (
          <motion.div
            key={item.title}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              duration: 0.4,
              delay: (index % COL_LIMIT) * 0.1,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="group flex flex-col bg-secondary-500 p-5 pt-6 border border-secondary-700 hover:border-accent-500/50 shadow-primary rounded-lg translate-y-0 hover:-translate-y-1.5 transition-all duration-300"
          >
            <h3 className="font-display text-xl font-bold text-primary-100 group-hover:text-accent-500 transition-colors duration-300 mb-1">
              {item.title}
            </h3>
            <p className="font-mono text-[11px] text-primary-400 mb-3">{item.date}</p>
            <div className="h-full flex flex-col justify-between">
              <p className="text-primary-300 text-sm lg:text-base leading-6">
                {item.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-4">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-secondary-600 text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end items-center mt-4 gap-3">
              {item.website_link && (
                <a
                  href={item.website_link}
                  aria-label="Website link"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <IoArrowForward className="text-xl text-primary-200 hover:text-accent-500" />
                </a>
              )}
              {item.github_link && (
                <a
                  href={item.github_link}
                  aria-label="GitHub link"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <IoLogoGithub className="text-xl text-primary-200 hover:text-accent-500" />
                </a>
              )}
              {item.playstore_link && (
                <a
                  href={item.playstore_link}
                  aria-label="Playstore link"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <IoLogoGooglePlaystore className="text-xl text-primary-200 hover:text-accent-500" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center w-full mt-8">
        {displayedProjects.length < projects.length ? (
          <button
            className="font-mono text-xs tracking-widest uppercase text-primary-100 px-6 py-2 rounded-lg border border-primary-50 hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
            onClick={loadMore}
          >
            Load More
          </button>
        ) : (
          <button
            className="font-mono text-xs tracking-widest uppercase text-primary-100 px-6 py-2 rounded-lg border border-primary-50 hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
            onClick={showLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
