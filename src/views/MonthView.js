import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthViewSelector } from '../selectors/monthViewSelector.js';
import { monthViewActions, ADD_ITEM, SELECT_DATE, CURENT_MONTH } from '../actions/monthViewActions.js';
import { getTitleCalendarFormat, getCurrentDate, monthNames, dayNames } from '../services/DateService.js';

import CalendarList from '../../components/CalendarList/CalendarList.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import WeekList from '../../components/WeekList/WeekList.js';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';
import ViewScreen from '../../components/ViewScreen/ViewScreen.js';

const getList = (items) => {
    return items.length > 0
        ? (<WeekList items={items}/>)
        : (<TextLabel label={'На этот день ничего не запланировано.'} />)
};

const getFooter = (actionForButton) => {
    return (<Button label={'Текущий месяц'} onPressButton={actionForButton} />)
};

const getHeader = (actionForButton) => {
    return (<Button label={'добавить'} onPressButton={actionForButton} />)
};

export const MonthView = connect(monthViewSelector, monthViewActions)((props) => {

    return <ViewScreen>
                <Row isElastic={true}>
                    <TextLabel label={'Тут будет хэдер.'} />
                    {getHeader(props[ADD_ITEM])}
                    <CalendarList
                        titleCalendar={ 'Март' }
                        eventsCalendar={ props.events }
                        titleFormat={ getTitleCalendarFormat() }
                        dayHeadings = { dayNames }
                        today={ getCurrentDate() }
                        onDateSelect={(date) => props[SELECT_DATE](date)}
                    />

                    {getList(props.items)}
                </Row>
                {getFooter(props[CURENT_MONTH])}
        </ViewScreen>
});
