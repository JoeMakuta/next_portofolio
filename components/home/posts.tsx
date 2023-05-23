import { useEffect, useState } from "react";
import axios from "axios";
import { IapiResponseProps } from "@/type";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

const Posts = () => {
  const [jobs, setJobs] = useState<IapiResponseProps>();

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://himalayas.app/jobs/api?limit=50&offset=10",
    };

    try {
      const response: { data: IapiResponseProps } = await axios.request(
        options
      );
      console.log(response.data);
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className=" dark:bg-dark_bg w-screen   flex flex-col justify-center items-center p-6 border-t-[1px] py-10 dark:border-t-border_color border-t-gray-300 ">
      <h1 className=" font-bold max-w-[1400px] ">Find remote jobs</h1>
      <div className=" dark:myCrool myCrool1 flex justify-between gap-6  overflow-y-hidden  flex-wrap w-[100vw] md:w-[98vw]  p-6">
        <div className=" flex gap-4  ">
          {jobs?.jobs.map((elt, index) => {
            return (
              <div
                className=" flex flex-col w-[30em] gap-3 max-h-[13rem] p-4 rounded-md dark:bg-my_gray bg-slate-200 "
                key={index}
              >
                <div className="flex gap-2 justify-start items-center">
                  <Image
                    src={elt.companyLogo}
                    width={20}
                    height={20}
                    alt="Logo"
                    className=" w-[2rem] h-[2rem] rounded-md"
                  />
                  <div>
                    <p className="font-bold">{elt.title}</p>
                    <div className=" flex text-sm gap-3 ">
                      <h1 className=" text-sm ">{elt.companyName}</h1>
                    </div>
                  </div>
                </div>

                <div className=" flex gap-2 text-sm flex-col ">
                  <p>Location : Remote</p>
                  <h1 className="text-sm">
                    {elt.excerpt.substring(0, 100)} ...
                  </h1>
                </div>
                <Link
                  className="w-[6rem] py-2 px-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 transform  focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  href={elt.applicationLink}
                  target="__blank"
                >
                  Apply
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
