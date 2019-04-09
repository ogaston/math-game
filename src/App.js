import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from './redux/index'
import Start from './containers/Start';
import MathQuiz from './containers/MathQuiz';
import './App.css';

class App extends Component {
  

  gameStart = () => {
    this.props.onStartGame();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            !this.props.isStarted ? (
              <Start startPressed={this.gameStart} />
            ) : (
              <MathQuiz { ...this.props} gameStart={this.gameStart}/>
            )
          }
        </header>
        <footer className="App-footer">
          <small>made with ♥ by <a href="https://github.com/ogaston" rel="noopener noreferrer" target="_blank">Omar Gaston</a></small>
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
