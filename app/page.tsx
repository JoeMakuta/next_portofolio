"use client";

import Footer from "@/components/footer/footer";
import About from "@/components/home/about";
import Posts from "@/components/home/posts";
import Projects from "@/components/home/projects";
import User from "@/components/home/user";
import Menu from "@/components/menu/menu";
import Partners from "@/components/parters/parters";
import Image from "next/image";

export default function Home() {
  return (
    <Menu>
      <main className=" flex justify-center bg-[#f0f0f0] flex-col animate-background items-center dark:text-default_color dark:bg-dark_bg dark:bg-main  ">
        <User />
        <About />
        <Projects />
        <Posts />
      </main>
    </Menu>
  );
}
