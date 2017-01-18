import Immutable from 'immutable';
import { ADD_ELEMENT, DELETE_ELEMENT, EDIT_ELEMENT } from '../actions/globalActions/crudActions.js'

const addElement = (state, element) => {
    return state.push(element);
};

const deleteElement = (state, id) => {
    const indexElementForDelete = state.findIndex(item => item.id === id);

    return state.delete(indexElementForDelete);
};

export default function crudReducer (state = Immutable.List(), action) {
    switch (action.type) {
        case ADD_ELEMENT: {
            const { element } = action.values;

            return addElement(state, element);
        }

        case DELETE_ELEMENT: {
            const { id } = action.values;

            return deleteElement(state, id);
        }

        case EDIT_ELEMENT: {
            const { id, element } = action.values;
            const currentState = deleteElement(state, id);

            return addElement(currentState, element);
        }

        default: {
            return state;
        }
    }
}
