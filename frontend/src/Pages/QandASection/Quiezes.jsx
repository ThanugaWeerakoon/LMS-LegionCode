import React, { useState } from "react";
import QuizCard from "./QuizCard";
import imgPlaceholder from "./src/assets/cardBg.png"; // Placeholder image

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "JavaScript Basics",
      image: imgPlaceholder,
      marks: 10,
    },
    {
      id: 2,
      title: "React Fundamentals",
      image: imgPlaceholder,
      marks: 15,
    },
  ]);

  const addQuiz = () => {
    const newQuiz = {
      id: quizzes.length + 1,
      title: `New Quiz ${quizzes.length + 1}`,
      image: imgPlaceholder,
      marks: 0, // Default marks
    };
    setQuizzes([...quizzes, newQuiz]);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Quizzes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            image={quiz.image}
            title={quiz.title}
            marks={quiz.marks}
            onAdd={addQuiz}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={addQuiz}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
        >
          Add New Quiz
        </button>
      </div>
    </div>
  );
};

export default Quizzes;
