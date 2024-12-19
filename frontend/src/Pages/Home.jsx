
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
        <div className="mx-auto max-w-[1560px] px-4 md:px-6 lg:px-40 flex flex-col lg:flex-row items-center justify-between h-full">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:max-w-[50%] lg:mr-auto">
            <h1 className="text-white text-[28px] md:text-[35px] font-bold uppercase font-roboto">
              Unlock Power of learning
            </h1>
            <h1 className="uppercase text-white text-[35px] md:text-[50px] lg:text-[70px] font-bold mt-4 lg:mt-2 font-roboto">
              Empower your <br /> future
            </h1>
            <div className="flex justify-center lg:justify-start items-center gap-x-4 my-5">
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
          <div className="flex items-center justify-center h-full mt-6 lg:mt-0">
            <img
              src={hero}
              alt="hero"
              className="w-[70%] md:max-w-[400px] lg:w-auto lg:max-w-none max-h-[75%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <div className="bg-[#18FEF5] text-black font-bold uppercase w-full flex flex-wrap justify-center md:justify-evenly p-4 gap-4">
        {["React", "Java", "Python", "JavaScript", "HTML", "CSS", "Tailwind"].map(
          (tag) => (
            <span
              key={tag}
              className="text-[18px] md:text-[22px] font-roboto"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Learn more section */}
      <div className="bg-[#14192D] p-6 md:p-10">
        {/* Learn More Title and Divider */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <h1 className="text-white font-normal font-roboto text-[25px] md:text-[30px] mb-4 md:mb-0 md:mr-4">
            Learn more
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        {/* Learn More Cards */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <LearnMoreCard />
        </div>

        {/* Latest Tutorials */}
        <div className="flex flex-col md:flex-row items-center mt-10 mb-6">
          <h1 className="text-white font-normal font-roboto text-[25px] md:text-[30px] mb-4 md:mb-0 md:mr-4">
            Latest Tutorials
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <Tutorials />
        </div>

        {/* Latest Challenge */}
        <div className="flex flex-col md:flex-row items-center mt-10 mb-6">
          <h1 className="text-white font-normal font-roboto text-[25px] md:text-[30px] mb-4 md:mb-0 md:mr-4">
            Latest Challenge
          </h1>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <Challenge />
        </div>
      </div>

      {/* Premium Section */}
      <div className="bg-[#101622] p-6 md:p-10">
        <Premium />
      </div>
    </>
  );
}

export default Home;
