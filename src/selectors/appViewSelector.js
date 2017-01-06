import { createSelector } from 'reselect';

const getActiveView = state => state;

export const appViewSelector = createSelector(
    [
        getActiveView
    ],
    ( activeView ) => {
        return {
            activeViewName: activeView
        };
    }
);
