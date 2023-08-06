import React from "react";
import { constants } from "../constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4 md:mt-10">
      <div className="max-w-6xl px-5   text-center mt-20 mb-20 md:mt-32">
        <h2 className="text-3xl font-bold text-center">
          {constants.testimonial.title}
        </h2>
      </div>
      {/* Flex Container */}
      <div className=" flex flex-col gap-12 mb-20 md:py-10  md:mt-20  md:flex-row">
        {/* Testimonials 1 */}
        {constants.testimonial.lists.map((list) => (
          <div className="flex flex-col items-center space-y-2 bg-brightRedSupLight rounded-md mt-8 md:px-3">
            <img src={list.dp} alt="" className="w-20 h-20 -mt-10" />
            <h3 className="text-lg font-bold md:py-3">{list.name}</h3>
            <p className="text-center p-3">{list.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
