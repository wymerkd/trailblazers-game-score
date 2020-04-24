import React from 'react';
import './App.css';

//Test data object

import testJsonObject from './test_json_object.js'

//Components
import Ad from './components/Ad';
import PreGame from './components/PreGame';
import LiveGame from './components/LiveGame';
import PostGame from './components/PostGame';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterGameDetailList: testJsonObject,
      gameData: testJsonObject[0]
    };
  }

render(){
  return (
    <div className="App">
      <div className="Container">
        <Ad />
        <br></br>
        <h1>Pre-Game View</h1>
        <PreGame gameData={this.state.gameData} />
        <br></br>
        <h1>Live-Game View</h1>
        <LiveGame gameData={this.state.gameData} />
        <br></br>
        <h1>Post-Game View</h1>
        <PostGame gameData={this.state.gameData} />
        <br></br>
      </div>
    </div>
    );
  }
}

export default App;