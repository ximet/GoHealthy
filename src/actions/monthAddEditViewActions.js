const uuidV4 = require('uuid/v4');
import { ADD_ELEMENT, crudActions } from './globalActions/crudActions.js';
import { SET_ACTIVE_VIEW, appViewActions } from './appViewActions.js';
import { getLabel, getPlace, getFullName, getDate, getTimeFrom, getTimeTo, getCategory, getDescription, getGroup, getAcceptVisit } from '../selectors/monthAddEditViewSelector.js';


export const SAVE_ITEM = `MONTH_ADD_EDIT_VIEW_SAVE_ITEM`;
export const CHANGE_LABEL = `MONTH_ADD_EDIT_VIEW_CHANGE_LABEL`;
export const CHANGE_PLACE = `MONTH_ADD_EDIT_VIEW_CHANGE_PLACE`;
export const CHANGE_DATE = `MONTH_ADD_EDIT_VIEW_CHANGE_DATE`;
export const CHANGE_FULL_NAME = `MONTH_ADD_EDIT_VIEW_CHANGE_FULL_NAME`;

export const CHANGE_TIME_FROM = `MONTH_ADD_EDIT_VIEW_CHANGE_TIME_FROM`;
export const CHANGE_TIME_TO = `MONTH_ADD_EDIT_VIEW_CHANGE_TIME_TO`;
export const CHANGE_CATEGORY = `MONTH_ADD_EDIT_VIEW_CHANGE_CATEGORY`;
export const CHANGE_DESCRIPTION = `MONTH_ADD_EDIT_VIEW_CHANGE_DESCRIPTION`;
export const CHANGE_GROUP = `MONTH_ADD_EDIT_VIEW_CHANGE_GROUP`;
export const CHANGE_ACCEPT_VISIT = `MONTH_ADD_EDIT_VIEW_CHANGE_ACCEPT_VISIT`;



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

    [ CHANGE_DATE ]: (value) => ({
        type: CHANGE_DATE,
        values: {
            value
        }
    }),

    [ CHANGE_TIME_FROM ]: (value) => ({
        type: CHANGE_TIME_FROM,
        values: {
            value
        }
    }),

    [ CHANGE_TIME_TO ]: (value) => ({
        type: CHANGE_TIME_TO,
        values: {
            value
        }
    }),

    [ CHANGE_CATEGORY ]: (value) => ({
        type: CHANGE_CATEGORY,
        values: {
            value
        }
    }),

    [ CHANGE_DESCRIPTION ]: (value) => ({
        type: CHANGE_DESCRIPTION,
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

    [ CHANGE_GROUP ]: (value) => ({
        type: CHANGE_GROUP,
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

    [ CHANGE_ACCEPT_VISIT ]: (value) => ({
        type: CHANGE_ACCEPT_VISIT,
        values: {
            value
        }
    }),

    [ SAVE_ITEM ]: () =>
        (dispatch, getState) => {
            const state = getState();

            dispatch(crudActions[ADD_ELEMENT]({
                id: uuidV4(),
                type: 'MonthViewElement',
                label: getLabel(state),
                centerText: getPlace(state),
                doctorText: getFullName(state),
                dateText: getDate(state),
                timeFrom: getTimeFrom(state),
                timeTo: getTimeTo(state),
                category: getCategory(state),
                description: getDescription(state),
                group: getGroup(state),
                acceptVisit: getAcceptVisit(state)
            }));

            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthView'));
    },
};
