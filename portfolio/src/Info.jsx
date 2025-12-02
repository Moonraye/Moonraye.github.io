import { useState } from "react";
import myPhoto from "/my-photo.png";
import CV from "/my-CV.pdf";
export default function Info() {
  const myData = {
    name: "Oleh Zavediia",
    status: "IT Student",
    description:
      "Hello! I am a computer science student studying at I am interested in the website development process, " +
      "so I am actively learning FrontEnd. I am looking for an opportunity to use my knowledge in real-world projects. " +
      "My goal is to get a job at an IT company where I can learn from experienced professionals and make my contribution" +
      "to the development of web products.",
  };
  return (
    <section id="info"
      className="info-section mx-10 px-6 py-12 mb-12 flex flex-col md:flex-row items-center
     bg-white dark:bg-gray-800 rounded-tl-lg shadow-xl overflow-hidden p-4 md:p-8"
    >
      <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
        <img
          src={myPhoto}
          alt="My Photo"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover 
        border-4 border-emerald-700 dark:border-emerald-500"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">{myData.name}</h1>
        <p className="text-sm md:text-xl text-emerald-700 dark:text-emerald-500 font-medium mb-4">
          {myData.status}
        </p>
        <p className="text-lg mb-6 leading-relaxed">{myData.description}</p>
        <a
          href={CV}
          className="inline-block bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg
        transition-transform transform hover:scale-105 hover:bg-emerald-700"
        >
          Open resume in PDF
        </a>
      </div>
    </section>
  );
}
