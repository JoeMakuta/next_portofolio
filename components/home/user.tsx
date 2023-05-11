import Image from "next/image";

const User = () => {
  return (
    <section className=" max-w-[1500px] ">
      <div className="overflow-hidden w-32 h-32 rounded-full ">
        <Image
          src="/asserts/profil_pic.png"
          width={400}
          height={400}
          alt="Profil image"
        />
      </div>
      <p>
        Hello <span className=" ">👋</span>, {"i'm Josh !"}
      </p>
    </section>
  );
};

export default User;
