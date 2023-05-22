import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://remote-jobs-api.p.rapidapi.com/jobs",
      params: { company: "shopify" },
      headers: {
        "X-RapidAPI-Key": "8500e40f64mshc02a472df0f1932p1bb298jsn466e0fedb8f9",
        "X-RapidAPI-Host": "remote-jobs-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setJobs(response.data?.items);
      console.log(response.data?.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <p>{}</p>
    </section>
  );
};

export default Posts;
