import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthAddEditViewSelector } from '../selectors/monthAddEditViewSelector.js';
import { monthAddEditViewActions, ADD_ITEM } from '../actions/monthAddEditViewActions.js';
import { CHANGE_LABEL, CHANGE_FULL_NAME, CHANGE_DATE, CHANGE_TIME_FROM, CHANGE_TIME_TO, CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_GROUP, CHANGE_PLACE, SAVE_ITEM, CHANGE_ACCEPT_VISIT } from '../actions/monthAddEditViewActions.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';
import Switch from '../../components/Switch/Switch.js';

import TextLabel from '../../components/TextLabel/TextLabel.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

export const MonthAddEditView = connect(monthAddEditViewSelector, monthAddEditViewActions)((props) => {
    const custom = {date:"2016-05-15"};

    return <View>
        <TextLabel label={'Тут будет хэдер.'} />

        <Input label="Содержание: "
               onChange={ (text) => props[CHANGE_LABEL](text) }
               value={ props.label } />

        <DatePicker
            label = { 'Дата визита: ' }
            style={{width: 200}}
            date={props.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-05-01"
            maxDate="2100-06-01"
            onDateChange={(date) => props[CHANGE_DATE](date)}
        />

        <DatePicker
            label = { 'Время с: ' }
            style={{width: 200}}
            date={props.timeFrom}
            mode="time"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-05-01"
            maxDate="2100-06-01"
            onDateChange={(date) => props[CHANGE_TIME_FROM](date)}
        />

        <DatePicker
            label = { 'Время по: ' }
            style={{width: 200}}
            date={props.timeTo}
            mode="time"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-05-01"
            maxDate="2100-06-01"
            onDateChange={(date) => props[CHANGE_TIME_TO](date)}
        />

        <Input label="Категория: "
               onChange={ (text) => { props[CHANGE_CATEGORY](text)} }
               value={ props.category } />

        <Input label="Описание: "
               onChange={ (text) => { props[CHANGE_DESCRIPTION](text)} }
               value={ props.description } />

        <Input label="ФИО: "
               onChange={ (text) => { props[CHANGE_FULL_NAME](text)} }
               value={ props.fullName } />

        <Input label="Группа: "
               onChange={ (text) => { props[CHANGE_GROUP](text)} }
               value={ props.group } />

        <Input label="Место: "
               onChange={ (text) => { props[CHANGE_PLACE](text)} }
               value={ props.place } />


        <Switch onChangeState={(state)=>{ props[CHANGE_ACCEPT_VISIT](state) }}/>


        <Button
            label={ 'Сохранить' }
            onPressButton={ props[SAVE_ITEM] }
        />
    </View>
});
