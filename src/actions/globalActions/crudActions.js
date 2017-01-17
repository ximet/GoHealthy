export const ADD_ELEMENT = `CRUD_ACTIONS_ADD_ELEMENT`;
export const DELETE_ELEMENT = `CRUD_ACTIONS_DELETE_ELEMENT`;
export const EDIT_ELEMENT = `CRUD_ACTIONS_EDIT_ELEMENT`;

export const crudActions = {
    [ ADD_ELEMENT ]: (data) => ({
        type: ADD_ELEMENT,
        payload: {
            item: data
        }
    }),

    [ DELETE_ELEMENT ]: (data) => ({
        type: DELETE_ELEMENT,
        payload: {
            item: data
        }
    }),

    [ EDIT_ELEMENT ]: (data) => ({
        type: EDIT_ELEMENT,
        payload: {
            item: data
        }
    })
};
