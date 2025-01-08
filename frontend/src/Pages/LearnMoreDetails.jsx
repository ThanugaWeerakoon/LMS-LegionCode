import React from "react";
import img1 from "../assets/cardBg.png";
import { useNavigate } from "react-router-dom";

const cardJSON = [
  {
    category: "React",
    questions: [
      { id: 1, title: "What is React?", description: "Explain the fundamentals of React." },
      { id: 2, title: "What is JSX?", description: "Explain the purpose and usage of JSX in React." },
    ],
  },
  {
    category: "Java",
    questions: [
      { id: 1, title: "What is Java?", description: "Explain the fundamentals of Java." },
      { id: 2, title: "What is a Java class?", description: "Describe the purpose of classes in Java." },
    ],
  },
  {
    category: "Python",
    questions: [
      { id: 1, title: "What is Python?", description: "Explain the fundamentals of Python." },
      { id: 2, title: "What are Python's key features?", description: "Highlight Python's most important features." },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      { id: 1, title: "What is JavaScript?", description: "Explain the fundamentals of JavaScript." },
      { id: 2, title: "What are JavaScript data types?", description: "List and describe JavaScript's data types." },
    ],
  },
  {
    category: "HTML",
    questions: [
      { id: 1, title: "What is HTML?", description: "Explain the purpose of HTML." },
      { id: 2, title: "What are HTML elements?", description: "Describe HTML elements and their use." },
    ],
  },
  {
    category: "CSS",
    questions: [
      { id: 1, title: "What is CSS?", description: "Explain the purpose of CSS." },
      { id: 2, title: "What are CSS selectors?", description: "Describe the purpose of CSS selectors." },
    ],
  },
  {
    category: "Tailwind",
    questions: [
      { id: 1, title: "What is Tailwind CSS?", description: "Explain the purpose of Tailwind CSS." },
      { id: 2, title: "What are utility classes in Tailwind?", description: "Describe the purpose and usage of utility classes." },
    ],
  },
];

function LearnMoreCard() {
  const navigate = useNavigate();

  const cardData = cardJSON.map((category, catIndex) => ({
    image: img1,
    title: category.category,
    description: `Explore topics under ${category.category}`,
    id: category.questions.map((q) => q.id),
  }));

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
            <p className="text-center text-gray-500 text-[14px]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnMoreCard;
