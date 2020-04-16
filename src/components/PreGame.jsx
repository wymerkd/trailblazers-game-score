import React from 'react';
import PropTypes from 'prop-types';


export default function PreGame(props) {
  return (
    <div className="mainContainer">
      <div className="adContainer">
        <h3>Ad</h3>
      </div>
      <div className="container scoreContainer">
        <div className="row headerRow">
          <div className="col-8 gameHeader">
            <h2>Game Title | Info |  Arena</h2>
          </div>
          <div className="col-4 actionButtons">
            <button className="calendarButton">Add to Calendar</button>
            <button>Download PDF</button>
          </div>
          {/* <img className="headerDivider" src="https://www.nba.com/blazers/sites/blazers/files/pageheaderbar_50thanniversary.jpg" alt="page header divider"></img> */}
        </div>
        <div className="container gameContainer">
          <div className="row">
            <div className="pregameInfo col-6">
              <h3>Header Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button>See Tickets</button>
            </div>
          </div>
        </div>
        <div className="container gameContainer">
          <div className="row">
            <div className="videoPreview col-8">
              <h1>Video</h1>
            </div>
            <div className="contentBoxRight col-4">
              <h3>Game Preview</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="container gameContainer">
          <div className="row">
            <div className="pregameInfo col-12">
              <h3>Header Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

