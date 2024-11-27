import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionList = ({ questions }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Questions</h2>
      <ul>
        {questions.map((question) => (
          <li
            key={question.id}
            className="p-4 my-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => navigate(`/question/${question.id}`)}
          >
            <h3 className="text-lg font-semibold">{question.title}</h3>
            <p>{question.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
