"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoAdd, IoRemove, IoArrowForward, IoLocation } from "react-icons/io5";

interface AccordionItem {
  title: string;
  start_date: string;
  end_date: string;
  location: string;
  link?: string | boolean;
  description: string;
  skills: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-secondary-700"
        aria-hidden
      />
      <ul className="space-y-6">
        {items.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <li key={index} className="relative pl-8">
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-300 ${
                  isOpen
                    ? "bg-accent-500 border-accent-500"
                    : "bg-primary-500 border-secondary-500"
                }`}
                aria-hidden
              />
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full text-left group"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="flex flex-col gap-1 text-sm lg:text-base font-semibold text-primary-100 group-hover:text-accent-500 transition-colors duration-300">
                    <span>{item.title}</span>
                    <span className="font-mono text-xs text-primary-300 tracking-wide">
                      {item.start_date} - {item.end_date}
                    </span>
                  </p>
                  {isOpen ? (
                    <IoRemove className="text-xl text-accent-500 shrink-0" />
                  ) : (
                    <IoAdd className="text-xl text-primary-300 shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 p-4 lg:p-5 bg-secondary-500 border border-secondary-700 rounded-lg text-sm lg:text-base">
                      <p className="flex items-center gap-2 text-xs lg:text-sm text-primary-300 mb-3">
                        <IoLocation size={16} /> <span>{item.location}</span>
                      </p>
                      {typeof item.link === "string" && item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Website link"
                          className="flex items-center gap-2 text-xs lg:text-sm text-primary-300 hover:text-accent-500 transition-colors duration-300 mb-3"
                        >
                          <IoArrowForward size={16} /> <span>{item.link}</span>
                        </a>
                      )}
                      <p className="text-primary-200 leading-6">{item.description}</p>
                      <div className="flex gap-2 flex-wrap mt-3">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="font-mono text-[10px] lg:text-xs px-2.5 py-1 rounded-full border border-secondary-600 text-primary-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
