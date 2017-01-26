import { createSelector } from 'reselect';

export const getLabel = (state) => {
    const lab = state;

    state['monthAddEditViewReducer'].getIn([ 'label' ]);
};
export const getPlace = (state) => state['monthAddEditViewReducer'].getIn([ 'place' ]);
export const getFullName = (state) => state['monthAddEditViewReducer'].getIn([ 'fullName' ]);

export const monthAddEditViewSelector = createSelector(
    [
        getLabel,
        getPlace,
        getFullName
    ],
    ( label, place, fullName ) => {
        return {
            label,
            place,
            fullName
        };
    }
);
