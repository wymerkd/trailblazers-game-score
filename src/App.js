import React from 'react';
import './App.css';

//Test data object

import testJsonObject from './test_json_object.js'

//Components

import LiveGame from './components/LiveGame';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterGameList: testJsonObject,
      liveGameData: testJsonObject[0]
    };
  }

render(){
  return (
    <div className="App">
      <div className="Container">
        <LiveGame liveGameData={this.state.liveGameData}/>
      </div>
    </div>
    );
  }
}

export default App;