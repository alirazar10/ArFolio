"use client";
import { useEffect, useState } from "react";
import { IoChevronUpCircle } from "react-icons/io5";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const SCROLL_LIMIT = 250;
export default function BackToTop() {
  const [scrollMoved, setScrollMoved] = useState(false);
  const toTop = 0;
  const handleTrackingScroll = (e) => {
    const scrollY = e.currentTarget.scrollY;

    console.log(e.currentTarget);
    if (scrollY > SCROLL_LIMIT) {
      setScrollMoved(true);
    } else {
      setScrollMoved(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > SCROLL_LIMIT) {
      setScrollMoved(true);
    }
    window.addEventListener("scroll", (e) => handleTrackingScroll(e));
  }, []);

  //   const handleBackToTop = () => {
  //     window.screenX = toTop;
  //   };
  return scrollMoved ? (
    <div className="fixed bottom-5 left-3 z-50">
      <IoChevronUpCircle
        className=" text-5xl text-accent-500 hover:text-accent-400 cursor-pointer opacity-25 hover:opacity-100 lg:opacity-100"
        onClick={() => scroll.scrollToTop()}
      />
    </div>
  ) : (
    ""
  );
}
