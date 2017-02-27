import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthViewSelector } from '../selectors/monthViewSelector.js';
import { monthViewActions, ADD_ITEM } from '../actions/monthViewActions.js';
import { getTitleCalendarFormat, getCurrentDate, monthNames, dayNames } from '../services/DateService.js';

import Calendar from '../../components/Calendar/Calendar.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import WeekList from '../../components/WeekList/WeekList.js';
import Button from '../../components/Button/Button.js';

const getList = (items) => {
    return items.length > 0
        ? (<WeekList items={items}/>)
        : (<TextLabel label={'На этот месяц ничего не запланировано.'} />)
};

const getFooter = (actionForButton) => {
    return (<Button label={'Текущий месяц'} onPressButton={actionForButton} />)
};

const getHeader = (actionForButton) => {
    return (<Button label={'добавить'} onPressButton={actionForButton} />)
};

export const MonthView = connect(monthViewSelector, monthViewActions)((props) => {

    return <View>
                <TextLabel label={'Тут будет хэдер.'} />
                {getHeader(props[ADD_ITEM])}
                <Calendar
                    events={ props.events }
                    scrollEnabled
                    showControls
                    monthNames={ monthNames }
                    titleFormat={ getTitleCalendarFormat() }
                    dayHeadings = { dayNames }
                    today={ getCurrentDate() }
                />

                {getList(props.items)}
                {getFooter(() => {})}
        </View>
});
