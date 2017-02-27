import moment from 'moment';

import { SET_ACTIVE_VIEW, appViewActions } from './appViewActions.js';


export const ADD_ITEM = `MONTH_VIEW_ADD_ITEM`;
export const SELECT_DATE = `MONTH_VIEW_SELECT_DATE`;

export const monthViewActions = {

    [ ADD_ITEM ]: () =>
        (dispatch) => {
            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthAddEditView'));
    },

    [ SELECT_DATE ]: (date) => ({
        type: SELECT_DATE,
        values: {
            date: moment(date).format('YYYY-MM-DD')
        }
    }),
};
