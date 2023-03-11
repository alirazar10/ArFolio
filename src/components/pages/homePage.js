"use client";

import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { Fade, FadeUp } from "../libs/transitions";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/transitionStyle.css";
import { hero } from "@/content/hero-content";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const heroImageRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  const handleEntered = () => {
    setShow(true);
  };

  const handleExited = () => {
    setShow(false);
  };
  const item1 = {
    ref: useRef(null),
    el: (
      <h4 className="text-primary-50 text-base md:text-xl lg:text-2xl font-bold inline lg:block pr-2">
        {hero.greeting}
      </h4>
    ),
  };
  const item2 = {
    ref: useRef(null),
    el: (
      <h2 className="text-accent-500 text-xl md:text-2xl lg:text-4xl font-bold inline lg:block mb-">
        {hero.name}.
      </h2>
    ),
  };
  const item3 = {
    ref: useRef(null),
    el: (
      <h1 className="text-primary-100 text-base md:text-2xl lg:text-3xl font-bold mb-3">
        {hero.tagLine}
      </h1>
    ),
  };
  const item4 = {
    ref: useRef(null),
    el: (
      <p className="text-primary-100 text-sm lg:text-base italic py-2">
        {hero.description}
      </p>
    ),
  };

  const item5 = {
    ref: useRef(null),
    el: (
      <div className="py-2 pt-5 my-3">
        <Link
          className="px-8 py-2 text-lg font-semibold outline outline-1 outline-primary-50 text-primary-50 hover:outline-accent-500 hover:text-accent-500 rounded-md"
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="text-accent-500 font-bold"
        >
          Contact Me
        </Link>
      </div>
    ),
  };
  const heroContent = [item1, item2, item3, item4, item5];

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative overflow-hidden rounded-md py-5 mt-20 lg:p-0 lg:m-0 w-full lg:h-full">
        {/* {show && ( */}
        <CSSTransition
          in={true}
          nodeRef={heroImageRef}
          timeout={500}
          classNames="fadedown"
          appear
          onEntered={handleEntered}
          onExited={handleExited}
        >
          <div
            ref={heroImageRef}
            className=" rounded-md lg:rounded-none  mx-auto lg:mx-0 lg:py-16  lg:h-full lg:w-[290px] overflow-hidden  relative  lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0"
            style={{ transitionDelay: "2300px" }}
          >
            <div className="relative h-[160px] w-[150px] mx-auto lg:mx-0  lg:h-full lg:w-full border z-10 lg:z-0 border-accent-700 bg-background filter bg-primary-500  lg:bg-blend-luminosity bg-cover bg-center lg:opacity-20 lg:hover:opacity-60 transition-all duration-150 overflow-hidden "></div>
          </div>
        </CSSTransition>
        {/* )} */}
        <div className=" h-full lg:h-fit py-3  relative -mt-20 lg:mt-0 border border-primary-700 bg-secondary-500 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-auto flex flex-col justify-center items-center lg:items-start rounded-md bg-opacity-0">
          {show && (
            <TransitionGroup
              component={"div"}
              className={`mx-2 px-2 py-5 pt-24 lg:p-2 lg:py-5  space-y-2 lg:pl-[7rems] text-center lg:text-left`}
            >
              {heroContent.map(({ ref, el }, index) => (
                <CSSTransition
                  key={index}
                  in={show}
                  nodeRef={ref}
                  timeout={2000}
                  classNames="fadeup"
                  appear
                  onEntered={handleEntered}
                  onExited={handleExited}
                >
                  <div
                    ref={ref}
                    style={{ transitionDelay: `${index + 1}00ms` }}
                  >
                    {el}
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </div>
      </div>
    </div>
  );
}
