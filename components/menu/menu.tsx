"use client";

import { AiOutlineMail } from "react-icons/ai";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import Footer from "../footer/footer";
import { useState } from "react";

const data = [
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

// const DesktopMenu = () => {
//   const [showMenu, setShowMenu] = useState(false);
// };

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main>
      <nav className=" flex flex-col w-screen fixed top-0 z-20 justify-center bg-dark_bg items-center ">
        <div className="max-w-[1400px]  px-7 2xl:px-0 w-full bg-dark_bg flex justify-between  py-5 items-center border-b-[1px] border-b-border_color ">
          <div className=" flex justify-center items-center gap-3 ">
            <div className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color">
              <AiOutlineMail />
            </div>
            <div className=" font-bold text-sm md:text-base">Josué Makuta</div>
          </div>
          <div className=" flex md:hidden ">
            <RiMenu2Line size={23} onClick={handleMenu} />
          </div>
          <div className="hidden md:flex gap-4 ">
            {data.map((elt, index) => {
              return (
                <Link href={elt.link} key={index}>
                  {elt.name}
                  {!(index == data.length - 1) && (
                    <span className="pl-4">/</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {showMenu && (
        <nav className=" flex flex-col w-screen h-screen gap-8 fixed top-0 z-20 justify-center items-center bg-dark_bg bg-opacity-95  ">
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
      <Footer />
    </main>
  );
};

export default Menu;
