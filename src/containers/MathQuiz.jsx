import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";

class MathQuiz extends React.Component {
  state = {
    isBeginningDone: false,
    isFinished: false,
    lastPoints: 0
  };

  endGame = (points) => {
    this.setState({ lastPoints: points, isFinished: true})
  }

  completeBeginning = () => {
    this.setState({ isBeginningDone: true });
  };

  render() {
    return !this.state.isFinished ? (
      <div>
        {!this.state.isBeginningDone ? (
            <Beginning isComplete={this.completeBeginning} />
        ) : (
            <Quiz endGame={this.endGame} />
        )}
      </div>
    ):(
        <Done points={this.state.lastPoints} />
    );
  }
}

export default MathQuiz;