import  { useState, useEffect } from "react";

export default function Replies() {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const storedReplies = JSON.parse(localStorage.getItem("replies")) || [];
    setReplies(storedReplies);
  }, []);

  return (
    <div>
      <h2>💬 Replies I Gave</h2>
      <ul>
        {replies.map((reply, index) => (
          <li key={index}>{reply.text}</li>
        ))}
      </ul>
    </div>
  );
}
