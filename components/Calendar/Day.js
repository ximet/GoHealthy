import React from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';

class Day extends React.Component {

    getTouchableDayStyle = (customStyle, isWeekend, isSelected, isToday, event) => {
        const dayStyle = [ styles.dayCircleFiller, customStyle.dayCircleFiller ];

        if (isSelected) {
            if (isToday) {
                dayStyle.push(styles.currentDayCircle, customStyle.currentDayCircle);
            } else {
                dayStyle.push(styles.selectedDayCircle, customStyle.selectedDayCircle);
            }
        }

        if (event) {
            if (isSelected) {
                dayStyle.push(styles.hasEventDaySelectedCircle, customStyle.hasEventDaySelectedCircle, event.hasEventDaySelectedCircle);
            } else {
                dayStyle.push(styles.hasEventCircle, customStyle.hasEventCircle, event.hasEventCircle);
            }
        }
        return dayStyle;
    };

    getDayLabelStyle = (customStyle, isWeekend, isSelected, isToday, event) => {
        const dayLabelStyle = [ styles.day, customStyle.day ];

        if (isToday && !isSelected) {
            dayLabelStyle.push(styles.currentDayText, customStyle.currentDayText);
        } else if (isToday || isSelected) {
            dayLabelStyle.push(styles.selectedDayText, customStyle.selectedDayText);
        } else if (isWeekend) {
            dayLabelStyle.push(styles.weekendDayText, customStyle.weekendDayText);
        }

        if (event) {
            dayLabelStyle.push(styles.hasEventText, customStyle.hasEventText, event.hasEventText)
        }
        return dayLabelStyle;
    };

    render() {
        const {
            caption,
            customStyle,
            filler,
            event,
            isWeekend,
            isSelected,
            isToday,
            showEventIndicators,
        } = this.props;

        return filler
            ? (
                <TouchableWithoutFeedback>
                    <View style={ [ styles.dayButtonFiller, customStyle.dayButtonFiller ] }>
                        <Text style={ [ styles.day, customStyle.day ] } />
                    </View>
                </TouchableWithoutFeedback>
            )
            : (
                <TouchableOpacity onPress={ this.props.onPress }>
                    <View style={ [ styles.dayButton, customStyle.dayButton ] }>
                        <View style={ this.getTouchableDayStyle(customStyle, isWeekend, isSelected, isToday, event) }>
                            <Text style={ this.getDayLabelStyle(customStyle, isWeekend, isSelected, isToday, event) }>{ caption }</Text>
                        </View>
                        { showEventIndicators &&
                            <View style={ [
                                    styles.eventIndicatorFiller,
                                    customStyle.eventIndicatorFiller,
                                    event && styles.eventIndicator,
                                    event && customStyle.eventIndicator,
                                    event && event.eventIndicator
                                ] }
                            />
                        }
                    </View>
                </TouchableOpacity>
            );
    }
}

Day.propTypes = {
    caption: React.PropTypes.any,
    customStyle: React.PropTypes.object,
    filler: React.PropTypes.bool,
    event: React.PropTypes.object,
    isSelected: React.PropTypes.bool,
    isToday: React.PropTypes.bool,
    isWeekend: React.PropTypes.bool,
    onPress: React.PropTypes.func,
    showEventIndicators: React.PropTypes.bool
};

Day.defaultProps = {
    customStyle: {}
};



export default Day;
