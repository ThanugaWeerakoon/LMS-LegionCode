import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const newCommentData = {
      id: Date.now(),
      content: newComment,
    };
    setCommentList([...commentList, newCommentData]);
    setNewComment("");
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold">Comments</h4>
      {commentList.map((comment) => (
        <p key={comment.id} className="p-2 my-1 bg-gray-50 rounded">
          {comment.content}
        </p>
      ))}

      <div className="mt-2">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
