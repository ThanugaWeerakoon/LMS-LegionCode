import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tutorials from "../Components/Tutorials";
import LearnMoreCard from "../Components/LearnMoreCard";
import Challenge from "../Components/Challenge";

function LearnMoreDetails() {
  const location = useLocation();
  const { card } = location.state || {};
  const [activeTab, setActiveTab] = useState("description");

  if (!card) {
    return <p>Card details not found.</p>;
  }

  const { noBackground } = location.state || {}; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#14192D] min-h-screen flex flex-col items-center">
      {/* Title Container */}
      <div className="mb-4 w-full">
        <h2 className="text-center font-bold text-[50px] text-white uppercase">
          {card.title}
        </h2>
      </div>

      {/* Image Container */}
      <div className="w-full px-20">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[550px] mb-4 rounded-xl border-2 border-white "
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-12 mb-6 w-full">
        <button
          onClick={() => setActiveTab("description")}
          className={`text-white font-semibold text-lg  py-2 ${
            activeTab === "description" ? "border-b-2 border-white" : ""
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("start")}
          className={`text-white font-semibold text-lg  py-2 ${
            activeTab === "start" ? "border-b-2 border-white" : ""
          }`}
        >
          Start
        </button>
      </div>

      {/* Slider Content */}
      <div className="bg-gradient-to-br from-[#08192D] to-[#103746] w-full h-[900px] flex  p-10">
        {activeTab === "description" ? (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">What Will I Learn</h3>
            <ul className="list-disc pl-5">
              <li>How do we communicate with the computer.</li>
              <li>How to give instructions to a Computer to perform a task.</li>
              <li>How to help a computer make decisions.</li>
              <li>Common mistakes made by a programmer.</li>
              <li>What is a programming language.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-4">
              Who is the target audience
            </h3>
            <ul className="list-disc pl-5">
              <li>Those who want to start a career in Computer programming.</li>
              <li>
                This is the best suitable course for those who want to know how
                a computer performs a task in a simple and easy way.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-4">Benefit</h3>
            <ul className="list-disc pl-5">
              <li>
                Get a clear understanding of how a computer performs a task.
              </li>
              <li>
                The course is made so simple that after doing this course you
                won't find it difficult to start with any programming language.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-4">Salary</h3>
            <ul className="list-disc pl-5">
              <li>25,000 USD per year</li>
            </ul>
          </div>
        ) : (
          <div className="h-[600px]">
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

            {/* Latest Challenge Cards */}
            <div className="flex flex-wrap justify-between">
              <Challenge />
            </div>
          </div>
        )}
      </div>

      <div className="p-10">
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
      </div>
    </div>
  );
}

export default LearnMoreDetails;
