import { combineReducers } from 'redux';
import crudReducer from './crudReducer.js'
import appViewReducer from './appViewReducer.js'
import monthViewReducer from './monthViewReducer.js'



const rootReducer = combineReducers({
    crudReducer,
    appViewReducer,
    monthViewReducer
});

export default rootReducer;
