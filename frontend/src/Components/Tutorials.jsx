import React from 'react'
import img1 from "../assets/cardBg.png";

function Tutorials() {
    const cardData = [
      {
        id: 1,
        image: img1,
        title: "Java tutorials for beginners",
        date: "01 October 2024",
      },
      {
        id: 2,
        image: img1,
        title: "Python tutorials for beginners",
        date: "05 October 2024",
      },
      {
        id: 3,
        image: img1,
        title: "Javascript tutorials for beginners",
        date: "10 October 2024",
      },
      {
        id: 4,
        image: img1,
        title: "React tutorials for beginners",
        date: "15 October 2024",
      },
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
            <h2 className=" font-bold text-[18px] px-3 py-1">{card.title}</h2>
            <p className=" text-gray-500 text-sm px-3 py-1 font-semibold">
              {card.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorials
