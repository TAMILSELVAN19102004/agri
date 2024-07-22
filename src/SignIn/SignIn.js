import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const nav1 = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    axios.post('https://retoolapi.dev/BsCQ5o/exam', {
      Name: formData.name,
      Password: formData.password,
    })
      .then(response => {
        console.log('Response:', response.data);
        setInputValue('');
        nav1('/Login');
      })
      .catch(error => {
        console.error('Error:', error);

      });
  };

  return (
    <div className='A1'>
      <div className=''>
        <h1 className='A3'>Signup</h1>
        <form onSubmit={handleSubmit}>
        <div className='A4'>
          <label htmlFor="name" className='A5'>Name:</label>
          <input className='A6'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
           
          />
        </div>
        <div 
        className='A4'>
          <label htmlFor="email" className='A5'>Email:</label>
          <input className='A6'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='A4'>
          <label htmlFor="password" className='A5'>Password:</label>
          <input className='A6'
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className='A4'>
          <label htmlFor="confirmPassword" className='A5'>Confirm Password:</label>
          <input className='A6'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
          <div className='A4'>
            {errorMessage && <p className="A8">{errorMessage}</p>}
            <button type="submit" className='A7'>Sign Up</button>
          </div>
        </form>
        <p>Already have an account? <a href="/Login" className='A8'>Login Here</a></p>
      </div>
    </div>
  );
}

export default SignIn;
