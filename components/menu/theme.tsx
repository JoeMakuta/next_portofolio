import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = (themeToApply: "light" | "dark" | "system") => {
    setTheme(themeToApply);
  };
  return (
    <div className="flex w-[3rem] gap-2  transition-all justify-center items-center  z-50 ">
      {theme == "dark" && (
        <BsSunFill
          size={20}
          className=" cursor-pointer hover:scale-110 transition-all"
          onClick={() => handleTheme("light")}
        />
      )}
      {theme == "light" && (
        <RiMoonClearFill
          size={20}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={() => handleTheme("dark")}
        />
      )}
    </div>
  );
};

export default Theme;
