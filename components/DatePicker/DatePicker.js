import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TouchableHighlight,
    DatePickerAndroid,
    TimePickerAndroid,
    DatePickerIOS,
    Platform,
    Animated
} from 'react-native';
import Style from './DatePickerStyles.js';
import moment from 'moment';

const FORMATS = {
    'date': 'YYYY-MM-DD',
    'datetime': 'YYYY-MM-DD HH:mm',
    'time': 'HH:mm'
};

class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: this.getDate(),
            modalVisible: false,
            animatedHeight: new Animated.Value(0)
        };

        this.datePicked = this.datePicked.bind(this);
        this.onPressDate = this.onPressDate.bind(this);
        this.onPressCancel = this.onPressCancel.bind(this);
        this.onPressConfirm = this.onPressConfirm.bind(this);
        this.onDatePicked = this.onDatePicked.bind(this);
        this.onTimePicked = this.onTimePicked.bind(this);
        this.onDatetimePicked = this.onDatetimePicked.bind(this);
        this.onDatetimeTimePicked = this.onDatetimeTimePicked.bind(this);
        this.setModalIOSPickerVisible = this.setModalIOSPickerVisible.bind(this);
        this.renderIOSPicker = this.renderIOSPicker.bind(this);
        this.renderModalWindowForIOSPicker = this.renderModalWindowForIOSPicker.bind(this);
    }

    setModalIOSPickerVisible (visible) {
        const { height, duration } = this.props;

        if (visible) {
            this.setState({ modalVisible: visible });
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: height,
                    duration: duration
                }
            ).start();
        }
        else {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: duration
                }
            ).start(() => {
                this.setState({ modalVisible: visible });
            });
        }
    }

    onPressCancel () {
        this.setModalIOSPickerVisible(false);
    }

    onPressConfirm () {
        this.datePicked();
        this.setModalIOSPickerVisible(false);
    }

    getDate(date = this.props.date) { //FIXME this method to only moment Date
        const { mode, minDate, maxDate, format = FORMATS[mode] } = this.props;

        if (!date) {
            const now = new Date();
            if (minDate) {
                const _minDate = this.getDate(minDate);

                if (now < _minDate) {
                    return _minDate;
                }
            }

            if (maxDate) {
                const _maxDate = this.getDate(maxDate);

                if (now > _maxDate) {
                    return _maxDate;
                }
            }

            return now;
        }

        return moment(date, format).toDate();
    }

    getDateStr(date = this.props.date) {
        const {mode, format = FORMATS[mode]} = this.props;

        if (date instanceof Date) {
            return moment(date).format(format);
        }

        return moment(this.getDate(date)).format(format);
    }

    datePicked() {
        this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
    }

    getTitleElement() {
        const { date, placeholder } = this.props;

        if (!date && placeholder) {
            return (<Text style={ Style.placeholderText }>{ placeholder }</Text>);
        }
        return (<Text style={ Style.dateText }>{ this.getDateStr() }</Text>);
    }

    onDatePicked({action, year, month, day}) {
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({
                date: new Date(year, month, day)
            });
            this.datePicked();
        }
    }

    onTimePicked({action, hour, minute}) {
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({
                date: moment().hour(hour).minute(minute).toDate()
            });
            this.datePicked();
        }
    }

    onDatetimePicked({action, year, month, day}) {
        const {mode, format = FORMATS[mode], is24Hour = !format.match(/h|a/)} = this.props;

        if (action !== DatePickerAndroid.dismissedAction) {
            let timeMoment = moment(this.state.date);

            TimePickerAndroid.open({
                hour: timeMoment.hour(),
                minute: timeMoment.minutes(),
                is24Hour: is24Hour
            }).then(this.onDatetimeTimePicked.bind(this, year, month, day));
        }
    }

    onDatetimeTimePicked(year, month, day, {action, hour, minute}) {
        if (action !== DatePickerAndroid.dismissedAction) {

            this.setState({
                date: new Date(year, month, day, hour, minute)
            });

            this.datePicked();
        }
    }

    openAndroidPicker (props) {
        const { mode, format = FORMATS[mode], minDate, maxDate, is24Hour = !format.match(/h|a/) } = props;
        switch (mode) {
            case 'date': {
                DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate && this.getDate(minDate),
                    maxDate: maxDate && this.getDate(maxDate)
                }).then(this.onDatePicked);

                break;
            }
            case 'time': {
                let timeMoment = moment(this.state.date);

                TimePickerAndroid.open({
                    hour: timeMoment.hour(),
                    minute: timeMoment.minutes(),
                    is24Hour: is24Hour
                }).then(this.onTimePicked);

                break;
            }
            case 'datetime': {
                DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate && this.getDate(minDate),
                    maxDate: maxDate && this.getDate(maxDate)
                }).then(this.onDatetimePicked);

                break;
            }
        }
    }

    onPressDate () {
        if (this.props.disabled) {
            return true;
        }

        this.setState({
            date: this.getDate()
        });

        if (Platform.OS === 'ios') {
            this.setModalIOSPickerVisible(true);
        }
        else {
            this.openAndroidPicker(this.props);
        }
    }

    renderModalWindowForIOSPicker () {
        const { mode, minDate, maxDate, minuteInterval, timeZoneOffsetInMinutes, cancelBtnText, confirmBtnText } = this.props;

        return <Modal
            transparent={ true }
            animationType="none"
            visible={ this.state.modalVisible }
            supportedOrientations={ ["portrait"] }
            onRequestClose={ () => { this.setModalIOSPickerVisible(false) } }
        >
            <View
                style={{flex: 1}}
            >
                <TouchableHighlight
                    style={ Style.datePickerMask }
                    activeOpacity={ 1 }
                    underlayColor={ '#00000077' }
                    onPress={ this.onPressCancel }
                >
                    <TouchableHighlight
                        underlayColor={ '#fff' }
                        style={{flex: 1}}
                    >
                        <Animated.View
                            style={[ Style.datePickerCon, { height: this.state.animatedHeight } ]}
                        >
                            <DatePickerIOS
                                date={ this.state.date }
                                mode={ mode }
                                minimumDate={ minDate && this.getDate(minDate) }
                                maximumDate={ maxDate && this.getDate(maxDate) }
                                onDateChange={ (date) => this.setState({date: date}) }
                                minuteInterval={ minuteInterval}
                                timeZoneOffsetInMinutes={ timeZoneOffsetInMinutes }
                                style={ Style.datePicker }
                            />
                            <TouchableHighlight
                                underlayColor={ 'transparent' }
                                onPress={ this.onPressCancel }
                                style={[ Style.btnText, Style.btnCancel ]}
                            >
                                <Text style={[ Style.btnTextText, Style.btnTextCancel ]}>
                                    { cancelBtnText }
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={ 'transparent' }
                                onPress={ this.onPressConfirm }
                                style={[ Style.btnText, Style.btnConfirm ]}
                            >
                                <Text style={ Style.btnTextText }>{ confirmBtnText }</Text>
                            </TouchableHighlight>
                        </Animated.View>
                    </TouchableHighlight>
                </TouchableHighlight>
            </View>
        </Modal>
    }

    renderIOSPicker () {
        return Platform.OS === 'ios'
            ? this.renderModalWindowForIOSPicker()
            : null;
    }

    render() {

        return (
            <View  style={Style.inputComponent}>
                <Text style={Style.inputLabel}>
                    { this.props.label }
                </Text>
                <View style={Style.inputValue}>
                    <TouchableHighlight
                        style={Style.dateTouch}
                        underlayColor={'transparent'}
                        onPress={this.onPressDate}
                        >
                            <View style={Style.dateTouchBody}>


                                {this.getTitleElement()}

                                {this.renderIOSPicker()}
                            </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

DatePicker.propTypes = {
    mode: React.PropTypes.oneOf(['date', 'datetime', 'time']),
    date: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)]),
    format: React.PropTypes.string,
    minDate: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)]),
    maxDate: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)]),
    height: React.PropTypes.number,
    duration: React.PropTypes.number,
    confirmBtnText: React.PropTypes.string,
    cancelBtnText: React.PropTypes.string,
    customStyles: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    onDateChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    modalOnResponderTerminationRequest: React.PropTypes.func,
    is24Hour: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired
};

DatePicker.defaultProps = {
    mode: 'date',
    date: '',
    height: 259,

    duration: 300,
    confirmBtnText: 'Confirm',
    cancelBtnText: 'Cancel',
    customStyles: {},
    disabled: false,
    placeholder: '',
};

export default DatePicker;
