"use client";

import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";

import { useEffect } from "react";
import { IsocialMediaProps } from "@/type";

export const SocialMedia: IsocialMediaProps[] = [
  {
    label: "Twitter",
    icon: <AiFillTwitterCircle size={20} />,
    link: "https://twitter.com/MakutaJosue",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    link: "https://www.linkedin.com/in/josuemakuta",
  },
  {
    label: "Github",
    icon: <AiFillGithub size={20} />,
    link: "http://github.com/JoeMakuta",
  },
  {
    label: "Facebook",
    icon: <AiFillFacebook size={20} />,
    link: "https://www.facebook.com/josue.joemakuta",
  },
];

const User = () => {
  useEffect(() => {});

  return (
    <section className=" max-w-[1400px]   h-[90vh] min-h-[500px] max-h-[1020px] flex justify-center items-center flex-col gap-10 md:gap-5 ">
      <section className=" animate-text bg-gradient-to-r absolute top-0  z-0 from-gray-800 dark:from-slate-400 dark:to-orange-400  to-orange-400 w-screen h-[30%] min-h-[200px] md:h-[35%]"></section>
      <div className=" flex justify-center z-10 items-center gap-5 flex-col ">
        <div className="overflow-hidden w-[7em] h-[7em] rounded-full ">
          <Image
            src="/asserts/profil_pic1.jpg"
            width={400}
            height={400}
            alt="Profil image"
          />
        </div>
        <p>
          Hello, {"i'm Josh !"} <span className=" ">👋</span>
        </p>
      </div>
      <h1 className=" text-[2rem] md:text-[2.5rem] w-[85vw] lg:w-[45vw] bg-clip-text bg-gradient-to-r text-transparent from-gray-800 dark:from-white dark:to-my_orange  to-my_orange animate-text leading-tight text-center font-bold  ">
        In order to be irreplaceable, one must always be different.
      </h1>
      <a
        href="#projects"
        className=" dark:bg-dark_bg bg-white transition-all   border-border_color border-[1px] w-[10em] md:w-[15em] flex justify-center items-center gap-2 h-14 rounded-md hover:bg-orange-400 "
      >
        <p>Latest Projects</p>
      </a>
      <div className=" flex gap-5 absolute bottom-10">
        {SocialMedia.map((elt, index) => {
          return (
            <div key={index}>
              <Link href={elt.link} target="__blank">
                {elt.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default User;
