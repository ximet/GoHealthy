import Immutable from 'immutable';
import { ADD_ELEMENT, DELETE_ELEMENT, EDIT_ELEMENT } from '../actions/globalActions/crudActions.js'

export default function crudReducer (state = Immutable.List(), action) {
    switch (action.type) {
        case ADD_ELEMENT: {
            const { element } = action.values;

            return null;
        }

        case DELETE_ELEMENT: {
            const { id } = action.values;

            return null;
        }

        case EDIT_ELEMENT: {
            const { element } = action.values;

            return null;
        }

        default: {
            return state;
        }
    }
}
