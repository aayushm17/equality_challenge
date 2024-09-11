// components/Scenario1.js
import React, { useState } from 'react';
import './Scenario3.css';

const FinalChallenge = ({ handleNextScenario, handlePoints, handleAnswer }) => {
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
      <div className="background-image" style={{ backgroundImage: `url(${require('./finalscene.jpeg')})` }}></div>
      <div className="scenario-content">
        <h2>Final Challenge: A Comprehensive Scenario</h2>
        <p>
        You are the District Magistrate in a diverse district. There are reports of a housing society refusing to sell apartments to people from certain communities. You must decide how to handle the situation.
        </p>
        <div className="choices">
          <button onClick={() => handleChoice('choice1')}>Ignore the reports as it's a private matter between the society and the buyers.</button>
          <button onClick={() => handleChoice('choice2')}>Issue a warning to the housing society, reminding them of the Right to Equality and the legal consequences of discrimination.</button>
          <button onClick={() => handleChoice('choice3')}>Order an investigation into the housing society’s practices and take legal action if necessary.</button>
        </div>
      </div>
    </div>
  );
};

export default FinalChallenge;