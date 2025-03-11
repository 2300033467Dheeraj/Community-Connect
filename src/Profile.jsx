import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2 className="username">your_username</h2>
          <div className="stats">
            <span><strong>120</strong> posts</span>
            <span><strong>10K</strong> followers</span>
            <span><strong>500</strong> following</span>
          </div>
          <p className="bio">🌍 Traveler | 📸 Photographer | 💻 Developer</p>
          {/* Follow Button */}
          <button className={`follow-btn ${isFollowing ? "following" : ""}`} onClick={handleFollowClick}>
            {isFollowing ? "Following ✅" : "Follow ➕"}
          </button>
        </div>
      </div>

      {/* Profile Links */}
      <div className="profile-links">
        <Link to="/threads" className="profile-link">📌 Threads I Posted</Link>
        <Link to="/replies" className="profile-link">💬 Replies I Gave</Link>
      </div>
    </div>
  );
}
