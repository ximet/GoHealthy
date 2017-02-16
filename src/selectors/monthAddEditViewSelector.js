import { createSelector } from 'reselect';

export const getLabel = (state) => state['monthAddEditViewReducer'].getIn([ 'label' ]);
export const getPlace = (state) => state['monthAddEditViewReducer'].getIn([ 'place' ]);
export const getFullName = (state) => state['monthAddEditViewReducer'].getIn([ 'fullName' ]);
export const getDate = (state) => state['monthAddEditViewReducer'].getIn([ 'date' ]);
export const getTimeFrom = (state) => state['monthAddEditViewReducer'].getIn([ 'timeFrom' ]);
export const getTimeTo = (state) => state['monthAddEditViewReducer'].getIn([ 'timeTo' ]);
export const getCategory = (state) => state['monthAddEditViewReducer'].getIn([ 'category' ]);
export const getDescription = (state) => state['monthAddEditViewReducer'].getIn([ 'description' ]);
export const getGroup = (state) => state['monthAddEditViewReducer'].getIn([ 'group' ]);
export const getAcceptVisit = (state) => state['monthAddEditViewReducer'].getIn([ 'acceptVisit' ]);

export const monthAddEditViewSelector = createSelector(
    [
        getLabel,
        getPlace,
        getFullName,
        getDate,
        getTimeFrom,
        getTimeTo,
        getCategory,
        getDescription,
        getGroup,
        getAcceptVisit
    ],
    ( label, place, fullName, date, timeFrom, timeTo, category, description, group, acceptInvite ) => {
        return {
            label,
            place,
            fullName,
            date,
            timeFrom,
            timeTo,
            category,
            description,
            group,
            acceptInvite
        };
    }
);
