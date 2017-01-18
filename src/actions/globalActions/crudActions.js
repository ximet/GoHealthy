export const ADD_ELEMENT = `CRUD_ACTIONS_ADD_ELEMENT`;
export const DELETE_ELEMENT = `CRUD_ACTIONS_DELETE_ELEMENT`;
export const EDIT_ELEMENT = `CRUD_ACTIONS_EDIT_ELEMENT`;

export const crudActions = {
    [ ADD_ELEMENT ]: (element) => ({
        type: ADD_ELEMENT,
        values: {
            element: element
        }
    }),

    [ DELETE_ELEMENT ]: (elementId) => ({
        type: DELETE_ELEMENT,
        values: {
            id: elementId
        }
    }),

    [ EDIT_ELEMENT ]: (element) => ({
        type: EDIT_ELEMENT,
        values: {
            element: element
        }
    })
};
