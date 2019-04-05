import {
  SET_TIME,
  GAIN_POINTS,
  REMOVE_LIVE,
  CORRECT_ASWER,
  FINISH_GAME,
  RESTART_GAME
} from "../constants";

const initialState = {
  points: 0,
  lives: 3,
  seconds: 20,
  level: 1,
  isFinished: false,
};

export const aswerQuiz = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAIN_POINTS:
      const newPonts = state.points + action.payload;
      return Object.assign({}, state, {
        points: newPonts
      });
    case SET_TIME:
      return Object.assign({}, state, {
        seconds: action.payload
      });
    case CORRECT_ASWER:
      const newCorrectState = {
        points: state.points + action.payload.points,
        level: state.level + action.payload.level
      };
      return Object.assign({}, state, newCorrectState);
    case REMOVE_LIVE:
      const newLive = state.lives - action.payload;
      return Object.assign({}, state, {
        lives: newLive
      });
    case FINISH_GAME:
      return Object.assign({}, state, {
        isFinished: action.payload
      });
    case RESTART_GAME:
      return Object.assign({}, state, {
        points: 0,
        lives: 3,
        seconds: 20,
        level: 1,
        isFinished: false,
      });
    default:
      return state;
  }
}