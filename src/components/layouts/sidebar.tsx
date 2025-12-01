"use client";

import { MENU_ITEM } from "@/content/constants";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

export default function Sidebar(): React.ReactElement {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-end h-[60px] items-center fixed right-0 top-0 lg:hidden z-100 ">
        <span className="mx-4 cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95" onClick={handleMenu}>
          {!open ? (
            <IoMenu size={36} className="text-primary-50 transition-all duration-300" />
          ) : (
            <IoClose size={32} className="text-accent-400 transition-all duration-300" />
          )}
        </span>
      </div>
      {/* desktop menu */}
      <div className="hidden lg:flex min-h-0 h-full fixed right-0 top-0 bottom-0 lg:w-64 z-50">
        <nav className="flex w-full h-full">
          <ul className="flex flex-col items-end justify-center text-right w-full gap-3">
            {MENU_ITEM.map((item) => (
              <li
                key={item.value}
                className={`text-primary-50 text-xl font-light border-l-4 border-transparent rounded-l-md w-18 cursor-pointer p-4 px-5 bg-dark-accent-500 group hover:bg-secondary-600 h-[60px] transition-all duration-500 ease-out hover:shadow-lg hover:border-l-accent-500 transform hover:scale-105 hover:w-64 overflow-hidden`}
              >
                <Link
                  href={`#${item.value}`}
                  aria-label={item.value}
                  className={`flex flex-row-reverse justify-between items-center gap-3 group-hover:text-accent-500 transition-all duration-300 group-hover:font-bold`}
                  to={item.value}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  activeClass="text-accent-500 font-bold"
                >
                  <span className="transition-all duration-300 transform group-hover:scale-125 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap hidden group-hover:block">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* mobile menu */}
      <div
        className={` ${
          open
            ? "fixed top-0 bottom-0 z-30 left-0 right-0 bg-primary-900 overflow-hidden h-screen w-screen opacity-50 transition-opacity duration-300"
            : "hidden"
        } `}
        onClick={handleMenu}
      ></div>

      <div
        className={`block lg:hidden min-h-0 fixed z-50 top-0 right-0 bottom-0 h-fit ease-out duration-300 ${
          open ? "translate-x-0 w-60 h-fit shadow-lg" : "translate-x-full"
        }`}
      >
        <nav className={`flex w-full mt-20`} onClick={handleMenu}>
          <ul className="flex flex-col items-end justify-center text-right w-full gap-0 bg-dark-accent-500">
            {MENU_ITEM.map((item) => (
              <li
                key={item.value}
                className={`text-sm lg:text-lg text-primary-50 border-l-4 border-transparent hover:border-l-accent-500 w-full cursor-pointer p-3 px-5 bg-dark-accent-500 hover:bg-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
              >
                <Link
                  className={`flex flex-row-reverse justify-between items-center hover:text-accent-500 transition-all duration-300 hover:font-bold`}
                  href={`#${item.value}`}
                  aria-label={item.value}
                  to={item.value}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="text-accent-500 font-bold border-l-accent-500"
                  onClick={handleMenu}
                >
                  <span className="transition-all duration-300 transform hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
