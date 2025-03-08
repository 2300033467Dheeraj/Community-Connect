import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';
import CommentSection from './CommentSection';

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [votes, setVotes] = useState([]);
  const [openComments, setOpenComments] = useState({}); // Track open comments

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
    setVotes(storedPosts.map(() => 0));
  }, []);

  const handleVote = (index, change) => {
    const newVotes = [...votes];
    newVotes[index] += change;
    setVotes(newVotes);
  };

  const toggleComments = (index) => {
    setOpenComments({
      ...openComments,
      [index]: !openComments[index],
    });
  };

  return (
    <div className="flex">
      <div className="parent">
        <div className="posts-container">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-header">
                <h2>{post.title}</h2>
                <span className="post-category">{post.category}</span>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-footer">
                <div className="post-meta">
                  <span>Posted by: {post.author}</span>
                  <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                </div>
                <div className="post-actions">
                  <button className="like-btn">
                    <i className="fas fa-heart"></i> Like
                  </button>
                  <button className="comment-btn" onClick={() => toggleComments(index)}>
                    <i className="fas fa-comment"></i> Comment
                  </button>
                  <div className="vote-section">
                    <button
                      className="vote-button upvote"
                      onClick={() => handleVote(index, 1)}
                    >
                      ▲
                    </button>
                    <span className="vote-count">{votes[index]}</span>
                    <button
                      className="vote-button downvote"
                      onClick={() => handleVote(index, -1)}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
              {openComments[index] && <CommentSection postId={index} />}
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar">
        <button 
        className="createthread" 
        onClick={() => navigate('/Create')} 
        aria-label="Go to Create New Thread">
        <i className="fas fa-edit"></i> 
        Create New Thread
        </button>

        <div className="categories">
          <h3>Categories</h3>
          <ul className="button-list">
          {["All Topics", "Development", "Design", "Devops", "Career"].map((text, index) => (
            <li key={index}>
              <button>{text}</button>
            </li>
          ))}
          </ul>
        </div>

        <div className="trendingtopics">
          <h3>Trending Topics</h3>
          <ul>
            {[
              "React 18 Features",
              "TypeScript Best Practices", 
              "CSS Grid vs Flexbox",
              "Next.js 13 Updates"
            ].map((topic, index) => (
              <li key={index}>
                <strong>#{index + 1}</strong> {topic}
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}