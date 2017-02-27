import Immutable from 'immutable';
import { SELECT_DATE } from '../actions/monthViewActions.js';
import { initialState } from '../initials/monthInitials.js';


export default function monthViewReducer (state = initialState, action) {
    switch (action.type) {
        case SELECT_DATE: {
            return state.set('selectedDate', action.values.date)
        }

        default: {
            return state;
        }
    }
}
