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

export const getCurrentEndDate = () => {
    return getCurrentDate().endOf('day');
};

export const getCurrentYear = () => {
    return getCurrentDate().year();
};

export const getDifference = (startDate, endTimeValue) => {
    const format = "DD/MM/YYYY HH:mm:ss";

    return moment.utc(moment(endTimeValue, format).diff(moment(startDate, format)));
};

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
