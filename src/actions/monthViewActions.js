export const GET_LIST_DATA_TO_CURRENT_MONTH = `MONTH_VIEW_GET_LIST_DATA_TO_CURRENT_MONTH`;
export const ADD_ITEM = `MONTH_VIEW_ADD_ITEM`;

export const monthViewActions = {
    [ ADD_ITEM ]: (data) => ({
        type: ADD_ITEM,
        payload: {
            item: data
        }
    }),

    [ GET_LIST_DATA_TO_CURRENT_MONTH ]: (data) => ({ //mock
        type: GET_LIST_DATA_TO_CURRENT_MONTH,
        payload: {
            activeViewName: data
        }
    })
};
