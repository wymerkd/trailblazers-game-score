import React from 'react';
import './App.css';


function App() {
  return (
    <div className="mainContainer">
      <div className="adContainer">
        <h3>Ad</h3>
      </div>
      <div className="container scoreContainer">
        <div className="row">
          <div className="col-xs-12 gameHeader">
            <h1>Game Title | Info |  Arena</h1>
          </div>
        </div>
        <div className="container gameContainer">
          <div className="row">
            <div className="firstTeam col-5">
              <img src="" alt="team 1 logo"></img>
              <h1>Team 1</h1>
            </div>
            <div className="versus col-2">
              <h1>VS</h1>
            </div>
            <div className="secondTeam col-5">
              <img src="" alt="team 2 logo"></img>
              <h1>Team 2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
