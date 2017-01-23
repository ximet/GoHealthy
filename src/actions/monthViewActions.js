import { SAVE_ITEM, monthAddEditViewActions } from './monthAddEditViewActions.js';
import { SET_ACTIVE_VIEW, appViewActions } from './appViewActions.js';


export const GET_LIST_DATA_TO_CURRENT_MONTH = `MONTH_VIEW_GET_LIST_DATA_TO_CURRENT_MONTH`;
export const ADD_ITEM = `MONTH_VIEW_ADD_ITEM`;

export const monthViewActions = {

    [ ADD_ITEM ]: () =>
        (dispatch, getState) => {
            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthAddEditView'));
    },

    [ GET_LIST_DATA_TO_CURRENT_MONTH ]: () => ({
        type: GET_LIST_DATA_TO_CURRENT_MONTH
    }),
};
