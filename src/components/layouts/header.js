"use client";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import ResumeIcon from "@/assets/icons/resume-icon";
import { SOCIAL_LINKS } from "@/content/constants";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(lastScrollPos > currentScrollPos || currentScrollPos < 10);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={` h-[60px] text-center fixed z-20  top-0 left-0 right-20 lg:right-0 transition duration-[400ms] ease-in ${
        showHeader ? "" : "transform -translate-y-full"
      }`}
    >
      <header
        className="flex justify-start lg:justify-center items-center h-full lg:mx-auto"
        name="social-media"
      >
        <ul className="flex justify-start lg:justify-center items-center h-full gap-3 text-2xl px-4 text-accent-500 bg-secondary-500 bg-opacity-50 rounded-br-lg lg:rounded-b-xl">
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <a
              href={SOCIAL_LINKS.facebook.link}
              target="_blank"
              rel="noreferrer"
              aria-label={"My Facebook Account Link"}
            >
              <IoLogoFacebook className="text-2xl lg:text-3xl" />
            </a>
          </li>
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <a
              href={SOCIAL_LINKS.github.link}
              target="_blank"
              rel="noreferrer"
              aria-label={"My GitHub Account Link"}
            >
              <IoLogoGithub className="text-2xl lg:text-3xl" />
            </a>
          </li>
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <a
              href={SOCIAL_LINKS.linkedin.link}
              target="_blank"
              rel="noreferrer"
              aria-label={"My LinkedIn Account Link"}
            >
              <IoLogoLinkedin className="text-2xl lg:text-3xl" />
            </a>
          </li>
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <a
              href={SOCIAL_LINKS.twitter.link}
              target="_blank"
              rel="noreferrer"
              aria-label={"My Twitter Account Link"}
            >
              <IoLogoTwitter className="text-3xl lg:text-4xl" />
            </a>
          </li>
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <a
              href={SOCIAL_LINKS.instagram.link}
              target="_blank"
              rel="noreferrer"
              aria-label={"My Instagram Account Link"}
            >
              <AiFillInstagram className="text-3xl lg:text-4xl" />
            </a>
          </li>
          <li className="text-accent-500 hover:text-accent-400 transition-all duration-150">
            <ResumeIcon
              className="w-7 lg:w-8 text-accent-500 hover:text-accent-400"
              color={"#FF5722"}
            />
          </li>
        </ul>
      </header>
    </div>
  );
}
