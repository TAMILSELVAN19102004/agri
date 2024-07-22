import React, { useState } from 'react';
import img1 from '../images/Ironcorex.jpg'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  axios.get("https://retoolapi.dev/BsCQ5o/exam")
  .then(response=>{
    const api=response.data.find(user=>user.Name==username);
    if (api) {
      console.log('Login successful!');
      nav("/")
      setUsername(''); 
      setPassword(''); 
    } else {
      setErrorMessage('Invalid username or password');
    }
  })
  };
const nav=useNavigate();

  return (
       <div className='a1'>
        

<h3 className='k2'>.</h3>

    <div className="container">
        <center>
            <img src={img1} width={70} height={70} style={{borderRadius:"50px"}}></img>
          </center>
      <h1 className='lo'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='llogin'htmlFor="username">Username:</label>
          <input className='G1'
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="llogin"htmlFor="password">Password:</label>
          <input className='G1'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button  className="loginbutton"type="submit">Login</button>
        </div>
      </form>
      <p style={{textAlign:"center"}}>Don't have an account? <a href="/SignIn" className='sin'>Sign Up Here</a></p>
    </div>
    </div>
  );
}

export default Login;