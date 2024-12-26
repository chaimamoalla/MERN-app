import React, { useState } from 'react';
import './Login.css'; // CSS for styling the login form
import Background from './Background'; // A background component for visual effects
import axios from 'axios'; // For making HTTP requests
import { useNavigate } from 'react-router-dom'; // For navigating between pages

function Login() {
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Username for register
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsRegister(true); // Switch to registration form
  };

  const handleLoginClick = () => {
    setIsRegister(false); // Switch to login form
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const userCredentials = isRegister 
      ? { username, email, password } // Register payload
      : { email, password }; // Login payload

    try {
      const endpoint = isRegister 
        ? 'http://localhost:5000/api/auth/register' 
        : 'http://localhost:5000/api/auth/login';

      const response = await axios.post(endpoint, userCredentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token
        navigate('/HomePage'); // Redirect after success
      }
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.msg : 'An error occurred'
      );
    }
  };

  return (
    <>
      <div className="login-background">
        <Background />
      </div>
      <div className="login-container">
        <div className="login-item">
          <h2 className="login-logo"><i className='bx bxl-xing'></i>Tunisian ITs</h2>
          <div className="login-text-item">
            <h2>Welcome! <br /><span>To Our Platform</span></h2>
            <p>A place where you can post IT content, communicate and share ...</p>
            <div className="login-social-icon">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-youtube'></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>
        </div>

        <div className={`login-section ${isRegister ? 'active' : ''}`}>
          <div className="login-form-box login">
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="login-input-box">
                <span className="login-icon"><i className='bx bxs-envelope'></i></span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className="login-input-box">
                <span className="login-icon"><i className='bx bxs-lock-alt'></i></span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <div className="login-remember-password">
                <label><input type="checkbox" /> Remember Me</label>
                <a href="#">Forget Password</a>
              </div>
              <button type="submit" className="login-btn">Login In</button>
              <div className="login-create-account">
                <p>Create A New Account? <a href="#" onClick={handleRegisterClick} className="register-link">Sign Up</a></p>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>

          <div className="login-form-box register">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="login-input-box">
                <span className="login-icon"><i className='bx bxs-user'></i></span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Username</label>
              </div>
              <div className="login-input-box">
                <span className="login-icon"><i className='bx bxs-envelope'></i></span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className="login-input-box">
                <span className="login-icon"><i className='bx bxs-lock-alt'></i></span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <div className="login-remember-password">
                <label><input type="checkbox" /> I agree with this statement</label>
              </div>
              <button type="submit" className="login-btn">Sign Up</button>
              <div className="login-create-account">
                <p>Already Have An Account? <a href="#" onClick={handleLoginClick} className="login-link">Sign In</a></p>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
