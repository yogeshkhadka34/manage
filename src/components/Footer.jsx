import React from "react";
import WhiteLogo from "../assets/logo-white.svg";
import { constants } from "../constants";
import ButtonLink from "./common/ButtonLink";

const Footer = () => {
  return (
    <section id="footer" className="bg-darkBlue">
      <div className="container mx-auto px-4 flex  flex-col-reverse justify-between items-center gap-8 py-10  md:flex-row">
        {/* Logo and Icons */}
        <div className="flex flex-col gap-y-12">
          <img src={WhiteLogo} alt="" className="w-28" />
          <div className="flex flex-row gap-2">
            {constants.footer.social_icons.map((icon) => (
              <img src={icon} alt="" className="w-6" />
            ))}
          </div>
        </div>
        {/* Footer Links */}
        <div className="hidden text-white gap-x-20 flex-row justify-between md:flex ">
          <ul>
            {constants.footer.footer_primary_links.map((link) => (
              <li>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <ul>
            {constants.footer.footer_secondary_links.map((link) => (
              <li>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Form and Copyright */}
        <div className="flex flex-col gap-y-12">
          <div className="flex items-center">
            <input
              className="w-full rounded-full px-3 py-1"
              placeholder="Updated in your Inbox"
            />{" "}
            <ButtonLink name="Go" className="py-1 mx-2" />
          </div>
          <div className="hidden  items-center text-white md:flex ">
            {constants.footer.copyright}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
