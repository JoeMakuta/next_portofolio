import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

const SocialMedia = [
  {
    label: "Twitter",
    icon: <AiFillTwitterCircle size={20} />,
    link: "",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    link: "",
  },
  {
    label: "Github",
    icon: <AiFillGithub size={20} />,
    link: "",
  },
];

const User = () => {
  return (
    <section className=" max-w-[1400px]   h-screen  flex justify-center items-center flex-col gap-5 ">
      <section className=" animate-text bg-gradient-to-r absolute top-0 z-0 from-slate-400 to-orange-400  w-screen h-[35vh]"></section>
      <div className=" flex justify-center z-10 items-center gap-2 flex-col ">
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
      <h1 className=" text-[2rem] md:text-[2.5rem] w-[85vw] lg:w-[45vw] bg-clip-text bg-gradient-to-r text-transparent from-white to-my_orange animate-text leading-tight text-center font-bold  ">
        In order to be irreplaceable, one must always be different.
      </h1>
      <button className="hover:text-dark_bg bg-dark_bg transition-all hover:bg-blue-400 hover:border-none  border-border_color border-[1px] w-[10em] md:w-[15em] flex justify-center items-center gap-2 h-14 rounded-md ">
        <p>Latest Projects</p>
      </button>
      <div className=" flex gap-5 absolute bottom-10">
        {SocialMedia.map((elt, index) => {
          return (
            <div key={index}>
              <Link href={elt.link}>{elt.icon}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default User;
