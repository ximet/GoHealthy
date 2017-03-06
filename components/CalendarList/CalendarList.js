import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Calendar from '../Calendar/Calendar.js';
import Icon from '../Icon/Icon.js';

import styles from './CalendarListStyles.js';

class CalendarList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCancel: false
        }
    }


    toggleCancel () {
        this.setState({
            showCancel: !this.state.showCancel
        });
    }

    renderCancel () {
        if (this.state.showCancel) {
            return (
                <TouchableHighlight
                    onPress={this.toggleCancel()}>
                    <View>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </View>
                </TouchableHighlight>
            );
        } else {
            return null;
        }
    }

    render () {
        return (
            <View style={ styles.CalendarListComponent }>
                <View style={ styles.CalendarListHeader }>
                    <Text style={ styles.CalendarListTitle }>
                        { this.props.titleCalendar }
                    </Text>
                </View>
                <View>
                    <View style={ styles.CalendarListHidePanel }>
                        {this.renderCancel()}
                        <Icon name={'keyboard-arrow-down'} size={45}/>
                    </View>
                    <Calendar
                        events={ this.props.eventsCalendar }
                        scrollEnabled
                        showControls
                        titleFormat={ this.props.titleFormat }
                        dayHeadings={ this.props.dayHeadings }
                        today={ this.props.today }
                        onDateSelect={ this.props.onDateSelect }
                    />
                </View>
            </View>
        );
    }
}

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
