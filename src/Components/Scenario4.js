// components/Scenario1.js
import React, { useState } from 'react';
import './Scenario3.css';

const Scenario4 = ({ handleNextScenario, handlePoints, handleAnswer }) => {
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
      <div className="background-image" style={{ backgroundImage: `url(${require('./scene4.jpeg')})` }}></div>
      <div className="scenario-content">
        <h2>Scenario 4: Social Interaction</h2>
        <p>
        You are organizing a community event. A local leader suggests that the event should only be open to people from a specific religion to maintain "harmony."
        </p>
        <div className="choices">
          <button onClick={() => handleChoice('choice1')}>Agree with the leader and restrict the event to people from that religion.</button>
          <button onClick={() => handleChoice('choice2')}>Politely disagree and insist that the event be open to all community members, regardless of religion.</button>
          <button onClick={() => handleChoice('choice3')}>Cancel the event to avoid any potential conflict.</button>
        </div>
      </div>
    </div>
  );
};

export default Scenario4;