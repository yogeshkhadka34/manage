import React from "react";
import { constants } from "../constants";
import ButtonLink from "./common/ButtonLink";

const Cta = () => {
  return (
    <>
      <div className=" bg-brightRed py-10 ">
        <div className="flex flex-col container px-4 items-center gap-y-3 mx-auto justify-between md:flex-row">
          <h2 className="text-xl text-white font-bold  md:text-3xl text-center">
            {constants.cta.title}
          </h2>
          <ButtonLink
            name={constants.button_text}
            className="bg-white text-brightRed hover:bg-brightRedSupLight "
          />
        </div>
      </div>
    </>
  );
};

export default Cta;
