import { IprojectProps } from "@/type";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const projects: IprojectProps[] = [
  {
    title: "Quiz App",
    description:
      "The quiz app is an online platform that allows users to take quizzes about JavaScript. The app also provides a library of pre-made quizzes for users to take, with varying levels of difficulty and topics. The app can track user progress and provide feedback on correct and incorrect answers, as well as display a leaderboard to show the users scores. The app can be used for educational purposes, as a fun way to test knowledge, or as a marketing tool for businesses to engage with their audience.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/JoeMakuta/Quiz_App/",
    liveLink: "https://joemakuta.github.io/Quiz_App/",
  },

  {
    title: "Programiz-Pro Clone",
    description:
      "This is the clone of the official site of Programiz pro. So far, it has no functionality, this is just the design performed for learning purposes.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/JoeMakuta/Programiz-Pro",
    liveLink: "https://joemakuta.github.io/Programiz-Pro/",
  },
  {
    title: "World Weather App",
    description:
      "World Weather App is a professional and reliable application that provides accurate and up-to-date weather information for any location in the world. You can easily access city  weather and more with just a search.  Whether you are planning a trip, checking the weather for your daily commute, or simply want to stay informed, World Weather App is the best choice for you.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/JoeMakuta/Weather_api",
    liveLink: "https://weather-api-teal.vercel.app/",
  },

  {
    title: "M-Tech App Backend",
    description:
      "The M-Tech app is an professional web service for storing and management purposes. It allows the user to store and manage everything about renting.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/JoeMakuta/M-Tech",
    liveLink: "#",
  },
];

const Projects = () => {
  return (
    <section className=" dark:bg-dark_bg w-screen  flex justify-center items-center ">
      <div className=" flex justify-between gap-6 max-w-[1400px] flex-wrap w-[98vw]  p-6 border-t-[1px] py-10 dark:border-t-border_color border-t-gray-300   ">
        <h1 className=" font-bold ">Projects : </h1>
        <div className=" flex flex-col gap-4 w-full text-sm  md:w-[80%]   flex-wrap md:flex-row  ">
          {projects.map((elt, index) => {
            return (
              <div
                className=" bg-white dark:bg-inherit flex flex-col gap-2 border-[1px] dark:border-border_color  md:w-[30%] first-line:border-gray-300  hover:bg-gray-500 transition-all hover:bg-opacity-30 rounded-xl p-4 "
                key={index}
              >
                <h1 className=" font-bold ">{elt.title}</h1>
                <p className=" border-t-[1px] text-gray-500 dark:text-gray-300 border-border_color pt-2 ">
                  {elt.description.substring(0, 100) + " ..."}
                </p>
                <div className=" flex self-end gap-3 ">
                  <Link href={elt.liveLink} target="__blank">
                    <RxExternalLink
                      size={15}
                      className=" cursor-pointer text-gray-500 hover:text-gray-800 transition-all "
                    />
                  </Link>
                  <Link href={elt.githubLink} target="__blank">
                    <AiFillGithub
                      size={15}
                      className="cursor-pointer text-gray-500 hover:text-gray-800 transition-all"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
