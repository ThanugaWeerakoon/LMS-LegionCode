import React, { useState } from "react";

const HowCanWeHelp = () => {
  const [settings, setSettings] = useState({
    purchaseIssue: false,
    technicalIssue: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-[#001C30] p-20 mt-0 mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        How Can We Help You?
      </h2>

      <div className="space-y-8">
        <button
          onClick={() => toggleSetting("purchaseIssue")}
          className={`w-full px-4 font-medium py-4 text-start rounded shadow ${
            settings.purchaseIssue
              ? "bg-white text-black"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {settings.purchaseIssue ? "Cancel Purchase Issue" : "Purchase Issue"}
        </button>

        <button
          onClick={() => toggleSetting("technicalIssue")}
          className={`w-full px-4 font-medium py-4 text-start rounded shadow ${
            settings.technicalIssue
              ? "bg-white text-black"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {settings.technicalIssue
            ? "Cancel Technical Issue"
            : "Technical Issue"}
        </button>
      </div>
    </div>
  );
};

export default HowCanWeHelp;
