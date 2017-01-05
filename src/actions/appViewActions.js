export const SET_ACTIVE_VIEW_TYPE = `APP_VIEW_SET_ACTIVE_VIEW`;

export const appViewActions = {
    [ SET_ACTIVE_VIEW_TYPE ]: (viewName) => ({
        type: SET_ACTIVE_VIEW_TYPE,
        payload: {
            activeViewName: viewName
        }
    })
};
