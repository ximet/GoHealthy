import React from 'react';
import { StyleSheet, View } from 'react-native';

import Month from './Month.js';

const Calendar = (props) => {
    return <View style={styles.CalendarContainer} onClick={ props.onClick }>
        <Month
            key={ props.month }
            month={ props.month }
            dayOfWeek={ props.dayOfWeek }
            currentDay={ props.currentDay }
            items={ props.items }
            defaultColor= { props.defaultColor }
            monthFormat={ props.monthFormat }
            onDayClick={ props.onDayClick }
        />
    </View>
};

Calendar.propTypes = {
    month: React.PropTypes.object.isRequired,
    dayOfWeek: React.PropTypes.array.isRequired,
    currentDay: React.PropTypes.object.isRequired,
    defaultColor: React.PropTypes.string.isRequired,
    monthFormat: React.PropTypes.string,
    items: React.PropTypes.array,
    onDayClick: React.PropTypes.func
};

Calendar.defaultProps = {
    monthFormat: 'MMMM YYYY',
    items: [],
    onDayClick: () => {}
};

export default Calendar;

