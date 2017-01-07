import Immutable from 'immutable';
import { GET_LIST_DATA_TO_CURRENT_MONTH } from '../actions/monthViewActions.js'

export default function appViewReducer (state = {}, action) {
    switch (action.type) {
        case GET_LIST_DATA_TO_CURRENT_MONTH: {
            const { data } = action.payload;

            return new Immutable.List(data);
        }

        default: {
            return state;
        }
    }
}
