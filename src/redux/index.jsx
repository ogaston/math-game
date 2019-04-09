import {
  correctAnswer,
  wrongAnswer,
  timeChaged,
  stateGame,
  reStartGame,
  startGame
} from "./actions/index";

export const mapStateToProps = state => {
  console.log(state)
  return {
    points: state.points,
    lives: state.lives,
    seconds: state.seconds,
    level: state.level,
    isFinished: state.isFinished,
    isStarted: state.isStarted
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onCorretAnswer: s => dispatch(correctAnswer(s)),
    onWrongAnswer: () => dispatch(wrongAnswer()),
    setTimeChanged: s => dispatch(timeChaged(s)),
    onEndGame: () => dispatch(stateGame(true)),
    onRetryGame: () => dispatch(stateGame(false)),
    onReStartGame: () => dispatch(reStartGame()),
    onStartGame: () => dispatch(startGame()),
  };
};
