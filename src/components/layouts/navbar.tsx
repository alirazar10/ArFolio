"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { MENU_ITEM, SOCIAL_LINKS } from "@/content";
import { ICONS } from "@/content/icon-map";

const SOCIAL_KEYS = ["github", "linkedin", "twitter", "instagram", "facebook"];

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false);

  const ResumeIcon = ICONS.resume;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-dark-accent-500/80 backdrop-blur-md border-b border-secondary-700">
          <nav className="flex items-center justify-between h-16 px-5 lg:px-10 xl:max-w-5xl mx-auto">
            <button
              type="button"
              onClick={() => scroll.scrollToTop()}
              aria-label="Scroll to top"
              className="font-display text-lg lg:text-xl font-bold text-primary-50 hover:text-accent-500 transition-colors duration-300"
            >
              Ali Reza
              <span className="text-accent-500">.</span>
            </button>

            {/* desktop links */}
            <ul className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
              {MENU_ITEM.map((item) => (
                <li key={item.value}>
                  <Link
                    href={`#${item.value}`}
                    aria-label={item.label}
                    to={item.value}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer text-primary-200 hover:text-accent-500 transition-colors duration-300 pb-1 border-b border-transparent"
                    activeClass="!text-accent-500 !border-accent-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* desktop socials + resume */}
            <div className="hidden lg:flex items-center gap-4 text-lg text-primary-200">
              {SOCIAL_KEYS.map((key) => {
                const social = SOCIAL_LINKS[key];
                const Icon = ICONS[social.icon];
                return (
                  <a
                    key={key}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ali Reza's ${social.label} account`}
                    className="hover:text-accent-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href="/assets/alireza-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Ali Reza's resume"
                className="hover:text-accent-500 transition-all duration-300 transform hover:scale-110"
              >
                <ResumeIcon size={18} />
              </a>
            </div>

            {/* mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden text-primary-50 hover:text-accent-500 transition-colors duration-300"
            >
              {open ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary-900/70 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-dark-accent-500 border-l border-secondary-700 pt-24 px-8 lg:hidden"
            >
              <ul className="flex flex-col gap-6 font-mono text-sm tracking-widest uppercase">
                {MENU_ITEM.map((item) => (
                  <li key={item.value}>
                    <Link
                      href={`#${item.value}`}
                      aria-label={item.label}
                      to={item.value}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer text-primary-100 hover:text-accent-500 transition-colors duration-300"
                      activeClass="!text-accent-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-5 text-xl text-primary-200 mt-10">
                {SOCIAL_KEYS.map((key) => {
                  const social = SOCIAL_LINKS[key];
                  const Icon = ICONS[social.icon];
                  return (
                    <a
                      key={key}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ali Reza's ${social.label} account`}
                      className="hover:text-accent-500 transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
                <a
                  href="/assets/alireza-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Ali Reza's resume"
                  className="hover:text-accent-500 transition-colors duration-300"
                >
                  <ResumeIcon size={20} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
