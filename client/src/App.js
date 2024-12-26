import React from 'react';
import './App.css';
//import Header from './components/Header';
//import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/HomePage" element={<HomePage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
