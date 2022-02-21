import { useState } from "react";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComment = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComment();
  };

  return (
    <>
      <div>
        <h1>Post comment</h1>
        <div>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={submitComment}>Post Comment</button>
        </div>
        <button
          onClick={fetchComment}
          className="bg-indigo-500 py-2 px-4 text-center"
        >
          Load comments
        </button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.text}
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
