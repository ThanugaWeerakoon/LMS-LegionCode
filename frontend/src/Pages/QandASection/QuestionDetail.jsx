import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaDownload, FaStar } from "react-icons/fa";
import QuestionList from "./QuestionList";

const QuestionDetail = () => {
  // Sample data for the question
  const questionData = {
    image: "./src/assets/cardBg.png", // Placeholder image URL
    title: "Interview Questions",
    subtitle: "QUIZ - Software Engineer Intern",
    description: "Publish by LEGION",
    rating: 4.5, // Rating out of 5
  };

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="bg-[#14192D] min-h-screen p-6">
      {/* Question Header */}
      <div className="bg-[#E8E8E8] text-black rounded-lg p-8 mb-6 shadow-md flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <img
          src={questionData.image}
          alt={questionData.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />

        {/* Text and Action Section */}
        <div className="flex-1">
          <h2 className="text-xl italic text-gray-500 mb-4">
            {questionData.subtitle}
          </h2>
          <h1 className="text-6xl font-bold mb-2">{questionData.title}</h1>

          <p className="text-lg mb-4">{questionData.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < Math.floor(questionData.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </span>
            <span className="ml-2 text-gray-500">
              ({questionData.rating.toFixed(1)})
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLikes((prev) => prev + 1)}
              className="px-4 py-2 bg-green-600 text-white rounded flex items-center space-x-2 hover:bg-green-700"
            >
              <FaThumbsUp /> <span>Like {likes}</span>
            </button>
            <button
              onClick={() => setDislikes((prev) => prev + 1)}
              className="px-4 py-2 bg-red-600 text-white rounded flex items-center space-x-2 hover:bg-red-700"
            >
              <FaThumbsDown /> <span>Dislike {dislikes}</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center space-x-2 hover:bg-blue-700">
              <FaDownload /> <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Question List */}
      <QuestionList />
    </div>
  );
};

export default QuestionDetail;
