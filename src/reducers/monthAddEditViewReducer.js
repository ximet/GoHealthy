import { CHANGE_LABEL, CHANGE_PLACE, CHANGE_FULL_NAME } from '../actions/monthAddEditViewActions.js';
import { initialState } from '../initials/monthAddEditViewInitials.js';


export default function monthViewReducer (state = initialState, action) {
    switch (action.type) {

        case CHANGE_LABEL: {
            return state.set('label', action.values.value)
        }

        case CHANGE_PLACE: {
            return state.set('place', action.values.value)
        }

        case CHANGE_FULL_NAME: {
            return state.set('fullName', action.values.value)
        }

        default: {
            return state;
        }
    }
}
