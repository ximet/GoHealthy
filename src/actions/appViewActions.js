export const SET_ACTIVE_VIEW = `APP_VIEW_SET_ACTIVE_VIEW`;

export const appViewActions = {
    [ SET_ACTIVE_VIEW ]: (viewName, isGoToBack = true, isClearHistory = false) => ({
        type: SET_ACTIVE_VIEW,
        payload: {
            activeViewName: viewName,
            isGoToBack,
            isClearHistory
        }
    })
};
