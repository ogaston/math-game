import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';
import Lifes from '../components/Lifes'
import Points from '../components/Points'
import "./MathQuiz.css"
import TableScore from '../components/TableScore';

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
                <Lifes {...this.props} />
                <Points {...this.props} />
              </div>
              <Quiz {...this.props} />
          </div>
        )}
      </div>
    ) : (
      <Done {...this.props} retryGame={this.retryGame} >
        <TableScore {...this.props} />
      </ Done>
    );
  }
}

export default MathQuiz;