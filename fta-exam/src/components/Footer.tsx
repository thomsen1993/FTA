"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5099/footer/", "GET", null);
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!data) return null;
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-5">
      <p className="text-center">{data.footertext}</p>
    </footer>
  );
};

export default Footer;
