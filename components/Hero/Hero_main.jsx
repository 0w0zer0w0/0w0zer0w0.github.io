import React from "react";
import Carousel from "./Carousel";

const Hero_main = () => {
  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center p-10  sm:h-screen"
    >
      <h1 className="text-5xl sm:text-9xl font-bold text-center font-oxanium leading-relaxed mb-24 ">
        Hey, I'm Juan
        <span className="text-normal  text-Accent text-nowrap">
          <p className="text-4xl sm:text-7xl">
            {"<Web Developer>"}
            <span className="blink-cursor">{"|"}</span>
          </p>
        </span>
      </h1>
      <div className="w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default Hero_main;
