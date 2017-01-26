import { combineReducers } from 'redux';
import crudReducer from './crudReducer.js'
import appViewReducer from './appViewReducer.js'
import monthViewReducer from './monthViewReducer.js'
import monthAddEditViewReducer from './monthAddEditViewReducer.js'


const rootReducer = combineReducers({
    crudReducer,
    appViewReducer,
    monthViewReducer,
    monthAddEditViewReducer
});

export default rootReducer;
