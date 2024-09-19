import React, { useState } from 'react';
import './App.css';
import Scenario1 from './Components/Scenario1';
import Scenario2 from './Components/Scenario2';
import Scenario3 from './Components/Scenario3';
import Scenario4 from './Components/Scenario4';
import FinalChallenge from './Components/FinalChallenge';

const App = () => {
  const [currentScenario, setCurrentScenario] = useState(1);
  const [points, setPoints] = useState(0);

  const handleNextScenario = () => {
    setCurrentScenario(currentScenario + 1);
  };

  const handlePoints = (pointsEarned) => {
    setPoints(points + pointsEarned);
  };

  return (
    <div className="app-container">
      <h1 className="equality-challenge">Equality Challenge</h1>
      {currentScenario === 1 && (
        <Scenario1
          handleNextScenario={handleNextScenario}
          handlePoints={handlePoints}
        />
      )}
      {currentScenario === 2 && (
        <Scenario2
          handleNextScenario={handleNextScenario}
          handlePoints={handlePoints}
        />
      )}
      {currentScenario === 3 && (
        <Scenario3
          handleNextScenario={handleNextScenario}
          handlePoints={handlePoints}
        />
      )}
      {currentScenario === 4 && (
        <Scenario4
          handleNextScenario={handleNextScenario}
          handlePoints={handlePoints}
        />
      )}
      {currentScenario === 5 && (
        <FinalChallenge
          handleNextScenario={handleNextScenario}
          handlePoints={handlePoints}
        />
      )}
      
  {currentScenario > 5 && (
    <div className="result">
      <p>Your total points: {points}</p>
      {points > 80 ? (
        <div className="congratulations">
          <h2>Congratulations!</h2>
          <p>You have won!</p>
        </div>
      ) : (
        <p>You were not able to complete the Equality Challenge. Try Again!!</p>
      )}
    </div>
  )}
  

    </div>
  );
};

export default App;