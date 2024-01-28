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
    link: "https://medium.com/@makutajosue",
  },
  {
    name: "GitHub",
    link: "http://github.com/JoeMakuta",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/josuemakuta/",
  },
];

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main
      className={`flex flex-col justify-between min-h-screen ${
        darkMode ? "dark" : "light"
      }`}
    >
      <nav className="   text-dark_bg max-w-[100vw] shadow-md  tracking-tight dark:text-default_color  flex flex-col w-screen fixed top-0 z-20 justify-center bg-[#f0f0f0] dark:bg-dark_bg items-center ">
        <div className="max-w-[1400px]  px-8  w-full bg-inherit dark:bg-dark_bg flex justify-between  py-5 items-center border-b-[1px] dark:border-b-border_color border-b-gray-300  ">
          <Link href={"/"} className=" flex justify-center items-center gap-3 ">
            <Link
              href="mailto:makutajosue@gmail.com"
              className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color cursor-pointer "
            >
              <AiOutlineMail />
            </Link>
            <div className=" font-bold text-sm md:text-base">Josué Makuta</div>
          </Link>
          <div className=" flex md:hidden ">
            <RiMenu2Line size={23} onClick={handleMenu} />
          </div>
          <div className="hidden md:flex gap-[3rem]">
            <div className=" hidden text-sm md:flex gap-4 ">
              {data.map((elt, index) => {
                return (
                  <div>
                    <Link
                      className=" hover:text-gray-400 transition-all font-bold "
                      href={elt.link}
                      key={index}
                      target="__blank"
                    >
                      {elt.name}
                    </Link>
                    {!(index == data.length - 1) && (
                      <span className=" font-light pl-4">|</span>
                    )}
                  </div>
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
            {/* <div>
              <input
                className="border-none bg-inherit rounded-full p-0 w-7 h-7"
                type="color"
              />
            </div> */}
          </div>
        </div>
      </nav>

      {showMenu && (
        <nav className=" flex flex-col w-screen h-screen gap-8 dark:text-white bg-gray-200 fixed top-0 z-20 justify-center items-center  dark:bg-dark_bg">
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
          <div className="flex w-[3rem] hover:scale-110 transition-all justify-center items-center  z-50 ">
            {darkMode && (
              <BsSunFill
                size={20}
                className=" cursor-pointer "
                onClick={() => {
                  setDarkMode(false);
                  handleMenu();
                }}
              />
            )}
            {!darkMode && (
              <RiMoonClearFill
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  setDarkMode(true);
                  handleMenu();
                }}
              />
            )}
          </div>
        </nav>
      )}

      <div className=" mt-20 ">{children}</div>
      <Footer />
    </main>
  );
};

export default Menu;
