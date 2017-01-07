const prefixActions = 'APP_VIEW_';

export const SET_ACTIVE_VIEW = `${prefixActions}SET_ACTIVE_VIEW`;
export const GO_TO_BACK = `${prefixActions}GO_TO_BACK`;

export const appViewActions = {
    [ SET_ACTIVE_VIEW ]: (viewName, isGoToBack = true, isClearHistory = false) => ({
        type: SET_ACTIVE_VIEW,
        payload: {
            activeViewName: viewName,
            isGoToBack,
            isClearHistory
        }
    }),
    [ GO_TO_BACK ]: () => ({
        type: GO_TO_BACK
    }),
};
