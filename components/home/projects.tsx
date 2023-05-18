const projects = [
  {
    title: "Quiz App",
    description:
      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines.",
    images: ["link1", "link2", "link3"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Quiz App",
    description:
      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines.",
    images: ["link1", "link2", "link3"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Quiz App",
    description:
      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines.",
    images: ["link1", "link2", "link3"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Quiz App",
    description:
      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines.",
    images: ["link1", "link2", "link3"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Quiz App",
    description:
      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines.",
    images: ["link1", "link2", "link3"],
    githubLink: "#",
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
                className=" bg-white dark:bg-inherit flex flex-col gap-2 border-[1px] dark:border-border_color border-gray-300 md:w-[30%] cursor-pointer hover:bg-gray-500 transition-all hover:bg-opacity-30 rounded-xl p-4 "
                key={index}
              >
                <h1 className=" font-bold ">{elt.title}</h1>
                <p className=" border-t-[1px] text-gray-500 dark:text-gray-300 border-border_color pt-2 ">
                  {elt.description.substring(0, 100) + " ..."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
