import React from "react";
import { FaStar } from "react-icons/fa";

interface CardProps {
  src: string;
  title: string;
  stars: number;
  traveldate: string;
  text: string;
  openPopup: () => void;
}

const Card: React.FC<CardProps> = ({
  src,
  title,
  stars,
  traveldate,
  text,
  openPopup,
}) => {
  const renderStars = () => {
    return Array.from({ length: stars }, (_, index) => <FaStar key={index} />);
  };

  const formattedDate = new Date(traveldate).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-md overflow-hidden grid grid-rows-[auto_1fr]">
      <img src={src} alt={title} />
      <div className="px-4 py-5 grid grid-rows-[auto_auto_1fr_auto]">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">{title}</h3>
          <div className="flex text-red-700">{renderStars()}</div>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: formattedDate }}
          className="text-neutral-400 text-sm my-3"
        ></p>
        <p>{text}</p>
        <button
          className="bg-red-700 rounded-md text-white text-sm w-max py-2 px-3 mt-3"
          onClick={openPopup}
        >
          Læs mere
        </button>
      </div>
    </div>
  );
};

export default Card;
