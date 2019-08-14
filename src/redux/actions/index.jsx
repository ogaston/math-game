import {
  REMOVE_LIVE,
  CORRECT_ANSWER,
  SET_TIME,
  FINISH_GAME,
  RESTART_GAME,
  REBOOT_GAME,
  START_GAME,
  EARN_LIFE
} from "../constants/index";

export const correctAnswer = () => (dispatch) => {
    dispatch({ type: CORRECT_ANSWER, payload: { points: 100, level: 1} });
    
};

export const wrongAnswer = () => (dispatch) => {
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

export const reStartGame = () => (dispatch) => {
    dispatch({ type: REBOOT_GAME });
}

export const startGame = () => (dispatch) => {
    dispatch({ type: START_GAME });
}

export const earnLife = () => dispatch => {
    dispatch({ type: EARN_LIFE });
}
