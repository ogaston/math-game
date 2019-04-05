import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { aswerQuiz } from './reducers/index'


export default compose(applyMiddleware(thunk))(createStore)(aswerQuiz) // store;