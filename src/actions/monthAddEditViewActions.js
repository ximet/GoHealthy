const uuidV4 = require('uuid/v4');
import { ADD_ELEMENT, crudActions } from './globalActions/crudActions.js';
import { SET_ACTIVE_VIEW, appViewActions } from './appViewActions.js';


export const SAVE_ITEM = `MONTH_ADD_EDIT_VIEW_SAVE_ITEM`;
export const CHANGE_LABEL = `MONTH_ADD_EDIT_VIEW_CHANGE_LABEL`;
export const CHANGE_PLACE = `MONTH_ADD_EDIT_VIEW_CHANGE_PLACE`;
export const CHANGE_FULL_NAME = `MONTH_ADD_EDIT_VIEW_CHANGE_FULL_NAME`;


const item =
    {   label: "Отоларинголог",
        dateText: '8 Фев 2016',
        timeText: '11:00 - 12:30',
        centerText:'Нордин',
        doctorText: 'ЛОР'
    }; //TODO delete mock-object

export const monthAddEditViewActions = {
    [ CHANGE_LABEL ]: (value) => ({
        type: CHANGE_LABEL,
        values: {
            value
        }
    }),

    [ CHANGE_PLACE ]: (value) => ({
        type: CHANGE_PLACE,
        values: {
            value
        }
    }),

    [ CHANGE_FULL_NAME ]: (value) => ({
        type: CHANGE_FULL_NAME,
        values: {
            value
        }
    }),

    [ SAVE_ITEM ]: () =>
        (dispatch, getState) => {

            dispatch(crudActions[ADD_ELEMENT]({
                id: uuidV4(),
                type: 'MonthElement',
                item: item
            }));

            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthView'));
    },
};
