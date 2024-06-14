"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const Contact = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5099/contactinformation/", "GET", null);
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <section className="wrapper pt-20" id="contact">
      <h2>Kontakt</h2>
      <div className="grid grid-cols-2 my-20">
        <div>
          <h3 className="text-2xl font-bold">Kontakt Information</h3>
          <p className="font-bold">{data.company}</p>
          <p>{data.address}</p>
          <p>{data.zipcity}</p>
          <p>{data.country}</p>
          <ul>
            <li>
              <a href={data.phone}>{data.phone}</a>
            </li>
            <li>
              <a href={data.email}>{data.email}</a>
            </li>
          </ul>
        </div>
        <form>
          <h3 className="text-2xl font-bold">Skriv til os</h3>
          {form.map((event) => (
            <input
              key={event.id}
              type={event.type}
              name={event.name}
              id={event.name}
              placeholder={event.placeholder}
              className="w-full mb-5 p-2"
            />
          ))}
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Besked"
            className="w-full mb-5 p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-red-700 rounded-md text-white text-sm py-2 px-3"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
const form = [
  { id: "name", placeholder: "Navn", type: "text" },
  { id: "company", placeholder: "Firma/Organization", type: "text" },
  { id: "email", placeholder: "Email Addresse", type: "email" },
  { id: "phone", placeholder: "Telefon", type: "tel" },
];
export default Contact;
