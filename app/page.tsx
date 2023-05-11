import User from "@/components/home/user";
import Menu from "@/components/menu/menu";
import Image from "next/image";

export default function Home() {
  return (
    <Menu>
      <main className=" flex justify-center items-start ">
        <User />
      </main>
    </Menu>
  );
}
