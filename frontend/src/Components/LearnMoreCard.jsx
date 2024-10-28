import React from 'react'
import img1 from "../assets/cardBg.png";

function LearnMoreCard() {

    const cardData = [
      { id: 1, image: img1, title: "Java" },
      { id: 2, image: img1, title: "Python" },
      { id: 3, image: img1, title: "Javascript" },
      { id: 4, image: img1, title: "React" },
    ];

  return (
    <div className="p-5 bg-[#14192D] mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {" "}
        {/* Grid with gaps */}
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-xl shadow-md p-1">
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

export default LearnMoreCard