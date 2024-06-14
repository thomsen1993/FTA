import TravelDB from "@/components/dbsections/TravelDB";
import React from "react";

const page = () => {
  return (
    <main className="wrapper">
      <h2 className="rounded-b-md rounded-t-none">Dashboard FTA</h2>
      <TravelDB />
    </main>
  );
};

export default page;
