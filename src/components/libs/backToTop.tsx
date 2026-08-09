"use client";
import { useEffect, useState } from "react";
import { IoChevronUpCircle } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

const SCROLL_LIMIT = 250;

export default function BackToTop(): React.ReactElement | null {
  const [scrollMoved, setScrollMoved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollMoved(window.scrollY > SCROLL_LIMIT);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollMoved ? (
    <div className="fixed bottom-5 left-3 z-50">
      <IoChevronUpCircle
        className="text-5xl text-accent-500 hover:text-accent-400 cursor-pointer opacity-25 hover:opacity-100 lg:opacity-100 transition-opacity duration-300"
        onClick={() => scroll.scrollToTop()}
      />
    </div>
  ) : null;
}
