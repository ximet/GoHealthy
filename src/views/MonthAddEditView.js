import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { monthAddEditViewSelector } from '../selectors/monthAddEditViewSelector.js';
import { monthAddEditViewActions, ADD_ITEM } from '../actions/monthAddEditViewActions.js';
import { CHANGE_LABEL, CHANGE_FULL_NAME, CHANGE_DATE, CHANGE_TIME_FROM, CHANGE_TIME_TO, CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_GROUP, CHANGE_PLACE, SAVE_ITEM, CHANGE_ACCEPT_VISIT } from '../actions/monthAddEditViewActions.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';
import LabelSwitcher from '../../components/LabelSwitcher/LabelSwitcher.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';
import ViewScreen from '../../components/ViewScreen/ViewScreen.js';
import * as staticLocale from '../static/i18n/en/staticLocale.js'

export const MonthAddEditView = connect(mapStateToProps, monthAddEditViewActions)((props) => {

    return <ViewScreen>
        <Row isElastic={true}>
        <TextLabel label={'Тут будет хэдер.'} />

        <Input label={staticLocale.content}
               onChange={ (text) => props[CHANGE_LABEL](text) }
               value={ props.label } />

        <DatePicker
            label = { staticLocale.dateOfVisit }
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
            label = {staticLocale.timeFrom}
            style={{width: 200}}
            date={props.timeFrom}
            mode="time"
            placeholder="select date"
            format="HH:mm"
            minDate="2000-05-01"
            maxDate="2100-06-01"
            onDateChange={(date) => props[CHANGE_TIME_FROM](date)}
        />

        <DatePicker
            label = {staticLocale.timeTo}
            style={{width: 200}}
            date={props.timeTo}
            mode="time"
            placeholder="select date"
            format="HH:mm"
            minDate="2000-05-01"
            maxDate="2100-06-01"
            onDateChange={(date) => props[CHANGE_TIME_TO](date)}
        />

        <Input label={staticLocale.category}
               onChange={ (text) => { props[CHANGE_CATEGORY](text)} }
               value={ props.category } />

        <Input label={staticLocale.description}
               onChange={ (text) => { props[CHANGE_DESCRIPTION](text)} }
               value={ props.description } />

        <Input label={staticLocale.fullName}
               onChange={ (text) => { props[CHANGE_FULL_NAME](text)} }
               value={ props.fullName } />

        <Input label={staticLocale.group}
               onChange={ (text) => { props[CHANGE_GROUP](text)} }
               value={ props.group } />

        <Input label={staticLocale.place}
               onChange={ (text) => { props[CHANGE_PLACE](text)} }
               value={ props.place } />


        <LabelSwitcher  label={staticLocale.acceptVisit}
                        onChangeState={(state)=>{ props[CHANGE_ACCEPT_VISIT](state) }} />

        </Row>
        <Button
            label={ 'Сохранить' }
            onPressButton={ props[SAVE_ITEM] }
        />
    </ViewScreen>
});

export const mapStateToProps = (state) => {
    return {
        label: state['monthAddEditViewReducer'].getIn([ 'label' ]),
        date: ,
        timeFrom:
    };
};
