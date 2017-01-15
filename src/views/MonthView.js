import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthViewSelector } from '../selectors/monthViewSelector.js';
import { monthViewActions } from '../actions/monthViewActions.js';
import { getTitleCalendarFormat, getCurrentDate, monthNames, dayNames } from '../services/DateService.js';

import Calendar from '../../components/Calendar/Calendar.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import WeekList from '../../components/WeekList/WeekList.js';
import Button from '../../components/Button/Button.js';


const items = [
    {   label: "Отоларинголог",
        dateText: '8 Фев 2016',
        timeText: '11:00 - 12:30',
        centerText:'Нордин',
        doctorText: 'ЛОР'
    }
];

const getList = (items) => {
    return items.length > 0
        ? (<WeekList items={items}/>)
        : (<TextLabel label={'На этот месяц ничего не запланировано.'} />)
};

const getFooter = (actionForButton) => {
    return (<Button label={'Текущий месяц'} onPressButton={actionForButton} />)
};

export const MonthView = connect(monthViewSelector, monthViewActions)((props) => {

    return <View>
                <Calendar
                    eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
                    events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
                    scrollEnabled
                    showControls
                    monthNames={ monthNames }
                    titleFormat={ getTitleCalendarFormat() }
                    prevButtonText={'Prev'}
                    nextButtonText={'Next'}
                    dayHeadings = { dayNames }
                    today={ getCurrentDate() }
                    onDateSelect={(date) => console.log('Date selected:', date)}
                    onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
                    onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
                    onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
                    onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
                />

                {getList(items)}
                {getFooter(() => {})}
        </View>
});
