import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { appViewSelector } from '../selectors/appViewSelector.js';
import { appViewActions } from '../actions/appViewActions.js';
import * as views from './index.js';
import TextLabel from '../../components/TextLabel/TextLabel.js';


export const AppView = connect(appViewSelector, appViewActions)((props) => {
    const ActiveView = views[props.activeViewName];
    console.log(ActiveView);


    return <View>
        {
            ActiveView
                ? <ActiveView/>
                : <TextLabel label={'Error 404: Some problem'}/>
        }
    </View>
});
