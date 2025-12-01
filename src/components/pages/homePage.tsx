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

export default function HomePage(): React.ReactElement {
  const [show, setShow] = useState<boolean>(false);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const item5Ref = useRef<HTMLDivElement>(null);
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
    ref: item1Ref,
    el: (
      <h4 className="text-primary-50 text-base md:text-xl lg:text-2xl font-bold inline lg:block pr-2">
        {hero.greeting}
      </h4>
    ),
  };
  const item2 = {
    ref: item2Ref,
    el: (
      <h2 className="text-accent-500 text-2xl md:text-3xl lg:text-4xl font-bold inline lg:block mb-3">
        {hero.name}.
      </h2>
    ),
  };
  const item3 = {
    ref: item3Ref,
    el: (
      <h1 className="text-primary-100 text-xl md:text-3xl lg:text-4xl font-bold mb-3 lg:leading-[2.8rem]">
        {hero.tagLine}
      </h1>
    ),
  };
  const item4 = {
    ref: item4Ref,
    el: (
      <p className="text-primary-100 text-sm lg:text-base italic py-2 leading-6 lg:leading-7">
        {hero.description}
      </p>
    ),
  };

  const item5 = {
    ref: item5Ref,
    el: (
      <div className="py-2 pt-5 my-3">
        <Link
          className="px-8 py-2 text-lg font-semibold outline outline-primary-50 text-primary-50 hover:outline-accent-500 hover:text-accent-500 rounded-md"
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
  console.log(heroImage.imagePublicId);
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
              className="h-[50vh] w-[80vw]  rounded-md  mx-auto lg:mx-0  lg:h-full lg:w-[35%] overflow-hidden  lg:absolute lg:top-0 lg:right-0 lg:bottom-0 hover:shadow-primary"
              style={{ transitionDelay: "300sm" }}
            >
              <div className="relative h-full w-full mx-auto lg:mx-0  lg:h-full lg:w-full hover:border z-10 lg:z-0 border-accent-700 filter bg-primary-500  lg:bg-blend-luminosity bg-cover bg-center lg:opacity-20 lg:hover:opacity-60 transition-all duration-150 overflow-hidden rounded-md" style={{ transitionDelay: "300sm" }}>
                <Image
                  src={generateImageUrl(heroImage.imagePublicId)}
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
        <div className=" h-full lg:h-fit py-3  relative -mt-20 lg:mt-0 border-none lg:border-none  flex flex-col justify-center items-center lg:items-start lg:max-w-[65%]">
          {show && (
            <TransitionGroup
              component={"div"}
              className={`px-5 py-5 pt-24 lg:p-2 lg:py-5  space-y-2  lg:text-left border-primary-700 bg-secondary-500  rounded-md bg-opacity-0`}
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
