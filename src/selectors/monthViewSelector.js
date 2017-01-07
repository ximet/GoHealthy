import { createSelector } from 'reselect';

const getSmth = state => state.monthView;

export const monthViewSelector = createSelector(
    [
        getSmth
    ],
    ( smth ) => {
        return {
            activeViewName: smth
        };
    }
);
