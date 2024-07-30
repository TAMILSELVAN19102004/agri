import React from 'react';
import './Aboutus.css'; 
import Nav from '../Navpar/Nav';

function Aboutus() {
  return (
    <div>
      <Nav/>
    <div className="about-us-page">
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>Welcome to our Website.</p>
        <p>Our Company ensures every user gets personalised trainimg and guidannce.</p>
        <p>Our team works hard to ensure that every customer is satisfied with our services.</p>
        <p>Thank you for choosing us as your fitness companion.</p>
      </div>
    </div>
    </div>
  );
}

export default  Aboutus;
