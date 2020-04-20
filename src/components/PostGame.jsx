import React from 'react';
import PropTypes from 'prop-types';
import '../css/PostGame.css';


export default function PostGame(props) {
  return (
    <div className="mainContainer">
      <div className="adContainer">
        <h3>Ad</h3>
      </div>
      <div className="container scoreContainer">
        <div className="row headerRow">
          <div className="col-12 gameHeader">
            <h2>Game Title | Info |  Arena</h2>
          </div>
          {/* <img className="headerDivider" src="https://www.nba.com/blazers/sites/blazers/files/pageheaderbar_50thanniversary.jpg" alt="page header divider"></img> */}
        </div>
        <div className="row finalRow">
          <div className="col-12 final">
            <h5>Final</h5>
          </div>
        </div>
        <div className="container teamsContainer">
          <div className="row rowPadding">
            <div className="firstTeam col-5">
              <img src={props.gameData.firstTeamLogo} alt="first team logo"></img>
              <h2>{props.gameData.firstTeam}</h2>
            </div>
            <div className="versus col-2">
              <h1>VS</h1>
            </div>
            <div className="secondTeam col-5">
              <img src={props.gameData.secondTeamLogo} alt="second team logo"></img>
              <h2>{props.gameData.secondTeam}</h2>
            </div>
          </div>
        </div>
        <div className="row quarterlyRow">
          <div className="col-12 quarters">
            <h3>Q1 - Q2 - Q3 - Q4</h3>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
