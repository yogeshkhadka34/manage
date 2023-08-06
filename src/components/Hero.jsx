import React from "react";
import { constants } from "../constants";
import ButtonLink from "./common/ButtonLink";
import Illustration from "../assets/illustration-intro.svg";
import Background from "../assets/bg-tablet-pattern.svg";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative overflow-hidden ">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse items-center justify-center  px-6 mx-auto mt-6 space-y-0 md:mt-10 md:flex-row md:mb-10 lg:mb-40">
          {/* Left Item */}
          <div className="flex flex-col justify-center mb-30 space-y-12 md:space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left xl:max-w-[unset]">
              {constants.hero.title}
            </h1>
            <p className="max-w-sm text-center text-darkGrayBlue md:text-left">
              {constants.hero.description}
            </p>
            <div className="flex justify-center md:justify-start">
              <ButtonLink name={constants.button_text} />
            </div>
          </div>
          {/* Right Item Image */}
          <div className="h-68 md:w-1/2">
            <img
              src={Illustration}
              alt=""
              className="object-scale-down w-full h-68 md:h-80 lg:h-96"
            />
          </div>
        </div>

        <img
          src={Background}
          alt=""
          className="absolute -z-10 top-0 right-0 -translate-y-[50%] md:-translate-y-[40%] "
        />
      </section>
    </>
  );
};

export default Hero;
