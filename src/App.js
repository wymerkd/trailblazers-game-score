import React from 'react';
import './App.css';

//Test data object

import testJsonObject from './test_json_object.js'

//Components

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
        <PreGame gameData={this.state.gameData} />
        <LiveGame gameData={this.state.gameData} />
        <PostGame gameData={this.state.gameData} />
      </div>
    </div>
    );
  }
}

export default App;