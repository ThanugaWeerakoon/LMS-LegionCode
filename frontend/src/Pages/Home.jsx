import React from "react";
import hero from "../assets/homeUser.png";
import { AiOutlineSearch } from "react-icons/ai";
import LearnMoreCard from "../Components/LearnMoreCard";
import Tutorials from "../Components/Tutorials";
import Challenge from "../Components/Challenge";
import Premium from "../Components/Premium";

function Home() {
  return (
    <>
      <section
        className="h-screen"
        style={{
          background:
            "linear-gradient(to bottom right, #08192D, #113B49, #103746)",
        }}
      >
        <div className="mx-auto max-w-[1560px] px-6 lg:px-40 flex flex-col lg:flex-row items-center justify-between h-full">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-[50%] lg:mr-auto">
            <h1 className="text-white text-[35px] lg:text-[35px] font-bold uppercase font-roboto">
              Unlock Power of learning
            </h1>
            <h1 className="uppercase text-white text-[45px] lg:text-[70px] font-bold mt-4 lg:mt-2 font-roboto">
              Empower your <br /> future
            </h1>
            <div className="flexStart !items-center gap-x-4 my-5">
              <div className="relative w-full max-w-md flex items-center">
                <input
                  type="text"
                  placeholder="Search or tutorials, e.g. HTML"
                  className="w-full py-3 pl-4 pr-10 rounded-md text-gray-800 placeholder-gray-500 bg-white focus:outline-none"
                />
                <div className="absolute right-0 h-full flex items-center px-4 bg-[#08C5A3] rounded-md rounded-l-none">
                  <AiOutlineSearch className="text-white" size={25} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex items-center justify-center h-full lg:ml-auto mt-6 lg:mt-0 hidden lg:flex">
            <img
              src={hero}
              alt="hero"
              className="max-h-[75%] object-contain w-full max-w-[400px] lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <div className="bg-[#18FEF5] text-black font-bold uppercase w-full flex flex-wrap justify-evenly p-4 gap-4">
        <span className="text-[22px] font-roboto">React</span>
        <span className="text-[22px] font-roboto">Java</span>
        <span className="text-[22px] font-roboto">Python</span>
        <span className="text-[22px] font-roboto">JavaScript</span>
        <span className="text-[22px] font-roboto">HTML</span>
        <span className="text-[22px] font-roboto">CSS</span>
        <span className="text-[22px] font-roboto">Tailwind</span>
      </div>

      {/* Learn more section */}
      <div className="bg-[#14192D] p-10">
        {/* First Row: Learn More Title and Divider Line */}
        <div className="flex items-center mb-6">
          <h1 className="text-white font-normal font-roboto text-[30px] mr-4">
            Learn more
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        {/* Learn More Cards */}
        <div className="flex flex-wrap justify-between">
          <LearnMoreCard />
        </div>

        <div className="flex items-center mb-6">
          <h1 className="text-white font-normal font-roboto text-[30px] mr-4">
            Latest Tutorials
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        {/* Tutorials Cards */}
        <div className="flex flex-wrap justify-between">
          <Tutorials />
        </div>

        <div className="flex items-center mb-6">
          <h1 className="text-white font-normal font-roboto text-[30px] mr-4">
            Latest Challenge
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        {/* latest challenge Cards */}
        <div className="flex flex-wrap justify-between">
          <Challenge />
        </div>
      </div>

      <div className="">
        <Premium />
      </div>
    </>
  );
}

export default Home;
