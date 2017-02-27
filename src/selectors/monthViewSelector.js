import { createSelector } from 'reselect';
import { getFullFutureState } from './crudSelector.js';

const getCurrentMonthViewState = state => getFullFutureState(state, 'MonthViewElement');


export const monthViewSelector = createSelector(
    [
        getCurrentMonthViewState
    ],
    ( monthItems ) => {
        const items = monthItems;
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
