import Immutable from 'immutable';
import { GET_LIST_DATA_TO_CURRENT_MONTH, ADD_ITEM } from '../actions/monthViewActions.js'

export default function monthViewReducer (state = Immutable.List(), action) {
    switch (action.type) {
        case ADD_ITEM: {
            const { item } = action.payload;

            return state.push(item);
        }

        default: {
            return state;
        }
    }
}
