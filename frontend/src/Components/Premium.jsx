import React from 'react'
import premiumBg from "../assets/premium.png";

function Premium() {
  return (
    <div
      className="h-screen"
      style={{
        background: "linear-gradient(to bottom, #1C2546, #4D3E99, #834EAA)",
      }}
    >
      <div className="mx-auto max-w-[1560px] px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:max-w-[60%] lg:mr-auto">
          <h1 className="text-white text-[45px] lg:text-[60px] font-bold uppercase font-roboto">
            Unlock Your Power With
          </h1>
          <h1 className="uppercase text-white text-[45px] lg:text-[70px] font-bold mt-4 lg:mt-2 font-roboto">
            Premium Access <br />
          </h1>
          <p className="text-white text-[25px] mt-5">
            Get Verified Certificates Premium Content
            <br /> and Exclusive update And More ...
          </p>
          <div className="flexStart !items-center gap-x-4 my-5">
            <div className="relative w-full max-w-md flex items-center">
              <button className="bg-white text-[#525FE0] rounded-xl px-6 py-3 hover:bg-gray-100 transition duration-200 font-bold uppercase text-[20px] sm:text-center sm:items-center">
                Get 1 Year Pro
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex items-center justify-center h-full lg:ml-auto mt-6 lg:mt-0 hidden lg:flex">
          <img
            src={premiumBg}
            alt="primium"
            className="max-h-[75%] object-contain w-full max-w-[400px] lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Premium
