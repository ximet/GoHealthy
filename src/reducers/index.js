import { combineReducers } from 'redux';
import appViewReducer from './appViewReducer.js'
import monthViewReducer from './monthViewReducer.js'

const rootReducer = combineReducers({
    appViewReducer,
    monthViewReducer
});

export default rootReducer;
