import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Users.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('https://6685a3abb3f57b06dd4d6580.mockapi.io/signup', {
      username,
      email,
      password
    })
    .then(response => {
      if (response.status === 201) {
        navigate('/login');
      } else {
        alert('Try Again!');
      }
    })
    .catch(error => {
      console.error('Error signing up:', error);
      alert('Try Again!');
    });
  };

  return (
    <div className="container-us">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-div">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-div">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='btn' type="submit">Sign Up</button>
        <p className='acou'>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;

