"use client";

import React, { useState } from "react";

import { MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface MainCardProps {
  title: string;
  carousel: string[];
  content: string;
  stars: number;
  roomtype: string;
  traveldate: string;
  close: () => void;
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  carousel,
  content,
  stars,
  roomtype,
  traveldate,
  close,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = () => {
    return Array.from({ length: stars }, (_, index) => <FaStar key={index} />);
  };
  const formattedDate = new Date(traveldate).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md max-h-screen overflow-y-scroll max-w-[500px] p-3">
        <div className="flex justify-between items-center border-b pb-3">
          <h4 className="text-sm font-bold">{title}</h4>
          <button onClick={close}>
            <MdClose className="text-xl" />
          </button>
        </div>
        {carousel && (
          <div className="overflow-hidden relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full z-10">
              <button
                onClick={handlePrev}
                className="text-3xl text-neutral-300 mx-5"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="text-3xl text-neutral-300 mx-5"
              >
                <IoIosArrowForward />
              </button>
            </div>
            <div
              className="flex transition-transform duration-500 ease-in-out -z-10"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {carousel.map((img, index) => (
                <img
                  key={index}
                  src={"http://localhost:5099/images/tours/" + img}
                  alt=""
                  className="object-cover h-auto w-full"
                />
              ))}
            </div>
            <div className="flex gap-2 absolute bottom-5 left-1/2 transform -translate-x-1/2 ">
              {carousel.map((_, index) => (
                <div
                  key={index}
                  className={`h-[3px] w-7 ${
                    index === currentIndex ? "border-[1px] border-black bg-neutral-400" : "bg-neutral-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        )}
        <div className="p-3 text-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex text-red-700">{renderStars()}</div>
          </div>
          <h4 className="text-lg font-bold">Du får</h4>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <h4 className="text-lg font-bold">Værelsestype</h4>
          <div dangerouslySetInnerHTML={{ __html: roomtype }}></div>
          <p
            dangerouslySetInnerHTML={{ __html: formattedDate }}
            className="text-neutral-400 text-sm my-10"
          ></p>
        </div>
        <div className="text-end border-t pt-3">
          <button
            onClick={close}
            className="text-white text-sm bg-neutral-500 px-2 py-1 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
