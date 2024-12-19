import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
 
function LearnMoreDetails() {
  const location = useLocation();
  const { card } = location.state || {};
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!card) {
    return <p>Card details not found.</p>;
  }

  return (
    <div className="bg-[#14192D] min-h-screen flex flex-col items-center">
      <div className="mb-4 w-full">
        <h2 className="text-center font-bold text-[50px] text-white uppercase">
          {card.title}
        </h2>
      </div>

      <div className="w-full px-20">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[550px] mb-4 rounded-xl border-2 border-white"
        />
      </div>

      <div className="flex justify-center space-x-12 mb-6 w-full">
        <button
          onClick={() => setActiveTab("description")}
          className={`text-white font-semibold text-lg py-2 ${
            activeTab === "description" ? "border-b-2 border-white" : ""
          }`}
        >
          Description
        </button>
      </div>

      <div className="bg-gradient-to-br from-[#08192D] to-[#103746] w-full p-10">
        {activeTab === "description" && (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p>{card.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearnMoreDetails;