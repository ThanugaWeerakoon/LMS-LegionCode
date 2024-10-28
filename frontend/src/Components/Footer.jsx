import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#14192D] text-[#8695BF] body-font font-roboto">
      <div className="px-5 py-10">
        <div className="flex flex-wrap md:flex-nowrap justify-between text-center md:text-left">
          {/* Logo and Description */}
          <div className="lg:w-1/5 md:w-1/3 w-full px-4 font-roboto">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm flex items-center">
              <img className="w-20 h-20 px-1" src={logo} alt="Logo" />
            </h2>
            <p>
              Start your day with the spirit of exercising and you will get many
              very important benefits.
            </p>

            <div className="flex space-x-3 mt-4">
              <div className="bg-white text-black rounded-full p-2">
                <FaFacebookF className="w-5 h-5" />
              </div>
              <div className="bg-white text-black rounded-full p-2">
                <FaTwitter className="w-5 h-5" />
              </div>
              <div className="bg-white text-black rounded-full p-2">
                <RiInstagramFill className="w-5 h-5" />
              </div>
              <div className="bg-white text-black rounded-full p-2">
                <FaPinterestP className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-1 flex-wrap justify-evenly gap-6 mt-4 md:mt-0">
            {["Course", "Tutorials", "Playground", "Challenge"].map(
              (section) => (
                <div key={section} className="text-left cursor-pointer">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
                    {section}
                  </h2>
                  <nav className="list-none">
                    <ul className="space-y-1">
                      {[
                        "Java",
                        "Python",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "React",
                        "Tailwind CSS",
                      ].map((link) => (
                        <li key={link}>
                          <a href="#" className="hover:text-white">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-[13px] text-white items-center justify-center flex py-3 font-normal">
          Copyright © 2024&nbsp;{" "}
          <span className="text-[#0090FF]"> Legion Code&nbsp; </span>{" "}
          Corporation. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
