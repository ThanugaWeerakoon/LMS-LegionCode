import React from "react";

const QuizCard = ({ image, title, marks, onAdd }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">Marks: {marks}</p>
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Quiz
      </button>
    </div>
  );
};

export default QuizCard;
