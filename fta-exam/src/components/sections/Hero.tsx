import React from "react";

import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import heroPic from "../../../public/logo/gero.png";

import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <header className="">
      <Image
        src={logo}
        alt="FTA logo"
        width={150}
        className="mt-10 ml-5"
      ></Image>
      <div className="grid md:grid-cols-3 gap-5 wrapper my-20">
        <p className="text-[#ed0000] text-3xl font-bold md:text-end text-center my-5 md:my-auto">
          Events
        </p>
        <Image
          src={heroPic}
          alt="FTA logo"
          className="max-w-[300px] md:w-full mx-auto"
        ></Image>
        <p className="text-[#ed0000] text-3xl md:text-start text-center font-bold my-5 md:my-auto">
          Travels
        </p>
      </div>
      <FaArrowDownLong className="mx-auto text-3xl animate-bounce" />
    </header>
  );
};

export default Hero;
