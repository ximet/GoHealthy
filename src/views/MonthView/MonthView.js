import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthViewSelector } from '../../selectors/monthViewSelector/monthViewSelector.js';
import { monthViewActions } from '../../actions/monthViewActions/monthViewActions.js';

export const MonthView = connect(monthViewSelector, monthViewActions)((props) => {

    return <View>

    </View>
});
