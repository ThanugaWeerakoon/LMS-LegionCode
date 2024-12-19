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
    navigate("/questiondetails", { state: { card } });
  };

  return (
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
      </div>
    </div>
  );
}

export default LearnMoreCard;