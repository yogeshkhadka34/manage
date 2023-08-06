import React from "react";
import clsxm from "../../utils/clsxm";

const ButtonLink = (props) => {
  return (
    <a
      href=""
      className={clsxm([
        "p-3 inline-block  px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight",
        props.className,
      ])}
    >
      {props.name}
    </a>
  );
};

export default ButtonLink;
