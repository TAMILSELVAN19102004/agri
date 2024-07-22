import React, { useState } from 'react';
import '../Maintainance/Maintainance.css';
import Nav from '../Navpar/Nav';

function Maintainance() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [maintenanceCalories, setMaintenanceCalories] = useState('');
  const [weightLossCalories, setWeightLossCalories] = useState('');
  const [weightGainCalories, setWeightGainCalories] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateCalories = () => {
    if (height && weight && age && height > 0 && weight > 0 && age > 0) {
      
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));

    
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      const maintenanceCalories = Math.round(bmr * 1.55);
      setMaintenanceCalories(maintenanceCalories);

      
      const weightLossCalories = maintenanceCalories - 500;
      setWeightLossCalories(weightLossCalories);

      // Caloric Surplus for Weight Gain
      const weightGainCalories = maintenanceCalories + 500;
      setWeightGainCalories(weightGainCalories);
    } else {
      alert('Please enter valid height, weight, and age.');
    }
  };

  return (
    <div>
      <Nav />
      <div className="fullpage-container">
        <div className="containerin">
          <h1>Calorie Tracker</h1>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="height">Enter your height (in cm):</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Enter your weight (in kg):</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="age">Enter your age:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="ta" onClick={calculateCalories}>
              Calculate Calories
            </button>
            {maintenanceCalories && (
              <div className="result">
                <h2>Calorie Outputs:</h2>
                <p>Maintenance Calories: {maintenanceCalories} kcal/day</p>
                <p>Weight Loss Calories: {weightLossCalories} kcal/day</p>
                <p>Weight Gain Calories: {weightGainCalories} kcal/day</p>
              </div>
            )}
            {bmi && (
              <div className="result">
                <h2>BMI Calculation:</h2>
                <p>Your BMI: {bmi}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintainance;
