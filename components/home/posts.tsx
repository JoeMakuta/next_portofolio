import { useEffect, useState } from "react";
import axios from "axios";
import { IapiResponseProps } from "@/type";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

const PostLoader = () => {
  return (
    <div className="py-2 rounded  w-60 sm:w-[28em] animate-pulse dark:bg-my_gray bg-white">
      <div className="flex p-2 space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-900 bg-gray-200"></div>
        <div className="flex-1 py-2 space-y-2">
          <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
          <div className="w-5/6 h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        </div>
      </div>
      <div className="p-4 space-y-2 sm:px-8">
        <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        <div className="w-3/4 h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
      </div>
    </div>
  );
};

const Posts = () => {
  const [jobs, setJobs] = useState<IapiResponseProps>();
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://himalayas.app/jobs/api?limit=50&offset=10",
    };

    try {
      setLoading(true);
      const response: { data: IapiResponseProps } = await axios.request(
        options
      );
      console.log(response.data);
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className=" dark:bg-dark_bg w-screen   flex flex-col justify-center items-center p-6 border-t-[1px] py-10 dark:border-t-border_color border-t-gray-300 ">
      <h1 className=" font-bold max-w-[1400px] ">Find remote jobs</h1>
      <div className=" dark:myCrool myCrool1 flex justify-between gap-6  overflow-y-hidden   flex-wrap w-[100vw] md:w-[98vw]  p-6">
        <div className=" flex gap-4  ">
          {loading ? (
            <div className="flex justify-between items-center gap-3">
              <PostLoader />
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </div>
          ) : (
            jobs?.jobs.map((elt, index) => {
              return (
                <div
                  className=" flex flex-col box-border w-[25em]  gap-3 max-h-[13rem] p-4 justify-between rounded-xl dark:bg-my_gray bg-white "
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
                    <div className=" overflow-ellipsis overflow-hidden w-full ">
                      <p className="font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
                        {elt.title}
                      </p>
                      <div className=" flex text-sm gap-3 ">
                        <h1 className=" text-sm ">{elt.companyName}</h1>
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-2 text-sm flex-col ">
                    <p>Location : Remote</p>
                    <h1 className="text-sm">
                      {elt.excerpt.substring(0, 80)} ...
                    </h1>
                  </div>
                  <Link
                    className="w-[30%] py-2 px-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 transform  focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                    href={elt.applicationLink}
                    target="__blank"
                  >
                    Apply
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;
