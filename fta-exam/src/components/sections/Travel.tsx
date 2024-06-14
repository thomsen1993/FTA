"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

import Card from "../Card";
import MainCard from "../MainCard";

const Travel = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [popup, setPopup] = useState<string | null>(null);

  useEffect(() => {
    makeRequest("http://localhost:5099/tours/", "GET", null);
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <section className="wrapper pt-20" id="product">
      <h2>Rejsemål</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-20">
        {data.map((card) => (
          <React.Fragment key={card._id}>
            <Card
              src={"http://localhost:5099/images/tours/" + card.coverimage}
              title={card.title}
              stars={card.rating}
              traveldate={card.traveldate}
              text={card.teaser}
              openPopup={() => setPopup(card._id)}
            />
            {popup === card._id && (
              <MainCard
                title={card.title}
                carousel={card.gallery}
                content={card.content}
                stars={card.rating}
                roomtype={card.roomtype}
                traveldate={card.traveldate}
                close={() => setPopup(null)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Travel;
