import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../components/Login.css';
import { useDispatch } from 'react-redux';
import { setName } from './nameSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username && password) {
      dispatch(setName(username));
      onLogin(); 
      toast.success("Login Successful!");
      navigate('/'); 

    } else {
      toast.error("Please enter both username and password.");
    }
  };

  return (
    <div className='Login-page'>
      <div className='login-cont'>
        <h1>Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='log-user'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type='password'
            className='log-pass'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit' className='log-but'>Login</button>
          <br /><br />
          <p className='si' onClick={() => navigate('/register')}>SignUp</p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
