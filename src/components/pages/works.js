"use client";
import { srConfig } from "@/configs/srConfig";
import { projects } from "@/content/constants";
import { useEffect, useRef, useState } from "react";
import { IoLogoGithub, IoLogoGooglePlaystore } from "react-icons/io5";
import { MdOutlineOpenInNew } from "react-icons/md";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const COL_LIMIT = 3;
export default function Works() {
  const revealProjects = useRef([]);
  const revealTitle = useRef(null);
  const [displayedProjects, setDisplayedProjects] = useState(
    projects.slice(0, COL_LIMIT)
  );

  async function handleReveal() {
    if (revealProjects.current.length > 0) {
      const delay = 300;
      const sr = (await import("scrollreveal")).default;
      sr().reveal(revealTitle.current, srConfig(delay));

      revealProjects.current.forEach((ref, i) =>
        sr().reveal(ref, srConfig(i * 100 + delay))
      );
    }
  }

  useEffect(() => {
    handleReveal();
    // console.log(revealProjects.current);
  }, []);

  const loadMore = () => {
    const currentLength = displayedProjects.length;
    const nextProjects = projects.slice(
      currentLength,
      currentLength + COL_LIMIT
    );
    setDisplayedProjects([...displayedProjects, ...nextProjects]);
  };

  const showLess = () => {
    setDisplayedProjects(projects.slice(0, COL_LIMIT));
  };

  return (
    <div className="h-full flex flex-col justify-start items-start w-full">
      <h2
        ref={revealTitle}
        className="text-xl md:text-3xl lg:text-4xl font-bold text-primary-50 py-2 lg:p-0 lg:leading-[2.8]"
      >
        Work Showcase
      </h2>
      <div className="">
        <TransitionGroup
          component={"div"}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}
        >
          {displayedProjects &&
            displayedProjects.map((item, index) => (
              <CSSTransition
                key={index}
                in={true}
                classNames="fadeup"
                timeout={index >= COL_LIMIT ? (index - COL_LIMIT) * 300 : 300}
                exit={false}
              >
                <div
                  key={index}
                  ref={(el) => {
                    return (revealProjects.current[index] = el);
                  }}
                  style={{
                    transitionDelay: `${
                      index >= COL_LIMIT ? (index - COL_LIMIT) * 100 : 0
                    }ms`,
                  }}
                  className="flex flex-col bg-secondary-500 p-4 group pt-6 shadow-primary hover:primary-lg border border-primary-700 hover:border-primary-400 rounded-md ease-in-out  translate-y-0 hover:-translate-y-1.5 duration-300"
                >
                  <h2 className="text-primary-100 transition-all duration-300 group-hover:text-accent-500 font-bold py-3 text-2xl">
                    {item.title}
                  </h2>
                  <div className="h-full flex flex-col justify-between">
                    <p className="text-primary-100 text-sm lg:text-base  py-2 text-justify">
                      {item.description}
                    </p>

                    <p className="text-[#8892B0] text-xs lg:text-sm pt-4 text-justify flex gap-2 flex-wrap">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-2 bg-primary-100 text-secondary-300 text-xs rounded-xl bg-opacity-20"
                        >
                          {tech}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex justify-end items-center mt-4 gap-2">
                    {item.website_link && (
                      <a href={item.website_link} aria-label={"Website link"}>
                        <MdOutlineOpenInNew className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer" />
                      </a>
                    )}
                    {item.github_link && (
                      <a href={item.github_link} aria-label={"GitGub link"}>
                        <IoLogoGithub className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer" />
                      </a>
                    )}
                    {item.playstore_link && (
                      <a
                        href={item.playstore_link}
                        aria-label={"playstore link"}
                      >
                        <IoLogoGooglePlaystore className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
      <div className="text-center w-full mt-6">
        {displayedProjects.length < projects.length ? (
          <button
            className="text-white px-4 py-2 rounded-lg mt-4 outline outline-1 outline-primary-50 hover:outline-accent-500 hover:text-accent-500 transition-all duration-300"
            onClick={loadMore}
          >
            Load More
          </button>
        ) : (
          <button
            className="text-white px-4 py-2 rounded-lg mt-4 outline outline-1 outline-primary-50 hover:outline-accent-500 hover:text-accent-500 transition-all duration-300"
            onClick={showLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
