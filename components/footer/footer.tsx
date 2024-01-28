"use client";

import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { SocialMedia } from "../home/user";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-[100vw] dark:text-white  bottom-0  dark:bg-my_gray">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex justify-center items-center ">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe my newsletter to stay update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-my_gray dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          {/* <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Our Philosophy
              </a>
            </div>
          </div> */}

          {/* <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Finance & Insurance
              </a>
            </div>
          </div> */}
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <a href="#">
            <div className=" flex justify-center items-center gap-3 ">
              <a
                href="mailto:makutajosue@gmail.com"
                className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color cursor-pointer "
              >
                <AiOutlineMail />
              </a>
              <div className=" font-bold text-sm md:text-base">
                Josué Makuta
              </div>
            </div>
          </a>

          <div className="flex mx-2">
            <div className=" flex gap-2 md:gap-5">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
