import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthAddEditViewSelector } from '../selectors/monthAddEditViewSelector.js';
import { monthAddEditViewActions, ADD_ITEM } from '../actions/monthAddEditViewActions.js';

import Calendar from '../../components/Calendar/Calendar.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

export const MonthAddEditView = connect(monthAddEditViewSelector, monthAddEditViewActions)((props) => {

    return <View>
        <TextLabel label={'Тут будет хэдер.'} />
        <Input />
        <Input label="Enter Label" onChange={() => {}}/>
        <Input label="center Text" onChange={() => {}}/>

        <Input label="doctor Text" onChange={() => {}}/>

    </View>
});
