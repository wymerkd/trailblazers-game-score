import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="adContainer">
          <h3>Ad</h3>
        </div>
        <div className="scoreContainer">
          <div>
            <h1>Game Title  - Info - Arena</h1>
          </div>
          <div className="teamContainer">
            <div className="displayedTeam">
              <img src="https://via.placeholder.com/500x350" alt="team logo"/>
            </div>
            <div className="versusCircle">
              <h3>VS</h3>
            </div>
            <div className="displayedTeam">
              {/* <img src="https://via.placeholder.com/500x350" alt="team logo"/> */}
              <p>hey</p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}
export default App;
