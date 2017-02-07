import { CHANGE_LABEL, CHANGE_PLACE, CHANGE_FULL_NAME, CHANGE_DATE, CHANGE_TIME_FROM, CHANGE_TIME_TO, CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_GROUP, CHANGE_ACCEPT_VISIT } from '../actions/monthAddEditViewActions.js';
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

        case CHANGE_DATE: {
            return state.set('date', action.values.value)
        }

        case CHANGE_TIME_FROM: {
            return state.set('timeFrom', action.values.value)
        }

        case CHANGE_TIME_TO: {
            return state.set('timeTo', action.values.value)
        }

        case CHANGE_CATEGORY: {
            return state.set('category', action.values.value)
        }

        case CHANGE_DESCRIPTION: {
            return state.set('description', action.values.value)
        }

        case CHANGE_GROUP: {
            return state.set('group', action.values.value)
        }

        case CHANGE_ACCEPT_VISIT: {
            return state.set('acceptVisit', action.values.value)
        }

        default: {
            return state;
        }
    }
}
