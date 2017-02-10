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
import Style from './style';
import moment from 'moment';

const FORMATS = {
    'date': 'YYYY-MM-DD',
    'datetime': 'YYYY-MM-DD HH:mm',
    'time': 'HH:mm'
};

const SUPPORTED_ORIENTATIONS = ["portrait", "portrait-upside-down", "landscape", "landscape-left", "landscape-right"];

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
        this.openIOSDatePicker = this.openIOSDatePicker.bind(this);
    }

    openIOSDatePicker(visible) {
        const {height, duration} = this.props;

        if (visible) {
            this.setState({modalVisible: visible});
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: height,
                    duration: duration
                }
            ).start();
        } else {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: duration
                }
            ).start(() => {
                this.setState({modalVisible: visible});
            });
        }
    }

    onStartShouldSetResponder(e) {
        return true;
    }

    onMoveShouldSetResponder(e) {
        return true;
    }

    onPressCancel() {
        this.setModalVisible(false);

        if (typeof this.props.onCloseModal === 'function') {
            this.props.onCloseModal();
        }
    }

    onPressConfirm() {
        this.datePicked();
        this.setModalVisible(false);

        if (typeof this.props.onCloseModal === 'function') {
            this.props.onCloseModal();
        }
    }

    getDate(date = this.props.date) {
        const {mode, minDate, maxDate, format = FORMATS[mode]} = this.props;

        if (!date) {
            let now = new Date();
            if (minDate) {
                let _minDate = this.getDate(minDate);

                if (now < _minDate) {
                    return _minDate;
                }
            }

            if (maxDate) {
                let _maxDate = this.getDate(maxDate);

                if (now > _maxDate) {
                    return _maxDate;
                }
            }

            return now;
        }

        if (date instanceof Date) {
            return date;
        }

        return moment(date, format).toDate();
    }

    getDateStr(date = this.props.date) {
        const {mode, format = FORMATS[mode]} = this.props;

        if (date instanceof Date) {
            return moment(date).format(format);
        } else {
            return moment(this.getDate(date)).format(format);
        }
    }

    datePicked() {
        if (typeof this.props.onDateChange === 'function') {
            this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
        }
    }

    getTitleElement() {
        const {date, placeholder, customStyles} = this.props;

        if (!date && placeholder) {
            return (<Text style={[Style.placeholderText, customStyles.placeholderText]}>{placeholder}</Text>);
        }
        return (<Text style={[Style.dateText, customStyles.dateText]}>{this.getDateStr()}</Text>);
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

    openAndroidDatePicker(props) {
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

    onPressDate() {
        if (this.props.disabled) {
            return true;
        }

        this.setState({
            date: this.getDate()
        });

        if (Platform.OS === 'ios') {
            this.openIOSDatePicker(true);
        } else {
            this.openAndroidDatePicker(this.props);
        }

        if (typeof this.props.onOpenModal === 'function') {
            this.props.onOpenModal();
        }
    }

    render() {
        const {
            mode,
            style,
            customStyles,
            disabled,
            showIcon,
            iconSource,
            minDate,
            maxDate,
            minuteInterval,
            timeZoneOffsetInMinutes,
            cancelBtnText,
            confirmBtnText
        } = this.props;

        const dateInputStyle = [
            Style.dateInput, customStyles.dateInput,
            disabled && Style.disabled,
            disabled && customStyles.disabled
        ];

        return (
            <TouchableHighlight
                style={[Style.dateTouch, style]}
                underlayColor={'transparent'}
                onPress={this.onPressDate}
            >
                <View style={[Style.dateTouchBody, customStyles.dateTouchBody]}>
                    <View style={dateInputStyle}>
                        {this.getTitleElement()}
                    </View>
                    {showIcon && <Image
                        style={[Style.dateIcon, customStyles.dateIcon]}
                        source={iconSource}
                    />}
                    {Platform.OS === 'ios' && <Modal
                        transparent={true}
                        animationType="none"
                        visible={this.state.modalVisible}
                        supportedOrientations={SUPPORTED_ORIENTATIONS}
                        onRequestClose={() => {this.setModalVisible(false);}}
                    >
                        <View
                            style={{flex: 1}}
                        >
                            <TouchableHighlight
                                style={Style.datePickerMask}
                                activeOpacity={1}
                                underlayColor={'#00000077'}
                                onPress={this.onPressCancel}
                            >
                                <TouchableHighlight
                                    underlayColor={'#fff'}
                                    style={{flex: 1}}
                                >
                                    <Animated.View
                                        style={[Style.datePickerCon, {height: this.state.animatedHeight}, customStyles.datePickerCon]}
                                    >
                                        <DatePickerIOS
                                            date={this.state.date}
                                            mode={mode}
                                            minimumDate={minDate && this.getDate(minDate)}
                                            maximumDate={maxDate && this.getDate(maxDate)}
                                            onDateChange={(date) => this.setState({date: date})}
                                            minuteInterval={minuteInterval}
                                            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                                            style={[Style.datePicker, customStyles.datePicker]}
                                        />
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={this.onPressCancel}
                                            style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}
                                        >
                                            <Text
                                                style={[Style.btnTextText, Style.btnTextCancel, customStyles.btnTextCancel]}
                                            >
                                                {cancelBtnText}
                                            </Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={this.onPressConfirm}
                                            style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}
                                        >
                                            <Text style={[Style.btnTextText, customStyles.btnTextConfirm]}>{confirmBtnText}</Text>
                                        </TouchableHighlight>
                                    </Animated.View>
                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                    </Modal>}
                </View>
            </TouchableHighlight>
        );
    }
}

DatePicker.defaultProps = {
    mode: 'date',
    date: '',
    height: 259,
    duration: 300,
    confirmBtnText: '确定',
    cancelBtnText: '取消',
    customStyles: {},
    showIcon: true,
    disabled: false,
    placeholder: '',
};

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
    iconSource: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]),
    customStyles: React.PropTypes.object,
    showIcon: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onDateChange: React.PropTypes.func,
    onOpenModal: React.PropTypes.func,
    onCloseModal: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    is24Hour: React.PropTypes.bool
};

export default DatePicker;
