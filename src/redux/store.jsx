import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { answerQuiz } from './reducers/index'


export default compose(applyMiddleware(thunk))(createStore)(answerQuiz) // store;