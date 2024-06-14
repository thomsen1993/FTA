"use client";

import React, { useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

import Link from "next/link";

import Image from "next/image";
import logo from "../../public/logo/logo.png";
import Card from "./Card";

import { FaStar } from "react-icons/fa";

const Navbar = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (search.length <= 0) {
      setInfo(false);
    } else {
      makeRequest("http://localhost:5099/tours/soeg/" + search, "GET", null);
      setInfo(true);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const nav = [
    { link: "Om os", href: "#about" },
    { link: "Produkter", href: "#product" },
    { link: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 bg-neutral-800 py-3 overflow-hidden">
      <div className="wrapper flex justify-between items-center">
        <div className=" flex items-center gap-5">
          <Image src={logo} alt="FTA logo" width={150}></Image>
          <ul className="flex gap-5 text-neutral-400 list-none">
            {nav.map((event, index) => (
              <li key={index}>
                <Link href={event.href}>{event.link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-1 px-2 w-44 rounded-md text-sm"
          />
          <button
            type="submit"
            className="text-neutral-400 border border-neutral-400 rounded-md text-sm ml-5 py-1 px-2"
          >
            Search
          </button>
        </form>
      </div>
      {info && (
        <div className="wrapper infoDown my-10 grid md:grid-cols-2 gap-5 text-white max-h-[500px] overflow-y-scroll">
          {data &&
            data.map((event:any) => (
              <div key={event._id} className="">
                <img
                  src={"http://localhost:5099/images/tours/" + event.coverimage}
                  alt={event.title}
                  width={220}
                  className="float-start mr-3"
                />
                <div className="mb-2">
                  <p>{event.title}</p>
                  <span className="flex gap-2 text-red-700">
                    {Array.from({ length: event.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>
                <p className="underline">
                  {new Date(event.traveldate).toLocaleDateString("da-DK", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{event.teaser}</p>
              </div>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
