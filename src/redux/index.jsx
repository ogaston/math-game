import {
  correctAnswer,
  wrongAnswer,
  timeChaged,
  stateGame,
  reStartGame,
  startGame,
  earnLife
} from "./actions/index";

export const mapStateToProps = state => {
  return {
    points: state.points,
    lifes: state.lifes,
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
    onEarnLife: () => dispatch(earnLife()),
  };
};
