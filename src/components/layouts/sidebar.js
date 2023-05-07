"use client";

import { MENU_ITEM } from "@/content/constants";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-end h-[60px] items-center fixed right-0 top-0 lg:hidden z-[100] ">
        <span className="mx-4 cursor-pointer" onClick={handleMenu}>
          {!open ? (
            <IoMenu size={36} className="text-primary-50 " />
          ) : (
            <MdMenuOpen size={32} className="text-accent-400" />
          )}
        </span>
      </div>
      {/* desktop menu */}
      <div className="hidden lg:flex min-h-0 h-full fixed right-0 top-0 bottom-0 lg:w-64 z-50">
        <nav className="flex w-full h-full">
          <ul className="flex flex-col items-end justify-center text-right w-full gap-10">
            {MENU_ITEM.map((item) => (
              <li
                key={item.value}
                className={`text-primary-50 text-xl font-light border-b-2 border-accent-600 rounded-l-md w-full cursor-pointer p-4 px-5 bg-dark-accent-500 group hover:bg-secondary-600 h-[70px] mr-[-180px] hover:mr-[0px] transition-all duration-500`}
              >
                <Link
                  href={`#${item.value}`}
                  aria-label={item.value}
                  className={`flex flex-row-reverse justify-between items-center   group-hover:text-accent-500 transition-all duration-150  group-hover:font-bold`}
                  to={item.value}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  activeClass="text-accent-500 font-bold" // class added in global
                >
                  {item.label}
                  {item.icon}
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
            ? "fixed top-0 bottom-0 z-30 left-0 right-0 bg-primary-900  overflow-hidden h-screen w-screen opacity-50"
            : "hd"
        } `}
        onClick={handleMenu}
      ></div>

      <div
        className={`block lg:hidden min-h-0 fixed z-50 top-0 right-0 bottom-0 h-fit ease-in-out duration-300 ${
          open ? "translate-x-0 w-60 h-fit" : "translate-x-full"
        }`}
      >
        <nav className={`flex w-full  mt-20`} onClick={handleMenu}>
          <ul className="flex flex-col items-end justify-center text-right w-full gap-1 bg-dark-accent-500">
            {MENU_ITEM.map((item) => (
              <li
                key={item.value}
                className={`text-sm lg:text-lg text-primary-50 border-b-2 hover:text-accent-500
                                hover:font-bold border-accent-600 rounded-l-md w-full cursor-pointer p-2.5 px-5 bg-dark-accent-500 hover:bg-secondary-600 transition-all duration-150`}
              >
                <Link
                  className={`flex flex-row-reverse justify-between items-center   hover:text-accent-500 transition-all duration-150  hover:font-bold`}
                  href={`#${item.value}`}
                  aria-label={item.value}
                  to={item.value}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="text-accent-500 font-bold"
                  onClick={handleMenu}
                >
                  {item.label}
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
