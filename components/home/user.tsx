import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

const User = () => {
  return (
    <section className=" max-w-[1500px] fixed top-0  h-screen flex justify-center items-center flex-col gap-5 ">
      <div className=" flex justify-center items-center gap-2 flex-col ">
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
      <button className="hover:text-dark_bg transition-all hover:bg-blue-400 hover:border-none  border-border_color border-[1px] w-[10em] md:w-[15em] flex justify-center items-center gap-2 h-14 rounded-md ">
        <p>Latest Projects</p>
        {/* <TbExternalLink size={20} color="#eee" /> */}
      </button>
    </section>
  );
};

export default User;
