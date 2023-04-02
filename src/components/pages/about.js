"use client";
import { skills } from "@/content/constants";
import { Skills } from "../libs";
import { useRef } from "react";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";

export default function About() {
  const experienceRef = useRef(null);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative ">
        <ScrollRevealWrapper>
          <div
            ref={experienceRef}
            className="py-8 p-4 pt-6 lg:px-10 space-y-2 lg:space-y-3 lg:w-[75%] lg:pr-[30%] "
            name="about-content"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-50 py-2">
              The Story Behind the Pixel
            </h2>
            <p className="text-primary-100 text-justify text-sm lg:text-base leading-6 lg:leading-7">
              Hello, I&lsquo;m Ali Reza - a full stack developer with a passion
              for building pixel-perfect websites and web applications. My
              journey into the world of technology began when I was a school
              student, working as a technician for a small ISP company. From
              there, my interest in computer science grew, and I knew that I had
              found my calling.
            </p>
            <p className="text-primary-100 text-justify text-sm lg:text-base leading-6 lg:leading-7">
              I believe that technology is a powerful tool that has the ability
              to bring people together and make their lives easier, especially
              in a world that is rapidly changing and presenting new challenges.
              That&lsquo;s why I&lsquo;m dedicated to creating intuitive,
              user-friendly digital experiences that help businesses and
              individuals achieve their goals.
            </p>
            <p className="text-primary-100 text-justify text-sm lg:text-base leading-6 lg:leading-7">
              When I&lsquo;m not busy coding, you can find me exploring the
              great outdoors or enjoying a hot cup of coffee. Thanks for taking
              the time to get to know me a little better - I can&lsquo;t wait to
              work together and bring your ideas to life!
            </p>
          </div>
        </ScrollRevealWrapper>
        <div className=" rounded-md  lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:left-[50%] ">
          <ScrollRevealWrapper options={{ origin: "right", delay: 200 }}>
            <div className="lg:bg-secondary-600 px-8 py-10 lg:shadow-primary lg:border lg:border-primary-700 rounded-md">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-50 pb-5 transition-all duration-300 ">
                Skills and Expertise
              </h2>
              <Skills skills={skills} />
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </div>
  );
}
