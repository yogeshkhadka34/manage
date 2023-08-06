import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { constants } from "../constants";
import ButtonLink from "./common/ButtonLink";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="Manage Logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 lg:flex">
          {constants.nav_items.map((item) => (
            <a href="#" className="hover:text-darkGrayBlue">
              {item}
            </a>
          ))}
        </div>
        {/* Container for Button and Hamburger */}
        <div className="flex flex-row space-x-10 items-center">
          {/* Button */}
          <div className="hidden md:block ">
            <ButtonLink
              name={constants.button_text}
              className="hidden md:block"
            />
          </div>

          {/* Mobile Menu */}
          <div className=" relative lg:hidden">
            <button onClick={() => setToggleMenu((prev) => !prev)}>
              {toggleMenu ? (
                <RiCloseLine size={27} />
              ) : (
                <RiMenu3Line size={27} />
              )}
            </button>

            {toggleMenu && (
              <div className="absolute flex flex-col items-center self-end py-8 px-24 mt-5  space-y-6 font-bol bg-white z-10 sm:w-auto sm:self-center right-6 drop-shadow-md">
                {constants.nav_items.map((item) => (
                  <a href="#" className="hover:text-darkGrayBlue">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
