import React from 'react';
import './HomePage.css'; // Import your CSS for styling
import NavBar from './NavBar'; // Assume you have a Navbar component
import Sidebar from './Sidebar'; // Assume you have a Sidebar component
import Feed from './Feed';

function HomePage() {
  return (
    <div className="home-page">
      <NavBar className="NavBar"/>

      <div className="home-content">
        <Sidebar />
        
        <div className="main-section">
          <h1>Welcome to Tunisian ITs</h1>
          <p>Explore the latest posts and connect with fellow IT enthusiasts!</p>

          <div className="posts-section">
            <Feed />
            <Feed />
            <Feed />

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
