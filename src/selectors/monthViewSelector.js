import { createSelector } from 'reselect';
import { getFullFutureState } from './crudSelector.js';

const getCurrentMonthViewState = state => getFullFutureState(state, 'MonthViewElement');
export const getSelectedDate = (state) => state['monthViewReducer'];

export const monthViewSelector = createSelector(
    [
        getCurrentMonthViewState,
        getSelectedDate,
        getProduct
    ],
    ( monthItems, selectDate ) => {
        const items = monthItems.filter(item => item.dateText === selectDate);
        const events = monthItems.map(item => {
                return {
                    date: item.dateText
                }
            });
        return {
            items,
            events
        };
    }
);
