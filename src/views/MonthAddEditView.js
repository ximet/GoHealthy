import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthAddEditViewSelector } from '../selectors/monthAddEditViewSelector.js';
import { monthAddEditViewActions, ADD_ITEM } from '../actions/monthAddEditViewActions.js';
import { CHANGE_LABEL, CHANGE_PLACE, CHANGE_FULL_NAME, SAVE_ITEM } from '../actions/monthAddEditViewActions.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';


import Calendar from '../../components/Calendar/Calendar.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

export const MonthAddEditView = connect(monthAddEditViewSelector, monthAddEditViewActions)((props) => {
    const custom = {date:"2016-05-15"}
    return <View>
        <TextLabel label={'Тут будет хэдер.'} />

        <Input label="Enter Label"
               onChange={ (text) => { props[CHANGE_LABEL](text)} }
               value={ props.label } />
        <Input label="center Text"
               onChange={ (text) => { props[CHANGE_PLACE](text)} }
               value={ props.place } />

        <Input label="doctor Text"
               onChange={ (text) => { props[CHANGE_FULL_NAME](text)} }
               value={ props.fullName } />

        <Button
            label={ 'Сохранить' }
            onPressButton={ props[SAVE_ITEM] }
        />
        <DatePicker
            style={{width: 200}}
            date={custom.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => console.log('MyDate:', date)}
        />
    </View>
});
