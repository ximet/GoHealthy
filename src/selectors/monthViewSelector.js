import { createSelector } from 'reselect';
import { getFullFutureState } from './crudSelector.js';

const getCurrentMonthViewState = state => getFullFutureState(state, 'MonthViewElement');


export const monthViewSelector = createSelector(
    [
        getCurrentMonthViewState
    ],
    ( monthItems ) => {
        const items = monthItems;
        const events = [{date: '2017-02-03'}];
        return {
            items,
            events
        };
    }
);
