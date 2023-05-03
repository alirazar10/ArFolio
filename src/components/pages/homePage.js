"use client";

import { hero } from "@/content/hero-content";
import { heroImage } from "@/utils/cloudinary";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/transitionStyle.css";
import { generateImageUrl } from "../libs/imageCreator";
import Image from "next/image";
// import {
//   AdvancedImage,
//   accessibility,
//   lazyload,
//   placeholder,
//   responsive,
// } from "@cloudinary/react";

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
      <h2 className="text-accent-500 text-2xl md:text-3xl lg:text-4xl font-bold inline lg:block mb-3">
        {hero.name}.
      </h2>
    ),
  };
  const item3 = {
    ref: useRef(null),
    el: (
      <h1 className="text-primary-100 text-xl md:text-3xl lg:text-4xl font-bold mb-3 lg:leading-[2.8rem]">
        {hero.tagLine}
      </h1>
    ),
  };
  const item4 = {
    ref: useRef(null),
    el: (
      <p className="text-primary-100 text-sm lg:text-base italic py-2 leading-6 lg:leading-7">
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
          href={"#contact"}
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="text-accent-500 font-bold"
          aria-label="Contact me link"
        >
          Contact Me
        </Link>
      </div>
    ),
  };
  const heroContent = [item1, item2, item3, item4, item5];

  return (
    <div className="w-full max-h-max">
      <div className="overflow-hidden rounded-md py-5 w-full h-full">
        {show && (
          <CSSTransition
            in={true}
            nodeRef={heroImageRef}
            timeout={2000}
            classNames="fadedown"
            appear
            onEntered={handleEntered}
            onExited={handleExited}
          >
            <div
              ref={heroImageRef}
              className="h-[50vh] w-[80vw]  rounded-md  mx-auto lg:mx-0  lg:h-full lg:w-[35%] overflow-hidden  lg:absolute lg:top-0 lg:right-0 lg:bottom-0 "
              style={{ transitionDelay: "300sm" }}
            >
              <div className="relative h-full w-full mx-auto lg:mx-0  lg:h-full lg:w-full border z-10 lg:z-0 border-accent-700 filter bg-primary-500  lg:bg-blend-luminosity bg-cover bg-center lg:opacity-20 lg:hover:opacity-60 transition-all duration-150 overflow-hidden rounded-md">
                <Image
                  src={generateImageUrl(heroImage.imagePublicId).toURL()}
                  width={1280}
                  height={720}
                  className="object-center object-cover min-h-full h-full w-full"
                  alt="Hero section Image"
                  priority={true}
                />
              </div>
            </div>
          </CSSTransition>
        )}
        <div className=" h-full lg:h-fit py-3  relative -mt-20 lg:mt-0 border-none lg:border-none border-primary-700 bg-secondary-500  flex flex-col justify-center items-center lg:items-start rounded-md bg-opacity-0 lg:max-w-[65%]">
          {show && (
            <TransitionGroup
              component={"div"}
              className={`mx-2 px-2 py-5 pt-24 lg:p-2 lg:py-5  space-y-2  lg:text-left`}
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
                    className={`${index < 2 ? "inline " : "lg:block"} `}
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
