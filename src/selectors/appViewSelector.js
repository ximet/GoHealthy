import { createSelector } from 'reselect';

const getHistoryStack = state => state.appViewReducer;

const getActiveView = (state) => {
    return getHistoryStack(state).first();
};

export const appViewSelector = createSelector(
    [
        getActiveView
    ],
    ( activeView ) => {
        return {
            activeViewName: activeView.viewName
        };
    }
);
