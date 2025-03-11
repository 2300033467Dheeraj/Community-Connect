import { useState, useEffect } from "react";

export default function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const storedThreads = JSON.parse(localStorage.getItem("posts")) || [];
    setThreads(storedThreads);
  }, []);

  return (
    <div>
      <h2>📌 Threads I Posted</h2>
      <ul>
        {threads.map((thread, index) => (
          <li key={index}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
}
