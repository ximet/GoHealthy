import React from 'app.platform/react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Immutable from 'immutable';
import moment from 'moment';
import is from 'is_js';
import Day from './Day.js';

const getWeeks = (date) => {
    const DAYS_IN_WEEK = 7;
    const MAX_WEEKS_IN_MONTH = 6;
    const MAX_DAYS_IN_MONTH = DAYS_IN_WEEK * MAX_WEEKS_IN_MONTH;
    const firstOfMonth = date.clone().startOf('month');

    return new Immutable.Range(1, MAX_DAYS_IN_MONTH + 1)
        .filter(d => firstOfMonth.clone().day(d).month() === firstOfMonth.month())
        .map(d => firstOfMonth.clone().day(d))
        .groupBy(d => d.week());
};

const onTouchStart = (e) => {
    e.target.parentNode.parentNode.classList.add('js-active');
};

const onTouchEnd = (e) => {
    e.target.parentNode.parentNode.classList.remove('js-active');
};

const getColorDay = (items, currentDay, defaultColor) => {
    let colorDay = null;
    const eventDays = items.filter(item => item.date.isSame(currentDay));

    if (eventDays.length !== 0) {
        colorDay = eventDays.length > 1 ? defaultColor : eventDays[0].color;
    }

    return colorDay;
};

const renderWeeks = (month, currentDay, items, defaultColor, onDayClick) => {
    return getWeeks(month)
        .map((week, numWeek) => {
            return (<View style={styles.TableRow} key={numWeek}>
                {  new Immutable.Range(0, 7).map(numDay =>{
                    const day = week.find(d => d.weekday() === numDay);
                    const colorDay = getColorDay(items, day, defaultColor);
                    let isOldDay = false;

                    if (is.not.undefined(day)) {
                        isOldDay = (Number(day.format('DD')) < Number(moment().format('DD'))
                            && Number(day.format('MM')) <= Number(moment().format('MM')))
                            || (Number(day.format('MM')) < Number(moment().format('MM')))
                            || (Number(day.format('YYYY')) < Number(moment().format('YYYY')));

                        if (Number(day.format('YYYY')) > Number(moment().format('YYYY'))) {
                            isOldDay = false;
                        }
                    }

                    return <View style={styles.TableCell} key={numDay} onTouchStart={ onTouchStart } onTouchEnd={ onTouchEnd }>
                        {day &&
                        <Day
                            day={day}
                            colorDay={colorDay}
                            onDayClick={ onDayClick }
                            currentDay={ currentDay }
                            isOldDay={ isOldDay }
                        />
                        }
                    </View>>
                })
                }
            </View>)
        })


};

const renderDaysOfWeek = (dayOfWeek) => {
    return dayOfWeek.map(dayName => {
        return (<View style={styles.DayName}>
            {dayName}
        </View>)
    });
};

const Month = (props) => {
    const monthTitle = props.month.format(props.monthFormat);

    return <View style={styles.MonthContainer}>
        <View style={styles.Table}>
            <View style={styles.TableCaption}>
                <Text>{monthTitle}</Text>
            </View>

            <View style={styles.TableBody}>
            <View style={styles.TableRow}>
                { renderDaysOfWeek(props.dayOfWeek)}
            </View>
            { renderWeeks(props.month, props.currentDay, props.items, props.defaultColor, props.onDayClick) }
            </View>
        </View>
    </View>
};

Month.displayName = 'Month';
Month.ancestor = BaseComponent;

Month.propTypes = {
    month: React.PropTypes.object.isRequired,
    currentDay: React.PropTypes.object.isRequired,
    defaultColor: React.PropTypes.string.isRequired,
    items: React.PropTypes.array,
    dayOfWeek: React.PropTypes.array.isRequired,
    onDayClick: React.PropTypes.func,
    monthFormat: React.PropTypes.string,
    isVisible: React.PropTypes.bool
};

Month.defaultProps = {
    items: [],
    onDayClick: () => {},
    monthFormat: 'MMMM YYYY',
    isVisible: true
};

export default Month;

