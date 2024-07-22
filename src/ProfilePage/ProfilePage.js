import React from 'react';
import ppf from "../images/profileimage.jpg"; 
import './ProfilePge.css';

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={ppf} alt="Profile" /> 
        </div>
        <div className="profile-details">
          <h2>Username: Aurther Morgan M.J</h2>
          <p>Email: aurtherbuilds@example.com</p>
          <p>Age: 30</p>
          <p>Height: 180 cm</p>
          <p>Weight: 75 kg</p>
          <p>Goal: Lose weight</p>
          <p>Activity Level: Moderate</p>
          <p>Daily Caloric Intake: 2000 kcal</p>
          <p>Favorite Workout: Running</p>
          <p>Membership Type: Premium</p>
          <p>Membership Expiry: 31-Dec-2024</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;