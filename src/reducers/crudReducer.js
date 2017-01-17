import Immutable from 'immutable';
import { ADD_ELEMENT, DELETE_ELEMENT, EDIT_ELEMENT } from '../actions/globalActions/crudActions.js'

export default function crudReducer (state = Immutable.List(), action) {
    switch (action.type) {
        case ADD_ELEMENT: {
            const { item } = action.payload;

            return null;
        }

        case DELETE_ELEMENT: {
            const { item } = action.payload;

            return null;
        }

        case EDIT_ELEMENT: {
            const { item } = action.payload;

            return null;
        }

        default: {
            return state;
        }
    }
}
