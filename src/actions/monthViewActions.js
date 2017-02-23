import { SET_ACTIVE_VIEW, appViewActions } from './appViewActions.js';


export const ADD_ITEM = `MONTH_VIEW_ADD_ITEM`;

export const monthViewActions = {

    [ ADD_ITEM ]: () =>
        (dispatch) => {
            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthAddEditView'));
    }
};
