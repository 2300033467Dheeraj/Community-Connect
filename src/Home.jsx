import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="parent">
        {/* Create Thread Button */}
        

        {/* Button List */}
       
      </div>

      {/* Right Sidebar */}
      <div className="sidebar">
        {/* Categories Section */}
        <button
          className="createthread"
          onClick={() => navigate('Create')}
        >
          <i className="fas fa-edit"></i> Create New Thread
        </button>
        
        {/* Categories Section */}
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

        {/* Trending Topics Section */}
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
                <span></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}