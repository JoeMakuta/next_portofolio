import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

const Theme = ({
  setShowMenu,
}: {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = (themeToApply: "light" | "dark" | "system") => {
    setTheme(themeToApply);
    setShowMenu(false);
  };

  return (
    <div className="flex w-[3rem] gap-2  transition-all justify-center items-center  z-50 ">
      {/* {theme == "dark" && ( */}

      {/* )} */}
      {/* {theme == "light" && ( */}
      <RiMoonClearFill
        title="Light theme"
        size={20}
        className="cursor-pointer hover:scale-110 transition-all"
        onClick={() => handleTheme("dark")}
      />
      <BsSunFill
        title="Light theme"
        size={20}
        className=" cursor-pointer hover:scale-110 transition-all"
        onClick={() => handleTheme("light")}
      />

      {/* )} */}
    </div>
  );
};

export default Theme;
