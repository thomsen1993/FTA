import React from "react";

const Error = () => {
  return (
    <div className="fixed top-0 left-0 bg-black/50 w-full h-screen">
      <div className="bg-white w-max mx-auto mt-20 p-10 rounded-md border border-green-400">
        <h2>Something went wrong...</h2>
      </div>
    </div>
  );
};

export default Error;
