"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

import { FaStar } from "react-icons/fa";

import HoverEditer from "@/components/HoverEditer";

const TravelDB = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5099/tours", "GET");
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!data) return null;
  return (
    <section className="my-5 h-[550px] overflow-hidden relative">
      <h3 className="text-3xl font-bold bg-white w-max mx-auto rounded-t-md border-x border-t translate-y-[1px] border-neutral-300 px-2 py-1">Rejsemål</h3>
      <div className="border border-neutral-300 rounded-md bg-white shadow-md mb-5 p-3">
        {data.map((title: any) => (
          <button
            className="border border-neutral-300 rounded-md bg-neutral-100 hover:text-white hover:bg-neutral-700 transition py-1 px-2 mr-3"
            key={title._id}
          >
            {title.title}
          </button>
        ))}
      </div>
      {data.map((event: any) => (
        <div className="border border-neutral-300 rounded-md shadow-md bg-white my-5 py-5 px-5">
          <HoverEditer>
            <h4 className="text-xl font-bold text-center">{event.title}</h4>
          </HoverEditer>
          <h5 className="font-bold">Teaser: </h5>
          <HoverEditer>
            <p>{event.teaser}</p>
          </HoverEditer>
          <h5 className="font-bold">Indhold: </h5>
          <HoverEditer>
            <div dangerouslySetInnerHTML={{ __html: event.content }}></div>
          </HoverEditer>
          <h5 className="font-bold">Room type: </h5>
          <HoverEditer>
            <div dangerouslySetInnerHTML={{ __html: event.roomtype }}></div>
          </HoverEditer>
          <HoverEditer>
            <div className="flex justify-center gap-5 text-red-700">
              {Array.from({ length: event.rating }, (_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </HoverEditer>
          <HoverEditer>
            <p>
              {new Date(event.traveldate).toLocaleDateString("da-DK", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </HoverEditer>
        </div>
      ))}
      <button className="absolute bottom-0 w-full bg-gradient-to-t from-neutral-200 via-neutral-200/50 to-transparent pt-5">Læs mere</button>
    </section>
  );
};

export default TravelDB;
