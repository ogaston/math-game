import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from './redux/index'
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
            !this.state.started ? (
              <Start startPressed={this.gameStart} />
            ) : (
              <MathQuiz { ...this.props} gameStart={this.gameStart}/>
            )
          }
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
