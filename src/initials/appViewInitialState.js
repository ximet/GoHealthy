import Immutable from 'immutable';

export const initialState = new Immutable.Map({
    history: new Immutable.Stack(),
    language: null
});
