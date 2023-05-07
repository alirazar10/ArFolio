"use client";
import { skills } from "@/content/constants";
import { useRef } from "react";
import { Skills } from "../libs";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";

export default function About() {
  const experienceRef = useRef(null);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative ">
        <ScrollRevealWrapper>
          <div
            ref={experienceRef}
            className="py-8 p-4 pt-6 lg:px-10 space-y-2 lg:space-y-3 lg:w-[100%] lg:pr-[35%] "
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
              Looking back at my journey so far, I was able to grab the
              opportunities to work in several organizations like Kateb
              University, Mustafa Group based in Dubai, and as a freelance, grow
              and develop my skills as a Full-stack developer, that led me to my
              current role in a Canadian base start-up. Furthermore, working on
              a variety of projects, including some of my own, has helped me
              build expertise in various areas of web development.
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
              <a
                className="px-8 py-2 text-lg font-semibold outline outline-1 outline-primary-50 text-primary-50 hover:outline-accent-500 hover:text-accent-500 rounded-md mt-6 inline-block"
                href={"/assets/alireza-cv.pdf"}
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
              </a>
            </p>
          </div>
        </ScrollRevealWrapper>
        <div className=" rounded-md  lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:left-[70%] ">
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
