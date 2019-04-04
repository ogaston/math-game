import React, { Component } from 'react';
import Start from './containers/Start';
import MathQuiz from './containers/MathQuiz';
import './App.css';

class App extends Component {
  
  state = {
    started: false
  }

  gameStart = () => {
    this.setState({ started: true });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            !this.state.started ? (<Start startPressed={this.gameStart} />) : (<MathQuiz />)
          }
        </header>
      </div>
    );
  }
}

export default App;
