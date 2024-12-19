import React, { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import questionsData from "./questions.json";

const QuestionList = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [expanded, setExpanded] = useState({});
  const [newComment, setNewComment] = useState({ id: null, text: "" });

  const toggleExpand = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleInputChange = (id, text) => setNewComment({ id, text });

  const addComment = (e, id) => {
    e.preventDefault();
    if (!newComment.text.trim()) return;
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              comments: [
                ...q.comments,
                {
                  text: newComment.text,
                  likes: 0,
                  date: new Date().toLocaleString(),
                  profile: {
                    name: "User Name",
                    avatar: "https://via.placeholder.com/40",
                  },
                },
              ],
            }
          : q
      )
    );
    setNewComment({ id: null, text: "" });
  };

  const likeComment = (qid, idx) =>
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === qid
          ? {
              ...q,
              comments: q.comments.map((c, i) =>
                i === idx ? { ...c, likes: c.likes + 1 } : c
              ),
            }
          : q
      )
    );

  return (
    <div className="p-6 bg-[#14192D] min-h-screen rounded-lg text-black">
      {questions.map(({ id, title, description, answers, comments }) => (
        <div key={id} className="mb-6 bg-[#E8E8E8] rounded-lg shadow-md">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <button
              onClick={() => toggleExpand(id)}
              className="text-gray-600 hover:text-gray-800"
            >
              {expanded[id] ? <ImCross /> : <FaPlus />}
            </button>
          </div>

          {expanded[id] && (
            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-semibold">Answers:</h3>
                {answers.length ? (
                  <ul className="list-disc ml-5">
                    {answers.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No answers yet.</p>
                )}
              </div>

              <form
                onSubmit={(e) => addComment(e, id)}
                className="flex items-center rounded-lg space-x-4"
              >
                <textarea
                  rows="2"
                  placeholder="Add a comment..."
                  className="flex-grow p-2 border rounded"
                  value={newComment.id === id ? newComment.text : ""}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Add
                </button>
              </form>

              <div>
                <h3 className="font-semibold">Comments:</h3>
                {comments.length ? (
                  <ul className="space-y-4 p-2 bg-white rounded-lg">
                    {comments.map(({ text, likes, date, profile }, i) => (
                      <li
                        key={i}
                        className="p-4 border-b border-gray-300 space-y-2"
                      >
                        <div
                          className="flex items-center justify-end text-blue-500 cursor-pointer"
                          onClick={() => likeComment(id, i)}
                        >
                          <FaHeart className="mr-1" /> {likes}
                        </div>
                        <div className="flex items-start space-x-4">
                          <img
                            src={profile.avatar}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{profile.name}</p>
                            <p className="text-sm text-gray-800">{date}</p>
                            <p>{text}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
