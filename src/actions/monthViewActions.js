export const GET_LIST_DATA_TO_CURRENT_MONTH = `MONTH_VIEW_GET_LIST_DATA_TO_CURRENT_MONTH`;

export const monthViewActions = {
    [ GET_LIST_DATA_TO_CURRENT_MONTH ]: (data) => ({ //mock
        type: GET_LIST_DATA_TO_CURRENT_MONTH,
        payload: {
            activeViewName: data
        }
    })
};
