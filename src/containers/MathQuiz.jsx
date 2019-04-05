import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';

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
    console.log(this.props)
    return !this.props.isFinished ? (
      <div>
        {!this.state.isBeginningDone ? (
          <Beginning isComplete={this.completeBeginning} />
        ) : (
          <div>
            <Timmer {...this.props} />
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