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
import { motion } from "framer-motion";

const SocialMedia = [
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

const childrenAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const User = () => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className=" max-w-[1400px]   h-screen max-h-[1020px] flex justify-center items-center flex-col gap-5 "
    >
      <section className=" animate-text bg-gradient-to-r absolute top-0  z-0 from-gray-800 dark:from-slate-400 dark:to-orange-400  to-orange-400 w-screen h-[30%] md:h-[35%]"></section>
      <motion.div
        variants={childrenAnimation}
        className=" flex justify-center z-10 items-center gap-2 flex-col "
      >
        <div className="overflow-hidden w-[7em] h-[7em] rounded-full ">
          <Image
            src="/asserts/profil_pic1.jpg"
            width={400}
            height={400}
            alt="Profil image"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello, {"i'm Josh !"} <span className=" ">👋</span>
        </motion.p>
      </motion.div>
      <motion.h1
        variants={childrenAnimation}
        className=" text-[2rem] md:text-[2.5rem] w-[85vw] lg:w-[45vw] bg-clip-text bg-gradient-to-r text-transparent from-gray-800 dark:from-white dark:to-my_orange  to-my_orange animate-text leading-tight text-center font-bold  "
      >
        In order to be irreplaceable, one must always be different.
      </motion.h1>
      <motion.button
        variants={childrenAnimation}
        className=" dark:bg-dark_bg bg-white transition-all hover:bg-orange-400 hover:border-none  border-border_color border-[1px] w-[10em] md:w-[15em] flex justify-center items-center gap-2 h-14 rounded-md "
      >
        <p>Latest Projects</p>
      </motion.button>
      <motion.div
        variants={childrenAnimation}
        className=" flex gap-5 absolute bottom-10"
      >
        {SocialMedia.map((elt, index) => {
          return (
            <div key={index}>
              <Link href={elt.link} target="__blank">
                {elt.icon}
              </Link>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default User;
