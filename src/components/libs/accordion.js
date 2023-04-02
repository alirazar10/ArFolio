"use client";

import { createRef, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { MdAdd, MdOutlineOpenInNew, MdRemove } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeHeight, setActiveHeight] = useState(null);

  const toggleItem = (index) => {
    let height = document.getElementById(index).firstChild.clientHeight;
    if (index === activeIndex) {
      setActiveIndex(null);
      setActiveHeight(null);
    } else {
      setActiveIndex(index);
      setActiveHeight(height);
      console.log(activeHeight, height);
    }
  };

  return (
    <div className=" rounded-md w-full">
      <TransitionGroup component={null}>
        {items?.map((item, index) => {
          const itemsRes = createRef(null);
          return (
            <CSSTransition
              key={index}
              in={true}
              nodeRef={itemsRes}
              timeout={2000}
              classNames="fadeup"
              appear
            >
              <div
                id={index}
                key={index}
                ref={itemsRes}
                className="mb-4"
                style={{ transitionDelay: `${index + 1}00ms` }}
              >
                <div
                  className={`w-full text-left px-4 py-2 font-medium focus:outline-none group bg-primary-800 ${
                    activeIndex === index ? "bg-opacity-40" : "bg-opacity-100"
                  } rounded-md hover:shadow-primary cursor-pointer`}
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
                        <MdAdd className="text-2xl text-primary-50 font-bold  transition ease-in-out duration-300" />
                      ) : (
                        <MdRemove className="text-2xl text-primary-50 font-bold" />
                      )}
                    </span>
                  </div>
                </div>
                <div
                  className={`overflow-hidden ease-in-out transition-[height]  duration-500`}
                  id={index}
                  style={
                    activeIndex === index
                      ? { height: activeHeight + 10 }
                      : { height: 0 }
                  }
                >
                  <div className="px-4 py-4 mt-2 bg-secondary-500 text-primary-100 text-sm lg:text-base  text-justify rounded-md h-fit">
                    <p className="text-sm text-secondary-300 pb-3 flex items-center gap-2">
                      <IoLocation size={20} className="text-primary-50" />{" "}
                      <span>{item.location}</span>
                    </p>
                    <p className="text-sm text-secondary-300 pb-4 flex items-center gap-2">
                      {item.link && (
                        <>
                          <MdOutlineOpenInNew
                            size={20}
                            className="text-primary-50"
                          />{" "}
                          <a href={item.link} aria-label={"Website link"}>
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
                      {item.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-2 bg-primary-100 text-secondary-300 text-xs rounded-xl bg-opacity-20"
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
