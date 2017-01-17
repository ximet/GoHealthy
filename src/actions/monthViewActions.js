export const GET_LIST_DATA_TO_CURRENT_MONTH = `MONTH_VIEW_GET_LIST_DATA_TO_CURRENT_MONTH`;
export const ADD_ITEM = `MONTH_VIEW_ADD_ITEM`;


const item =
    {   label: "Отоларинголог",
        dateText: '8 Фев 2016',
        timeText: '11:00 - 12:30',
        centerText:'Нордин',
        doctorText: 'ЛОР'
    }; //TODO delete mock-object

export const monthViewActions = {
    [ ADD_ITEM ]: (data) => ({
        type: ADD_ITEM,
        payload: {
            item: item
        }
    })
};
