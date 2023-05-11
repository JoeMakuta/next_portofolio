import { AiOutlineMail } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";

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
];

const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="  ">
      <nav className=" flex flex-col w-screen fixed top-0 justify-center bg-dark_bg items-center ">
        <div className="max-w-[1500px]  px-7 2xl:px-0 w-full bg-dark_bg flex justify-between  py-5 items-center border-b-[1px] border-b-border_color ">
          <div className=" flex justify-center items-center gap-3 ">
            <div className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color">
              <AiOutlineMail />
            </div>
            <div className=" font-bold text-sm md:text-base">Josué Makuta</div>
          </div>
          <div className=" flex md:hidden ">
            <RiMenu2Line size={23} />
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
      {children}
    </main>
  );
};

export default Menu;
