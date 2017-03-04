import React from 'react';
import { connect } from 'react-redux';
import { View,Text } from 'react-native';
import Tabs from 'react-native-tabs';
import ViewScreen from '../../components/ViewScreen/ViewScreen.js';


export const CalendarTabView = connect(calendarTabViewSelector, calendarTabViewActions)((props) => {

    return <ViewScreen>
            <Tabs selected={true} style={{backgroundColor:'white'}}
                  selectedStyle={{color:'red'}}>
                <Text name="first">First</Text>
                <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
                <Text name="third">Third</Text>
                <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
                <Text name="fifth">Fifth</Text>
            </Tabs>

    </ViewScreen>
});
