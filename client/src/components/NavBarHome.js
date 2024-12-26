import React from 'react';
import './NavBarHome.css'; // Assuming you have CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tunisian ITs</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
