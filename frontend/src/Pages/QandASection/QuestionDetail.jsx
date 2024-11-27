import React, { useState } from "react";
import CommentSection from "./CommentSection";

const QuestionDetail = ({ questionData }) => {
  const [answers, setAnswers] = useState(questionData.answers || []);
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddAnswer = () => {
    const newAnswerData = {
      id: Date.now(),
      content: newAnswer,
      comments: [],
    };
    setAnswers([...answers, newAnswerData]);
    setNewAnswer("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{questionData.title}</h2>
      <p className="text-gray-700">{questionData.description}</p>

      <CommentSection comments={questionData.comments} />

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Answers</h3>
        {answers.map((answer) => (
          <div key={answer.id} className="p-4 my-2 bg-gray-100 rounded">
            <p>{answer.content}</p>
            <CommentSection comments={answer.comments} />
          </div>
        ))}

        <div className="mt-4">
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Write your answer..."
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddAnswer}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
