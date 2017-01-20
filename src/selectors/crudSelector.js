import { createSelector } from 'reselect';

const getCrudState = state => state.crudReducer;

export const getFullFutureState = (state, type) => {
    const currentState = getCrudState(state);

    return null; //need fix
};
