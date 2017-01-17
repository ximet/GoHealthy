import { createSelector } from 'reselect';

const getCurrentMonthViewState = state => state.monthView;

export const monthViewSelector = createSelector(
    [
        getCurrentMonthViewState
    ],
    ( monthItems ) => {
        const items = monthItems;

        return {
            items: []
        };
    }
);
