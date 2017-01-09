import React from 'react';
import HardwareBackButtonAndroid from './HardwareBackButtonAndroid.js';
import HardwareBackButtonIOS from './HardwareBackButtonIOS.js';

const BackButton = (props) => {
    const { Platform } = React;

    if (Platform.OS === 'ios') {
        return (
            <HardwareBackButtonIOS />
        );
    }
    else {
        return (
            <HardwareBackButtonAndroid />
        )
    }
};

export default BackButton;
