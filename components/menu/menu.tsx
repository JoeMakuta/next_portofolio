import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const data = [
  {
    name: "LinkedIn",
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

const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <nav className=" flex flex-col justify-center items-center ">
        <div className="max-w-[1500px] px-7 2xl:px-0 w-full flex justify-between  py-5 items-center border-b-[1px] border-b-[#575757] ">
          <div className=" flex justify-center items-center gap-3 ">
            <div className=" flex justify-center items-center w-10 h-10 rounded-full border-[1px] border-default_color">
              <AiOutlineMail />
            </div>
            <div className=" font-bold ">Josué Makuta</div>
          </div>
          <div className="hidden sm:flex gap-4 ">
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
