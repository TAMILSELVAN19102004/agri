import React from 'react';
import './Getstart.css';
import {Link} from 'react-router-dom'
import Nav from '../Navpar/Nav';
const Getstart = () => {
  return (
  <body className="start">
    <Nav/>
    <div className="card-container">
      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2017/04/TYPES-OF-STRETCHING-1-1024x429.jpg" alt="Card Image 1" />
        <div className="card-content">
          <p className="card-text">TYPES OF STRETCHING</p>
          <Link to="/t1" className="card-btn">Learn More</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2017/04/Full-body-vs-split-routine-1024x429.jpg" alt="Card Image 2" />
        <div className="card-content">
          <p className="card-text">FULL BODY SPLIT ROUTINE</p>
          <Link to="/t2" className="card-btn">Learn More</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/Frontback-lever-1024x431.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text"> FRONT & BACK LEVER</p>
          <Link to="/t3" className="card-btn">Learn More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/Fat-loss-1024x431.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text">FAT LOSS</p>
          <Link to="/t4" className="card-btn">Learn More</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/lets-do-some-real-push-ups-1024x429.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text">LET’S DO SOME REAL PUSH UPS!</p>
          <Link to="/t5" className="card-btn">Learn More</Link>
        </div>
      </div>
      
      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/Planche-The-ultimate-tutorial-and-step-by-step-progressions-1024x429.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text">PLANCHE – STEP-BY-STEP PROGRESSIONS</p>
          <Link to="/t6" className="card-btn">Learn More</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/Leg-Raises-and-L-sit-complete-tutorial-1024x429.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text">LEG RAISES AND L-SIT COMPLETE TUTORIAL</p>
          <Link to="t7" className="card-btn">Learn More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://caliathletics.com/wp-content/uploads/2018/09/How-to-stretch-hamstrings-1024x428.jpg" alt="Card Image 3" />
        <div className="card-content">
          <p className="card-text">HOW TO STRETCH HAMSTRINGS</p>
          <Link to="t8" className="card-btn">Learn More</Link>
        </div>
      </div>
      
    </div>
    </body>
  );
};

export default Getstart;
