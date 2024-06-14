"use client"

import React, { useEffect } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

interface Data {
  content: string;
  image: string;
}

const About: React.FC = () => {
  const { data, isLoading, error, makeRequest } = useRequestData<Data>();

  useEffect(() => {
    makeRequest("http://localhost:5099/about/", "GET", null);
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <section className="wrapper pt-32" id="about">
      <h2>Om os</h2>
      <div className="grid grid-cols-3 gap-5 mt-20">
        <p
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="col-span-2"
        ></p>
        <img
          src={"http://localhost:5099/images/about/" + data.image}
          alt=""
        ></img>
      </div>
    </section>
  );
};

export default About;
