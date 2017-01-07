import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthViewSelector } from '../selectors/monthViewSelector.js';
import { monthViewActions } from '../actions/monthViewActions.js';

import Calendar from '../../components/Calendar/Calendar.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import WeekList from '../../components/WeekList/WeekList.js';

export const MonthView = connect(monthViewSelector, monthViewActions)((props) => {

    return <View>
            <TextLabel label={'smth label'}/>
    </View>
});
