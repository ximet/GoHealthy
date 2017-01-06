import { combineReducers } from 'redux';
import counter from './counter';
import appViewReducer from './appViewReducer.js'

const rootReducer = combineReducers({
    counter,
    appViewReducer
});

export default rootReducer;
