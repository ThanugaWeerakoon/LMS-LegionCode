<<<<<<< HEAD
// import React from "react";
// import img1 from "../assets/cardBg.png";
// import { useNavigate } from "react-router-dom";

// function LearnMoreCard() {
//   const navigate = useNavigate();


//   const cardData = [
//     { image: img1, title: "Java", description: "Learn Java programming basics." },
//     { image: img1, title: "Python", description: "Introduction to Python programming." },
//     { image: img1, title: "JavaScript", description: "JavaScript fundamentals." },
//     { image: img1, title: "React", description: "React.js for web development." },
//   ];


//   const handleClick = (card) => {
//     navigate("/questiondetails", { state: { card } });
//   };

//   return (
//     <div className="p-5 bg-[#14192D] mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-1 cursor-pointer"
//             onClick={() => handleClick(card)}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-auto mb-2 rounded-xl"
//             />
//             <h2 className="text-center font-bold text-[18px] px-3 py-1">
//               {card.title}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LearnMoreCard;
import React from "react";
import img1 from "../assets/cardBg.png";
import { useNavigate } from "react-router-dom";

function LearnMoreCard() {
  const navigate = useNavigate();

  const cardData = [
    { image: img1, title: "Java", description: "Learn Java programming basics." },
    { image: img1, title: "Python", description: "Introduction to Python programming." },
    { image: img1, title: "JavaScript", description: "JavaScript fundamentals." },
    { image: img1, title: "React", description: "React.js for web development." },
  ];

  const handleClick = (card) => {
    navigate("/questiondetails", { state: { selectedLanguage: card.title } });
  };
=======
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
 
function LearnMoreDetails() {
  const location = useLocation();
  const { card } = location.state || {};
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
>>>>>>> d4847df88516d1af49de74aaa5192348fcd688a6

  if (!card) {
    return <p>Card details not found.</p>;
  }

  return (
<<<<<<< HEAD
    <div className="p-5 bg-[#14192D] mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-1 cursor-pointer"
            onClick={() => handleClick(card)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto mb-2 rounded-xl"
            />
            <h2 className="text-center font-bold text-[18px] px-3 py-1">
              {card.title}
            </h2>
          </div>
        ))}
=======
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
>>>>>>> d4847df88516d1af49de74aaa5192348fcd688a6
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default LearnMoreCard;
=======
export default LearnMoreDetails;
>>>>>>> d4847df88516d1af49de74aaa5192348fcd688a6
