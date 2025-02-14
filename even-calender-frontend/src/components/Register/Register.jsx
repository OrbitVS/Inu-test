import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
        <h2>INU Test</h2>
      <h2>Register</h2>
      <img 
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
        alt="Sample" 
        className="image"
      />
      
      <input type="text" placeholder="Full Name" className="input" />
      <input type="name" placeholder="User name" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <input type="password" placeholder="Confirm Password" className="input" />

      <button className="button">Register</button>
      <p className="register-text">
        Already have an account? <a onClick={() => navigate('/')} className="register-link">Login</a>
      </p>
      
    </div>
  );
}

export default Register;
