import { createSelector } from 'reselect';

export const getLabel = (state) => state['monthAddEditViewReducer'].getIn([ 'label' ]);
export const getPlace = (state) => state['monthAddEditViewReducer'].getIn([ 'place' ]);
export const getFullName = (state) => state['monthAddEditViewReducer'].getIn([ 'fullName' ]);
export const getDate = (state) => state['monthAddEditViewReducer'].getIn([ 'date' ]);


export const monthAddEditViewSelector = createSelector(
    [
        getLabel,
        getPlace,
        getFullName,
        getDate
    ],
    ( label, place, fullName ) => {
        return {
            label,
            place,
            fullName,
            date
        };
    }
);
