import uuid from 'node-uuid';
import { ADD_ELEMENT, crudActions } from './globalActions/crudActions.js';
import { GO_TO_BACK, appViewActions } from './appViewActions.js';


export const SAVE_ITEM = `MONTH_ADD_EDIT_VIEW_SAVE_ITEM`;


const item =
    {   label: "Отоларинголог",
        dateText: '8 Фев 2016',
        timeText: '11:00 - 12:30',
        centerText:'Нордин',
        doctorText: 'ЛОР'
    }; //TODO delete mock-object

export const monthAddEditViewActions = {
    [ SAVE_ITEM ]: (data) => ({
        type: ADD_ITEM,
        values: {
            item: item
        }
    }),

    [ SAVE_ITEM ]: () =>
        (dispatch, getState) => {

            dispatch(crudActions[ADD_ELEMENT]({
                id: uuid.v4(),
                type: 'MonthElement',
                item: item
            }));

            dispatch(appViewActions[ GO_TO_BACK ]());
    },
};
