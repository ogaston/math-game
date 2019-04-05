import {
  correctAswer,
  wrongAswer,
  timeChaged,
  stateGame
} from "./actions/index";

export const mapStateToProps = state => {
  console.log(state)
  return {
    points: state.points,
    lives: state.lives,
    seconds: state.seconds,
    level: state.level,
    isFinished: state.isFinished
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onCorretAswer: s => dispatch(correctAswer(s)),
    onWrongAswer: () => dispatch(wrongAswer()),
    setTimeChanged: s => dispatch(timeChaged(s)),
    onEndGame: () => dispatch(stateGame(true)),
    onRetryGame: () => dispatch(stateGame(false))
  };
};
