const getCrudState = state => state.crudReducer;

export const getFullFutureState = (state, type) => {
    const currentState = getCrudState(state);

    return currentState.map(item => item.type === type ? item : []).toJS();
};
