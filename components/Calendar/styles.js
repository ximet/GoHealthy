import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    calendarContainer: {
        marginTop: 20
    },
    monthContainer: {
        width: DEVICE_WIDTH
    },
    calendarControls: {
        flexDirection: 'row'
    },
    controlButton: {
    },
    controlButtonText: {
        margin: 10,
        fontSize: 15
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        margin: 10
    },
    calendarHeading: {
        flexDirection: 'row'
    },
    dayHeading: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 5
    },
    weekendHeading: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 5,
    },
    weekRow: {
        flexDirection: 'row'
    },
    dayButton: {
        alignItems: 'center',
        padding: 7,
        width: DEVICE_WIDTH / 7
    },
    dayButtonFiller: {
        padding: 7,
        width: DEVICE_WIDTH / 7
    },
    day: {
        fontSize: 16,
        alignSelf: 'center'
    },
    eventIndicatorFiller: {
        marginTop: 3,
        borderColor: 'transparent',
        width: 4,
        height: 4,
        borderRadius: 2
    },
    eventIndicator: {
        backgroundColor: '#cccccc'
    },
    dayCircleFiller: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: 45,
        height: 45,
        borderRadius: 40
    },
    currentDayCircle: {

    },
    currentDayText: {
        color: 'red'
    },
    selectedDayCircle: {
        backgroundColor: '#afc6e9'
    },
    hasEventCircle: {
    },
    hasEventDaySelectedCircle: {
    },
    hasEventText: {
    },
    selectedDayText: {

    },
    weekendDayText: {
    }
});

export default styles;
