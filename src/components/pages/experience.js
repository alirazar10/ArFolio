"use client";
import { EXPERIENCE } from "@/content/constants";
import { Accordion } from "../libs";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";
import { useState } from "react";

const ITEM_LIMIT = 3;
export default function Experience() {
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
    <>
      <div className="min-h-screen flex justify-center items-center max-w-3xl mx-auto">
        <div className="w-full">
          <ScrollRevealWrapper options={{ delay: 300 }}>
            <h2 className="text-3xl font-bold text-primary-50 py-5 lg:py-10 text-left">
              Where I Worked
            </h2>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper options={{ delay: 300 }}>
            <Accordion items={experienceItems} />

            <div className="text-center">
              {experienceItems.length < EXPERIENCE.length ? (
                <button
                  type="button"
                  className="text-white px-4 py-2 rounded-lg mt-4 outline outline-1 outline-primary-50 hover:outline-accent-500 hover:text-accent-500 transition-all duration-300 delay-300"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              ) : (
                <button
                  type="button"
                  className="text-white px-4 py-2 rounded-lg mt-4 outline outline-1 outline-primary-50 hover:outline-accent-500 hover:text-accent-500 transition-all duration-300 delay-300"
                  onClick={handleLoadLess}
                >
                  Load less
                </button>
              )}
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </>
  );
}
