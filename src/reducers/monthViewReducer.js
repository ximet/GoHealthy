import Immutable from 'immutable';
import { GET_LIST_DATA_TO_CURRENT_MONTH, ADD_ITEM } from '../actions/monthViewActions.js';
import { getFullFutureState } from '../selectors/crudSelector.js';


export default function monthViewReducer (state = Immutable.List(), action) {
    switch (action.type) {

        case GET_LIST_DATA_TO_CURRENT_MONTH: {
            const stateList = getFullFutureState(state, 'MonthElement'); //need check
        }

        default: {
            return state;
        }
    }
}
