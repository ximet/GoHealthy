import moment from 'moment';

export const getCurrentDate = () => {
    return moment();
};

export const getDate = (date) => {
    return moment(date);
};

export const getTitleCalendarFormat = () => {
    return 'MMMM YYYY';
};

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
