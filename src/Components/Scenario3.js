// components/Scenario1.js
import React, { useState } from 'react';
import './Scenario3.css';

const Scenario3 = ({ handleNextScenario, handlePoints, handleAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    if (choice === 'choice2') {
      handlePoints(20);
    }
    handleNextScenario();
  };

  return (
    <div className="scenario-container">
      <div className="background-image" style={{ backgroundImage: `url(${require('./scene3.jpeg')})` }}></div>
      <div className="scenario-content">
        <h2>Scenario 3: Public Services</h2>
        <p>
        You are in charge of a government office that issues essential public services like ration cards and ID cards. An applicant from a minority community comes in to apply, but your colleague suggests processing their application slowly because "they always cause trouble."
        </p>
        <div className="choices">
          <button onClick={() => handleChoice('choice1')}>Follow your colleague's suggestion and delay the application.</button>
          <button onClick={() => handleChoice('choice2')}>Process the application as usual, following standard procedures.</button>
          <button onClick={() => handleChoice('choice3')}>Reject the application outright, citing lack of necessary documents.</button>
        </div>
      </div>
    </div>
  );
};

export default Scenario3;