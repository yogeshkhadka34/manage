import React from "react";
import { constants } from "../constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4">
      <div className="max-w-6xl px-5  mt-32 text-center">
        <h2 className="text-3xl font-bold text-center">
          {constants.testimonial.title}
        </h2>
      </div>
      {/* Flex Container */}
      <div className=" flex flex-col gap-6 mt-10 mb-10 md:flex-row">
        {/* Testimonials 1 */}
        {constants.testimonial.lists.map((list) => (
          <div className="flex flex-col items-center space-y-2 bg-brightRedSupLight rounded-md mt-12">
            <img src={list.dp} alt="" className="w-20 h-20 -mt-10" />
            <h3 className="text-lg font-bold">{list.name}</h3>
            <p className="text-center p-3">{list.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
