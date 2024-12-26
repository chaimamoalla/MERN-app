import React from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; // Importing icons
import './Feed.css'; // Custom CSS for the card
import Img from '../assets/chaima moalla1.jpg';

const Feed = () => {
  return (
    <div className="card-container"> {/* General styles for the card container */}
      <div className="post-card"> {/* Individual post card */}
        {/* Styles for the post header (profile picture, title, and tags) */}
        <div className="post-header">
          <img src={Img} alt="Profile" className="profile-icon" />
          <div className="post-info">
            <h4>I Built a 2D Game in 40 Minutes with Ebiten</h4>
            <div className="post-tags">
              <span className="tag">#game-development</span>
              <span className="tag">#golang</span>
            </div>
            <p className="post-date">Jul 27 • 12m read time</p>
          </div>
        </div>
        {/* Styles for the post image */}
        <div className="post-image">
          <img src="https://picsum.photos/150/100" alt="Post" />
        </div>
        {/* Styles for the post footer (likes, comments, share) */}
        <div className="post-footer">
          <div className="icon-container">
            <FaThumbsUp className="icon" />
            <span>1.5K</span>
          </div>
          <div className="icon-container">
            <FaComment className="icon" />
            <span>57</span>
          </div>
          <div className="icon-container">
            <FaShare className="icon" />
            <span>Share</span>
          </div>
        </div>
      </div>
      {/* Add more post cards as needed */}
    </div>
  );
};

export default Feed;
