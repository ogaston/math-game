import {
  ADD_TIME,
  GAIN_POINTS,
  REMOVE_LIVE,
  CORRECT_ASWER,
  SET_TIME,
  FINISH_GAME,
  RESTART_GAME
} from "../constants/index";

export const correctAswer = () => (dispatch) => {
    dispatch({ type: CORRECT_ASWER, payload: { points: 100, level: 1} });
    
};

export const wrongAswer = () => (dispatch) => {
    dispatch({ type: REMOVE_LIVE, payload: 1 });
}


export const timeChaged = seconds => (dispatch) => {
    dispatch({ type: SET_TIME, payload: seconds });    
}

export const stateGame = (bol) => (dispatch) => {
    if (bol) {
        dispatch({ type: FINISH_GAME, payload: true });
    } else {
        dispatch({ type: RESTART_GAME, payload: true });
    }
}
