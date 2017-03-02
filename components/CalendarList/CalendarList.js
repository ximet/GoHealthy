import React from 'react';
import { View, Text } from 'react-native';
import Calendar from '../Calendar/Calendar.js';
import Icon from '../Icon/Icon.js';

import styles from './CalendarListStyles.js';

const CalendarList = (props) => {

    return (
        <View style={ styles.CalendarListComponent }>
            <View>
                <Text>
                    { props.titleCalendar }
                </Text>
            </View>
            <View>
                <View>
                    <Icon />
                </View>
                <Calendar
                    events={ props.eventsCalendar }
                    scrollEnabled
                    showControls
                    titleFormat={ props.titleFormat }
                    dayHeadings = { props.dayHeadings }
                    today={ props.today }
                    onDateSelect={ props.onDateSelect }
                />
            </View>
        </View>
    );
};

CalendarList.propTypes = {
    titleCalendar: React.PropTypes.string,
    eventsCalendar: React.PropTypes.array,
    titleFormat: React.PropTypes.string,
    dayHeadings: React.PropTypes.array.isRequired,
    today: React.PropTypes.any.isRequired,
    onDateSelect: React.PropTypes.func
};

CalendarList.defaultProps = {
};

export default CalendarList;
