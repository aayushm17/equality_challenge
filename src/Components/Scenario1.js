import React, { useState } from 'react';
import './Scenario1.css';

const Scenario1 = ({ handleNextScenario, handlePoints }) => {
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
      <div className="background-image" style={{ backgroundImage: `url(${require('./scene1.jpg')})` }}></div>
      <div className="scenario-content">
        <h2>Scenario 1: Employment Opportunity</h2>
        <p>
          You are an HR manager at a large corporation. Two candidates have applied for the same job. Both are equally qualified, but one belongs to a minority community. Your boss suggests hiring the candidate from the majority community, believing they might "fit in" better with the team.
        </p>
        <div className="choices">
          <button onClick={() => handleChoice('choice1')}>Hire the candidate from the majority community as suggested by your boss.</button>
          <button onClick={() => handleChoice('choice2')}>Hire the candidate from the minority community because you want to promote diversity.</button>
          <button onClick={() => handleChoice('choice3')}>Evaluate both candidates based on their qualifications and performance in the interview, ignoring their community background.</button>
        </div>
      </div>
    </div>
  );
};

export default Scenario1;