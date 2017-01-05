import Immutable from 'immutable';
import { SET_ACTIVE_VIEW_TYPE } from '../actions/appViewActions.js'

export function appViewReducer (state = {}, action) {
    switch (action.type) {
        case SET_ACTIVE_VIEW_TYPE: {
            const { activeViewName } = action.payload;
            const stack = new Immutable.Stack();

            return stack.push({
                viewName: activeViewName
            })
        }

        default: {
            return state;
        }
    }
}
