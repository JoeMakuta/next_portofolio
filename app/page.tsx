import Footer from "@/components/footer/footer";
import About from "@/components/home/about";
import User from "@/components/home/user";
import Menu from "@/components/menu/menu";
import Partners from "@/components/parters/parters";
import Image from "next/image";

export default function Home() {
  return (
    <Menu>
      <main className=" flex justify-center flex-col animate-background items-center bg-main  ">
        <User />
        <About />
      </main>
    </Menu>
  );
}
