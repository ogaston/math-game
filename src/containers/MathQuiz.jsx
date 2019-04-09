import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';
import Lives from '../components/Lives'
import Points from '../components/Points'
import "./MathQuiz.css"


class MathQuiz extends React.Component {
  state = {
    isBeginningDone: false,
    lastPoints: 0
  };

  retryGame = () => {
    this.setState({ isBeginningDone: false })
    this.props.onRetryGame();
  }

  completeBeginning = () => {
    this.setState({ isBeginningDone: true });
  };

  render() {
    return !this.props.isFinished ? (
      <div>
        {!this.state.isBeginningDone ? (
          <Beginning isComplete={this.completeBeginning} />
        ) : (
          <div>
            <div className="App-header-bar">
              <Timmer {...this.props} />
              <Lives {...this.props} />
              <Points {...this.props} />
            </div>
            <Quiz {...this.props} />
          </div>
        )}
      </div>
    ) : (
      <Done {...this.props} retryGame={this.retryGame} />
    );
  }
}

export default MathQuiz;