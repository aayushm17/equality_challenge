// components/Scenario1.js
import React, { useState } from 'react';
import './Scenario2.css';

const Scenario2 = ({ handleNextScenario, handlePoints, handleAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    if (choice === 'choice3') {
      handlePoints(20);
    }
    handleNextScenario();
  };

  return (
    <div className="scenario-container">
      <div className="background-image" style={{ backgroundImage: `url(${require('./scene2.webp')})` }}></div>
      <div className="scenario-content">
        <h2>Scenario 2: Access to Education</h2>
        <p>
        You are the principal of a prestigious school. A girl from a lower caste applies for admission, but some parents of existing students express their discomfort, fearing that their children might be negatively influenced.
        </p>
        <div className="choices">
          <button onClick={() => handleChoice('choice1')}>Reject the girl’s application to avoid upsetting the parents.</button>
          <button onClick={() => handleChoice('choice2')}>Admit the girl but keep her separated from the other students.</button>
          <button onClick={() => handleChoice('choice3')}>Admit the girl and treat her like any other student, ensuring she has equal access to education.</button>
        </div>
      </div>
    </div>
  );
};

export default Scenario2;