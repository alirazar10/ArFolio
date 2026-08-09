"use client";
import { EXPERIENCE } from "@/content";
import { Accordion } from "../libs";
import Reveal from "../libs/reveal";
import { useState } from "react";

const ITEM_LIMIT = 3;
export default function Experience(): React.ReactElement {
  const [experienceItems, setExperienceItems] = useState(
    EXPERIENCE.slice(0, ITEM_LIMIT)
  );

  const handleLoadMore = () => {
    const currentExperienceItems = experienceItems.length;
    const nextExperienceItems = EXPERIENCE.slice(
      currentExperienceItems,
      currentExperienceItems + ITEM_LIMIT
    );
    setExperienceItems([...experienceItems, ...nextExperienceItems]);
  };

  const handleLoadLess = () => {
    setExperienceItems(experienceItems.slice(0, ITEM_LIMIT));
  };
  return (
    <div className="flex justify-center items-center max-w-3xl mx-auto">
      <div className="w-full flex flex-col">
        <Reveal delay={100}>
          <p className="font-mono text-accent-500 text-xs tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-50 mb-8">
            Where I Worked
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <Accordion items={experienceItems} />

          <div className="text-center">
            {experienceItems.length < EXPERIENCE.length ? (
              <button
                type="button"
                className="font-mono text-xs tracking-widest uppercase text-primary-100 px-4 py-2 rounded-lg mt-8 border border-primary-50 hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            ) : (
              <button
                type="button"
                className="font-mono text-xs tracking-widest uppercase text-primary-100 px-4 py-2 rounded-lg mt-8 border border-primary-50 hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
                onClick={handleLoadLess}
              >
                Load Less
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
