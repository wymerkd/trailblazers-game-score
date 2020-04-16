import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


export default function LiveGame(props) {
  return (
    <div className="mainContainer">
      <div className="adContainer">
        <h3>Ad</h3>
      </div>
      <div className="container scoreContainer">
        <div className="row headerRow">
          <div className="col-xs-12 gameHeader">
            <h2>Game Title | Info |  Arena</h2>
          </div>
          <img className="headerDivider" src="https://www.nba.com/blazers/sites/blazers/files/pageheaderbar_50thanniversary.jpg" alt="page header divider"></img>
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
              <div className="scoreBox">
                <p>Scorebox Card</p>
                <h4>101-98</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

