import React from 'react';
import { View } from 'react-native';

import styles from './ViewScreenStyles.js';

const ViewScreen = (props) => {
    return (
        <View style={ styles.ViewScreenComponent }>
            { props.children }
        </View>
    );
};

export default ViewScreen;
