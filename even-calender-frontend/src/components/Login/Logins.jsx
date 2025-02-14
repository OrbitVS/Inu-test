import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Logins() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>INU Test</h2>
      <h3>Login</h3>
      <img 
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
        alt="Sample" 
        className="image"
      />
      
      <input type="name" placeholder="user name" className="input" />
      <input type="password" placeholder="Password" className="input" />
      
      <div className="options">
        <a href="#">Forgot password?</a>
      </div>
      
      <button className="button">Login</button>
      <p className="register-text">
        Don't have an account? <a onClick={() => navigate('/register')} className="register-link">Register</a>
      </p>
    
    </div>
  );
}

export default Logins;
