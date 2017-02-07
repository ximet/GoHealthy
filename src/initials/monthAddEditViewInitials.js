import Immutable from 'immutable';

export const initialState = new Immutable.Map({
    label: '',
    place: '',
    fullName: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    category: '',
    description: '',
    group: '',
    acceptVisit: false
});
