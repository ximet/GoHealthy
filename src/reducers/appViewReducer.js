import Immutable from 'immutable';
import { SET_ACTIVE_VIEW, GO_TO_BACK, SET_ACTIVE_LANGUAGE } from '../actions/appViewActions.js';
import { initialState } from '../initials/appViewInitialState.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_VIEW: {
            const { activeViewName, isGoToBack, isClearHistory } = action.values;

            return state.update('history', (history) => {
                const stack = isClearHistory ? new Immutable.Stack() : history;

                return stack.push({
                    viewName: activeViewName,
                    isGoToBack
                })
            });
        }

        case GO_TO_BACK: {
            return state.update('history', (history) => {
                const currentHistory = getCurrentHistory(history);

                if (currentHistory !== null) {
                    return currentHistory;
                }
            });
        }

        case SET_ACTIVE_LANGUAGE: {
            return state.set('language', action.values.language)
        }

        default: {
            return state;
        }
    }
}

const getCurrentHistory = (history) => {
    let currentHistory = null;
    const lastViewName = history.first().viewName;
    const newHistory = history.pop();

    if (newHistory.size === 0) {
        currentHistory = newHistory;
    }
    else {
        const newItem = newHistory.first();
        const newViewName = newItem.viewName;
        const newIsGoToBack = newItem.isGoToBack;

        if (newIsGoToBack && (lastViewName !== newViewName)) {
            currentHistory = newHistory;
        }
        else
        {
            currentHistory = getCurrentHistory(newHistory);
        }
    }

    return currentHistory;
};
