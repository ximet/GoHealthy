import React from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import Day from './Day';
import styles from './styles';

const DEVICE_WIDTH = Dimensions.get('window').width;
const VIEW_INDEX = 2;

class Calendar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentMonthMoment: moment(this.props.startDate),
            selectedMoment: moment(this.props.selectedDate)
        }
    }

    componentDidMount() {
        // fixes initial scrolling bug on Android
        setTimeout(() => this.scrollToItem(VIEW_INDEX), 0)
    }

    componentDidUpdate() {
        this.scrollToItem(VIEW_INDEX);
    }

    componentWillReceiveProps(props) {
        if (props.selectedDate) {
            this.setState({selectedMoment: props.selectedDate});
        }
    }

    getMonthStack(currentMonth) {
        if (this.props.scrollEnabled) {
            const res = [];
            for (let i = -VIEW_INDEX; i <= VIEW_INDEX; i++) {
                res.push(moment(currentMonth).add(i, 'month'));
            }
            return res;
        }
        return [moment(currentMonth)];
    }

    prepareEventDates(eventDates, events) {
        const parsedDates = {};

        // Dates without any custom properties
        eventDates.forEach(event => {
            const date = moment(event);
            const month = moment(date).startOf('month').format();
            parsedDates[month] = parsedDates[month] || {};
            parsedDates[month][date.date() - 1] = {};
        });

        // Dates with custom properties
        if (events) {
            events.forEach(event => {
                if (event.date) {
                    const date = moment(event.date);
                    const month = moment(date).startOf('month').format();
                    parsedDates[month] = parsedDates[month] || {};
                    parsedDates[month][date.date() - 1] = event;
                }
            });
        }
        return parsedDates;
    }

    selectDate(date) {
        this.setState({ selectedMoment: date });
        this.props.onDateSelect && this.props.onDateSelect(date ? date.format(): null );
    }

    onPrev = () => {
        const newMoment = moment(this.state.currentMonthMoment).subtract(1, 'month');
        this.setState({ currentMonthMoment: newMoment });
        this.props.onTouchPrev && this.props.onTouchPrev(newMoment);
    }

    onNext = () => {
        const newMoment = moment(this.state.currentMonthMoment).add(1, 'month');
        this.setState({ currentMonthMoment: newMoment });
        this.props.onTouchNext && this.props.onTouchNext(newMoment);
    }

    scrollToItem(itemIndex) {
        const scrollToX = itemIndex * this.props.width;
        if (this.props.scrollEnabled) {
            this._calendar.scrollTo({ y: 0, x: scrollToX, animated: false });
        }
    }

    scrollEnded(event) {
        const position = event.nativeEvent.contentOffset.x;
        const currentPage = position / this.props.width;
        const newMoment = moment(this.state.currentMonthMoment).add(currentPage - VIEW_INDEX, 'month');
        this.setState({ currentMonthMoment: newMoment });

        if (currentPage < VIEW_INDEX) {
            this.props.onSwipePrev && this.props.onSwipePrev(newMoment);
        } else if (currentPage > VIEW_INDEX) {
            this.props.onSwipeNext && this.props.onSwipeNext(newMoment);
        }
    }

    renderMonthView(argMoment, eventsMap) {

        let
            renderIndex = 0,
            weekRows = [],
            days = [],
            startOfArgMonthMoment = argMoment.startOf('month');

        const
            selectedMoment = moment(this.state.selectedMoment),
            weekStart = this.props.weekStart,
            todayMoment = moment(this.props.today),
            todayIndex = todayMoment.date() - 1,
            argMonthDaysCount = argMoment.daysInMonth(),
            offset = (startOfArgMonthMoment.isoWeekday() - weekStart + 7) % 7,
            argMonthIsToday = argMoment.isSame(todayMoment, 'month'),
            selectedIndex = moment(selectedMoment).date() - 1,
            selectedMonthIsArg = selectedMoment.isSame(argMoment, 'month');

        const events = (eventsMap !== null)
            ? eventsMap[argMoment.startOf('month').format()]
            : null;

        do {
            const dayIndex = renderIndex - offset;
            const isoWeekday = (renderIndex + weekStart) % 7;

            if (dayIndex >= 0 && dayIndex < argMonthDaysCount) {
                days.push((
                    <Day
                        startOfMonth={startOfArgMonthMoment}
                        isWeekend={isoWeekday === 0 || isoWeekday === 6}
                        key={`${renderIndex}`}
                        onPress={() => {
                            this.selectDate(moment(startOfArgMonthMoment).set('date', dayIndex + 1));
                        }}
                        caption={`${dayIndex + 1}`}
                        isToday={argMonthIsToday && (dayIndex === todayIndex)}
                        isSelected={selectedMonthIsArg && (dayIndex === selectedIndex)}
                        event={events && events[dayIndex]}
                        showEventIndicators={this.props.showEventIndicators}
                        customStyle={this.props.customStyle}
                    />
                ));
            } else {
                days.push(<Day key={`${renderIndex}`} filler customStyle={this.props.customStyle} />);
            }
            if (renderIndex % 7 === 6) {
                weekRows.push(
                    <View
                        key={weekRows.length}
                        style={[styles.weekRow, this.props.customStyle.weekRow]}
                    >
                        {days}
                    </View>);
                days = [];
                if (dayIndex + 1 >= argMonthDaysCount) {
                    break;
                }
            }
            renderIndex += 1;
        } while (true)
        const containerStyle = [styles.monthContainer, this.props.customStyle.monthContainer];
        return <View key={argMoment.month()} style={containerStyle}>{weekRows}</View>;
    }

    renderHeading() {
        const headings = [];
        for (let i = 0; i < 7; i++) {
            const j = (i + this.props.weekStart) % 7;
            headings.push(
                <Text
                    key={i}
                    style={j === 0 || j === 6 ?
                        [styles.weekendHeading, this.props.customStyle.weekendHeading] :
                        [styles.dayHeading, this.props.customStyle.dayHeading]}
                >
                    {this.props.dayHeadings[j]}
                </Text>
            );
        }

        return (
            <View style={[styles.calendarHeading, this.props.customStyle.calendarHeading]}>
                {headings}
            </View>
        );
    }

    render() {
        const calendarDates = this.getMonthStack(this.state.currentMonthMoment);
        const eventDatesMap = this.prepareEventDates(this.props.eventDates, this.props.events);

        return (
            <View style={[styles.calendarContainer, this.props.customStyle.calendarContainer]}>
                {this.renderHeading(this.props.titleFormat)}
                {this.props.scrollEnabled ?
                    <ScrollView
                        ref={calendar => this._calendar = calendar}
                        horizontal
                        scrollEnabled
                        pagingEnabled
                        removeClippedSubviews
                        scrollEventThrottle={1000}
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets
                        onMomentumScrollEnd={(event) => this.scrollEnded(event)}
                    >
                        {calendarDates.map((date) => this.renderMonthView(moment(date), eventDatesMap))}
                    </ScrollView>
                    :
                    <View ref={calendar => this._calendar = calendar}>
                        {calendarDates.map((date) => this.renderMonthView(moment(date), eventDatesMap))}
                    </View>
                }
            </View>
        );
    }
}

Calendar.propTypes = {
    customStyle: React.PropTypes.object,
    dayHeadings: React.PropTypes.array,
    eventDates: React.PropTypes.array,
    monthNames: React.PropTypes.array,
    onDateSelect: React.PropTypes.func,
    onSwipeNext: React.PropTypes.func,
    onSwipePrev: React.PropTypes.func,
    onTouchNext: React.PropTypes.func,
    onTouchPrev: React.PropTypes.func,
    scrollEnabled: React.PropTypes.bool,
    selectedDate: React.PropTypes.any,
    showControls: React.PropTypes.bool,
    showEventIndicators: React.PropTypes.bool,
    startDate: React.PropTypes.any,
    titleFormat: React.PropTypes.string,
    today: React.PropTypes.any.isRequired,
    weekStart: React.PropTypes.number
};

Calendar.defaultProps = {
    customStyle: {},
    width: DEVICE_WIDTH,
    dayHeadings: [],
    eventDates: [],
    monthNames: [],
    scrollEnabled: false,
    showControls: false,
    showEventIndicators: false,
    startDate: moment().format('YYYY-MM-DD'),
    titleFormat: '',
    weekStart: 1
};

export default Calendar;
