import React from "react";
import { constants } from "../constants";

const Feature = () => {
  return (
    <section id="features">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 mb-10 space-y-12 md:flex-row md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col justify-between space-y-12 md:w-1/2 md:justify-around md:my-auto">
          <h2 className=" max-w-md text-3xl font-bold text-center md:text-4xl md:text-left ">
            {constants.feature.title}
          </h2>

          <p className=" max-w-sm text-center text-darkGrayBlue md:text-left">
            {constants.feature.description}
          </p>
        </div>
        {/* Numbered List */}
        {/* List Items */}
        <div className="md:w-1/2">
          {/* For Mobile */}
          {constants.feature.numbered_lists.map((list) => (
            <div className="flex flex-col items-start space-x-2 md:hidden">
              <div className=" flex flex-1 flex-row w-full rounded-l-full  mb-3 ">
                <div className=" text-white rounded-l-full  bg-brightRed py-2 px-3 self-baseline ">
                  {list.number}
                </div>
                <div className="text-base font-bold bg-brightRedSupLight w-full py-2 pl-1 self-baseline ">
                  {list.title}
                </div>
              </div>
              <p className="text-darkGrayBlue mb-6 text-justify">
                {list.description}
              </p>
            </div>
          ))}

          {/* Desktop options */}
          {constants.feature.numbered_lists.map((lists) => (
            <div className=" hidden md:container  md:flex md:flex-col md:space-y-2">
              <div className=" md:container md:h-10 md:flex md:flex-row md:px-4 md:py-2 text-white  md:py-1 ">
                <div className="md:rounded-l-full md:bg-brightRed md:py-1 md:px-3 md:self-baseline">
                  {" "}
                  {lists.number}
                </div>
                <div className=" md:mb-4 md:mx-3 md:text-veryDarkBlue md:text-lg md:font-bold md:self-baseline">
                  {lists.title}
                </div>
              </div>

              <div className="">
                <p className=" md:text-darkGrayBlue md:mx-4 md:mb-4 md:pr-2 md:text-justify">
                  {lists.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* End of list */}
      </div>
    </section>
  );
};

export default Feature;
