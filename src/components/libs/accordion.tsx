"use client";

import { createRef, useState } from "react";
import { IoAdd, IoArrowForward, IoRemove } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  const [activeHeight, setActiveHeight] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const element = document.getElementById(index.toString());
    if (element) {
      let height = element.firstElementChild?.clientHeight || 0;
      if (index === activeIndex) {
        setActiveIndex(null);
        setActiveHeight(null);
      } else {
        setActiveIndex(index);
        setActiveHeight(height);
      }
    }
  };

  return (
    <div className=" rounded-md w-full">
      <TransitionGroup component={null}>
        {items?.map((item, index) => {
          const itemsRef = createRef<HTMLDivElement>();
          return (
            <CSSTransition
              key={index}
              in={true}
              nodeRef={itemsRef}
              timeout={2000}
              classNames="fadeup"
              appear
            >
              <div
                key={index}
                ref={itemsRef}
                className="mb-4"
                style={{ transitionDelay: `${index + 1}00ms` }}
              >
                <div
                  className={`w-full text-left px-4 py-2 font-medium focus:outline-none group bg-primary-800 ${
                    activeIndex === index ? "bg-opacity-40" : "bg-opacity-100"
                  } rounded-md hover:shadow-primary cursor-pointer ease-in-out  translate-y-0 hover:-translate-y-1.5 duration-300`}
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between py-2 gap-2">
                    <p className="flex flex-col items-start justify-between gap-1.5 w-full text-sm lg:text-[1.05rem] font-semibold text-primary-100">
                      <span className={``}>{item.title}</span>
                      <span className={`text-xs lg:text-sm font-medium `}>
                        {item.start_date} - {item.end_date}
                      </span>
                    </p>
                    <span className="py-2">
                      {index !== activeIndex ? (
                        <IoAdd className="text-2xl text-primary-50 font-bold transition ease-in-out duration-300" />
                      ) : (
                        <IoRemove className="text-2xl text-primary-50 font-bold" />
                      )}
                    </span>
                  </div>
                </div>
                <div
                  className={`overflow-hidden ease-in-out transition-[height]  duration-500`}
                  id={index.toString()}
                  style={
                    activeIndex === index
                      ? { height: activeHeight ? activeHeight + 10 : 0 }
                      : { height: 0 }
                  }
                >
                  <div className="px-4 py-4 mt-2 bg-secondary-500 text-primary-100 text-sm lg:text-base  text-justify rounded-md h-fit">
                    <p className="text-sm text-secondary-300 pb-3 flex items-center gap-2">
                      <IoLocation size={20} className="text-primary-50" />{" "}
                      <span>{item.location}</span>
                    </p>
                    <p className="text-sm text-secondary-300 pb-4 flex items-center gap-2">
                      {item.link && typeof item.link === 'string' && (
                        <>
                          <IoArrowForward
                            size={20}
                            className="text-primary-50"
                          />{" "}
                          <a
                            href={item.link}
                            aria-label={"Website link"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.link}
                          </a>
                        </>
                      )}
                    </p>
                    <p className="text-sm text-primary-100">
                      {" "}
                      {item.description}{" "}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-2.5">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-2 bg-primary-100 text-secondary-800 text-xs rounded-xl bg-opacity-20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
