import React from 'react';
import { FiHome, FiHash } from 'react-icons/fi';  
import './Sidebar.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`sidebar ${isVisible ? 'hidden' : 'visible'}`}>
      <h2>daily.dev</h2>
      <nav>
        <ul className="nav-list">
          <li><FiHome /> My Feed</li>
          <li><FiHash /> Chaima</li>
          <li><FiHash /> React</li>
          <li><FiHash /> Custom Feed</li>
        </ul>
      </nav>
      <div className="discover">
        <h3>Discover</h3>
        <ul className="discover-list">
          <li>Explore</li>
          <li>Discussions</li>
          <li>Tags</li>
          <li>Sources</li>
          <li>Leaderboard</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
