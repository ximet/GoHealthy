import React from 'react';
import is from 'is_js';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import './Day.scss';

const Day = (props) => {
    const getDayEvent = <div style={ { background: is.not.null(props.colorDay) ? '#52788F' : '' } } className={ getElementNameChain(Day, 'event-day') }></div>

    const isCurrentDate = props.day.isSame(props.currentDay, 'day');

    return <div className={ getComponentNameChain(Day, { isDisabled: props.isOldDay }) } >
        { getDayEvent }
        <div className={ getElementNameChain(Day, 'day') } onClick={ props.onDayClick.bind(null, props.day) }>
            <div className={ getElementNameChain(Day, 'today', { isCurrentDate: isCurrentDate })}></div>
            <div className={ getElementNameChain(Day, 'numberDay', { isCurrentDate: isCurrentDate }) }>
                { props.day.format('D') }
            </div>
            <div className={ getElementNameChain(Day, 'overlay', { isOldDay: props.isOldDay })}></div>
        </div>
    </div>
};

Day.displayName = 'Day';
Day.ancestor = BaseComponent;

Day.propTypes = {
    day: React.PropTypes.object.isRequired,
    currentDay: React.PropTypes.object,
    colorDay: React.PropTypes.string,
    isOldDay: React.PropTypes.bool,
    onDayClick: React.PropTypes.func
};

Day.defaultProps = {
    currentDay: {},
    colorDay: '',
    isOldDay: false,
    onDayClick: () => {}
};

export default Day;

