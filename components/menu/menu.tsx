"use client";

import { AiOutlineMail } from "react-icons/ai";
import { RiCloseLine, RiMenu2Line, RiMoonClearFill } from "react-icons/ri";
import Link from "next/link";
import Footer from "../footer/footer";
import { useState } from "react";

import { BsSunFill } from "react-icons/bs";
import { ImenuDataProps } from "@/type";

const data: ImenuDataProps[] = [
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "GitHub",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
];

export const container = {
  hidden: { opacity: 1, scale: 1, y: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(true);

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className={darkMode ? "dark" : "light"}>
      <nav className="   text-dark_bg max-w-[100vw] shadow-md  tracking-tight dark:text-default_color  flex flex-col w-screen fixed top-0 z-20 justify-center bg-[#f0f0f0] dark:bg-dark_bg items-center ">
        <div className="max-w-[1400px]  px-8  w-full bg-inherit dark:bg-dark_bg flex justify-between  py-5 items-center border-b-[1px] dark:border-b-border_color border-b-gray-300  ">
          <div className=" flex justify-center items-center gap-3 ">
            <div className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color cursor-pointer ">
              <AiOutlineMail />
            </div>
            <div className=" font-bold text-sm md:text-base">Josué Makuta</div>
          </div>
          <div className=" flex md:hidden ">
            <RiMenu2Line size={23} onClick={handleMenu} />
          </div>
          <div className="hidden md:flex gap-[3rem]">
            <div className=" hidden text-sm md:flex gap-4 ">
              {data.map((elt, index) => {
                return (
                  <Link
                    className=" hover:font-bold "
                    href={elt.link}
                    key={index}
                  >
                    {elt.name}
                    {!(index == data.length - 1) && (
                      <span className=" font-light pl-4">|</span>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="flex w-[3rem] hover:scale-110 transition-all justify-center items-center  z-50 ">
              {darkMode && (
                <BsSunFill
                  size={20}
                  className=" cursor-pointer "
                  onClick={() => {
                    setDarkMode(false);
                  }}
                />
              )}
              {!darkMode && (
                <RiMoonClearFill
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    setDarkMode(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {showMenu && (
        <nav className=" flex flex-col w-screen h-screen gap-8 fixed top-0 z-20 justify-center items-center  dark:bg-dark_bg bg-opacity-95  ">
          <div className="flex">
            <RiCloseLine size={23} onClick={handleMenu} />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 ">
            {data.map((elt, index) => {
              return (
                <Link href={elt.link} key={index} onClick={handleMenu}>
                  {elt.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {children}
    </main>
  );
};

export default Menu;
