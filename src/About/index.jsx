import React from "react";
import { Note } from "./about";

const About = () => {
  return (
    <div className="w-full sm:h-screen h-full bg-bg3 py-8">
      <div
        id="about"
        className="flex scroll-mt-12 flex-col gap-4 mx-auto justify-center w-[90%] items-center "
      >
        <h2 className="phead text-[18px] sm:text-[24px] ">About Me</h2>
        <p className="text text-[16px] sm:text-[18px] leading-6">{Note}</p>
      </div>
    </div>
  );
};

export default About;
